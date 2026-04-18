/**
 * Stripe client — STUB.
 *
 * Placeholder for the future Stripe integration. Not functional until
 * the real dependency is installed and keys are configured.
 *
 * Required environment variables (see .env.local.example):
 *   - STRIPE_SECRET_KEY          (server only)
 *   - NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
 *   - STRIPE_WEBHOOK_SECRET      (for /api/webhooks/stripe)
 *
 * Versani price IDs (one per tier) should be wired here once created
 * in the Stripe dashboard:
 *   - NEXT_PUBLIC_STRIPE_PRICE_PRO
 *   - NEXT_PUBLIC_STRIPE_PRICE_STUDIO
 *   - NEXT_PUBLIC_STRIPE_PRICE_STUDIO_PLUS
 *   - NEXT_PUBLIC_STRIPE_PRICE_SALON_SEAT   (per-seat metered)
 *
 * To activate:
 *   npm install stripe @stripe/stripe-js
 */

export type VersaniTier =
  | 'free-trial'
  | 'pro'
  | 'studio'
  | 'studio-plus'
  | 'salon'

export const TIER_PRICE_IDS: Record<
  Exclude<VersaniTier, 'free-trial' | 'salon'>,
  string | undefined
> = {
  pro: process.env.NEXT_PUBLIC_STRIPE_PRICE_PRO,
  studio: process.env.NEXT_PUBLIC_STRIPE_PRICE_STUDIO,
  'studio-plus': process.env.NEXT_PUBLIC_STRIPE_PRICE_STUDIO_PLUS,
}

export function readStripeEnv() {
  const secret = process.env.STRIPE_SECRET_KEY
  const publishable = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET

  if (!publishable) {
    throw new Error(
      'Stripe is not configured. Set NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY.',
    )
  }

  return { secret, publishable, webhookSecret }
}

export function getServerStripeClient(): never {
  throw new Error(
    'Stripe server client not wired. Install `stripe` and replace this stub.',
  )
}
