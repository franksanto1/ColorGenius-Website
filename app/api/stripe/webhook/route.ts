/**
 * Stripe webhook handler.
 * Handles subscription lifecycle events, updates Supabase profiles.
 *
 * Required Supabase schema (see SCHEMA-REQUIREMENTS.md):
 *   profiles.stripe_customer_id (text, indexed)
 *   profiles.subscription_tier (text)
 *   profiles.subscription_status (text)
 *   profiles.current_period_end (timestamptz)
 */
import { NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe'
import { createServiceClient } from '@/lib/supabase/server'
import type Stripe from 'stripe'

// Stripe webhooks need the raw body for signature verification
export async function POST(request: Request) {
  const sig = request.headers.get('stripe-signature')
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET

  if (!sig || !webhookSecret) {
    return NextResponse.json({ error: 'Missing signature or secret' }, { status: 400 })
  }

  const body = await request.text()
  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(body, sig, webhookSecret)
  } catch (err) {
    const msg = err instanceof Error ? err.message : 'Invalid signature'
    console.error('Webhook signature verification failed:', msg)
    return NextResponse.json({ error: msg }, { status: 400 })
  }

  const supabase = createServiceClient()

  try {
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object as Stripe.Checkout.Session
        const userId = session.metadata?.supabase_user_id
        const tier = session.metadata?.tier
        if (userId && session.subscription) {
          await supabase
            .from('profiles')
            .update({
              stripe_customer_id: session.customer as string,
              subscription_tier: tier || null,
              subscription_status: 'active',
            })
            .eq('id', userId)
        }
        break
      }

      case 'customer.subscription.updated': {
        const sub = event.data.object as Stripe.Subscription
        const userId = sub.metadata?.supabase_user_id
        const tier = sub.metadata?.tier
        if (userId) {
          // Newer Stripe API nests billing period on items[0].current_period_end
          const periodEnd =
            sub.items?.data?.[0]?.current_period_end ||
            (sub as unknown as { current_period_end?: number }).current_period_end
          await supabase
            .from('profiles')
            .update({
              subscription_tier: tier || null,
              subscription_status: sub.status,
              current_period_end: periodEnd
                ? new Date(periodEnd * 1000).toISOString()
                : null,
            })
            .eq('id', userId)
        }
        break
      }

      case 'customer.subscription.deleted': {
        const sub = event.data.object as Stripe.Subscription
        const userId = sub.metadata?.supabase_user_id
        if (userId) {
          await supabase
            .from('profiles')
            .update({
              subscription_status: 'canceled',
            })
            .eq('id', userId)
        }
        break
      }

      case 'invoice.payment_failed': {
        const invoice = event.data.object as Stripe.Invoice
        const customerId = invoice.customer as string
        if (customerId) {
          await supabase
            .from('profiles')
            .update({ subscription_status: 'past_due' })
            .eq('stripe_customer_id', customerId)
        }
        break
      }

      default:
        // Unhandled event type — acknowledge to prevent retries
        break
    }

    return NextResponse.json({ received: true })
  } catch (err) {
    console.error(`Webhook handler error for ${event.type}:`, err)
    // Return 200 so Stripe doesn't retry endlessly on our DB issues
    return NextResponse.json({ received: true, warning: 'Processing error logged' })
  }
}
