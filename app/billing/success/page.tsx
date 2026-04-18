import type { Metadata } from 'next'
import { LinkButton } from '@/components/ui/Button'

// Force dynamic rendering — uses Stripe secret at runtime, not build time
export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Welcome to Versani',
  description: 'Your subscription is active. Welcome to Versani.',
  robots: { index: false, follow: false },
}

type Props = {
  searchParams: Promise<{ session_id?: string }>
}

export default async function BillingSuccessPage({ searchParams }: Props) {
  const { session_id } = await searchParams
  let tierName = 'Pro'

  if (session_id && process.env.STRIPE_SECRET_KEY) {
    try {
      const { stripe } = await import('@/lib/stripe')
      const session = await stripe.checkout.sessions.retrieve(session_id, {
        expand: ['subscription'],
      })
      const sub = session.subscription
      if (sub && typeof sub !== 'string') {
        tierName = (sub.metadata?.tier || 'Pro').replace('-', ' ')
      }
    } catch {
      // Session retrieval failed — show generic welcome
    }
  }

  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-lg text-center">
        <div className="mb-8">
          <span className="inline-block px-4 py-1 rounded-full bg-gold/10 border border-gold/30 text-xs uppercase tracking-[0.2em] text-gold">
            Subscription Active
          </span>
        </div>
        <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
          Welcome to Versani <span className="text-gold italic">{tierName}</span>
        </h1>
        <p className="text-muted-foreground mb-10 leading-relaxed">
          Your membership is active. You now have access to the complete Versani
          experience — adaptive AI consultation, client intelligence, and the
          tools built for your craft.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <LinkButton href="/admin" variant="gold-solid" size="lg">
            Open your dashboard
          </LinkButton>
          <LinkButton href="/" variant="gold-outline" size="lg">
            Back to home
          </LinkButton>
        </div>
      </div>
    </main>
  )
}
