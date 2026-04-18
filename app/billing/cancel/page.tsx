import type { Metadata } from 'next'
import { LinkButton } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Checkout canceled · Versani',
  robots: { index: false, follow: false },
}

export default function BillingCancelPage() {
  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-lg text-center">
        <h1 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
          Checkout canceled
        </h1>
        <p className="text-muted-foreground mb-10 leading-relaxed">
          No worries. Your card was not charged. When you&apos;re ready, head
          back to pricing and choose your tier.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <LinkButton href="/pricing" variant="gold-solid" size="lg">
            Back to pricing
          </LinkButton>
          <LinkButton href="/" variant="gold-outline" size="lg">
            Home
          </LinkButton>
        </div>
      </div>
    </main>
  )
}
