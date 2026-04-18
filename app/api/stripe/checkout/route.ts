/**
 * Create a Stripe Checkout Session.
 * POST { tier, billing } → { url }
 */
import { NextResponse } from 'next/server'
import { stripe, getPriceId, type Tier, type Billing } from '@/lib/stripe'
import { createClient } from '@/lib/supabase/server'

export async function POST(request: Request) {
  try {
    const { tier, billing } = (await request.json()) as {
      tier: Tier
      billing: Billing
    }

    if (!tier || !billing) {
      return NextResponse.json(
        { error: 'Missing tier or billing period' },
        { status: 400 }
      )
    }

    const priceId = getPriceId(tier, billing)
    if (!priceId) {
      return NextResponse.json(
        { error: `Price not configured for ${tier} ${billing}` },
        { status: 400 }
      )
    }

    const supabase = await createClient()
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
      return NextResponse.json(
        { error: 'Not authenticated', redirect: '/auth?mode=signup&next=/pricing' },
        { status: 401 }
      )
    }

    const origin = new URL(request.url).origin

    // Look up or create Stripe customer, stored on profiles.stripe_customer_id
    let stripeCustomerId: string | null = null
    try {
      const { data: profile } = await supabase
        .from('profiles')
        .select('stripe_customer_id')
        .eq('id', user.id)
        .single()
      stripeCustomerId = profile?.stripe_customer_id || null
    } catch {
      // profile row or column doesn't exist yet — will create customer fresh
    }

    if (!stripeCustomerId) {
      const customer = await stripe.customers.create({
        email: user.email,
        metadata: { supabase_user_id: user.id },
      })
      stripeCustomerId = customer.id

      // Persist to profile (best-effort — requires schema migration)
      try {
        await supabase
          .from('profiles')
          .update({ stripe_customer_id: customer.id })
          .eq('id', user.id)
      } catch {
        console.error('Could not persist stripe_customer_id to profiles')
      }
    }

    const session = await stripe.checkout.sessions.create({
      customer: stripeCustomerId,
      mode: 'subscription',
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${origin}/billing/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/billing/cancel`,
      subscription_data: {
        metadata: {
          supabase_user_id: user.id,
          tier,
          billing,
        },
      },
      allow_promotion_codes: true,
      billing_address_collection: 'auto',
    })

    return NextResponse.json({ url: session.url })
  } catch (err) {
    const msg = err instanceof Error ? err.message : 'Unknown error'
    console.error('Stripe checkout error:', err)
    return NextResponse.json({ error: msg }, { status: 500 })
  }
}
