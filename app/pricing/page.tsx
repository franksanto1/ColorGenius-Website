import type { Metadata } from 'next'
import Link from 'next/link'
import { SiteNav } from '@/components/nav/SiteNav'
import { SiteFooter } from '@/components/nav/SiteFooter'
import {
  PricingClient,
  SalonCalculator,
  FAQItem,
} from '@/components/pricing/PricingClient'

export const metadata: Metadata = {
  title: 'Pricing — Five tiers, zero compromise',
  description:
    'Pricing that respects your craft. Five Versani tiers — Free Trial, Pro, Studio, Studio Plus, and Salon — with per-seat salon pricing and a 14-day full-access trial.',
  alternates: { canonical: '/pricing' },
  openGraph: {
    title: 'Versani Pricing — Five tiers, zero compromise',
    description:
      'Five tiers designed around how professionals actually work. Start free for 14 days — no card required.',
    url: '/pricing',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Versani Pricing',
    description:
      'Five tiers designed around how professionals actually work.',
  },
}

const upgradeHighlights = [
  {
    title: 'More full consultations (65 → 100)',
    body: 'Enough headroom for heavy new-client weeks. Refreshes stay unlimited at every tier.',
  },
  {
    title: 'Unlimited virtual try-ons (25 → ∞)',
    body: 'Show every client their future color — no counting.',
  },
  {
    title: 'Unlimited post-treatment scoring',
    body: 'Rate every service. Watch your craft compound.',
  },
  {
    title: 'Unlimited voice narration',
    body: 'Hands busy mixing? Every formula reads itself to you.',
  },
  {
    title: 'AI pattern insights & benchmarks',
    body: 'The dashboard tells you where you excel and where to grow — and how you rank against top stylists.',
  },
  {
    title: 'Weekly performance digest',
    body: 'A Sunday-morning read on your week: scores, trends, and what to focus on next.',
  },
]

const comparisonRows = [
  { feature: 'Free-trial length', versani: '14 days, full Studio access', blendsor: '7 days' },
  { feature: 'Pro tier full consultations / month', versani: '65 (full AI flow)', blendsor: '50 formulas only' },
  { feature: 'Client updates for returning clients', versani: '150–250 / month by tier', blendsor: 'Count against cap' },
  { feature: 'Pro tier price', versani: '$19.99', blendsor: '€19 (~$21)' },
  { feature: 'Unlimited client profiles (Pro)', versani: 'Yes', blendsor: 'Capped at 100' },
  { feature: 'Virtual try-ons (Pro)', versani: '30 / month', blendsor: '20 / month' },
  { feature: 'Virtual try-ons (Studio)', versani: 'Unlimited', blendsor: 'Capped' },
  { feature: 'AI preview rendering', versani: 'Bundled with consult', blendsor: '—' },
  { feature: 'Post-treatment AI scoring', versani: '65 Pro / 150 Studio / 200 Studio Plus', blendsor: '—' },
  { feature: 'Performance dashboard & trends', versani: 'Yes (Studio)', blendsor: '—' },
  { feature: 'Personal RAG data ownership', versani: 'Yes', blendsor: '—' },
  { feature: 'Your actual inventory drives every formula', versani: 'Yes', blendsor: '—' },
  { feature: 'Voice formula narration', versani: 'Yes (Studio)', blendsor: '—' },
  { feature: 'Web research fallback', versani: 'Yes', blendsor: '—' },
  { feature: 'Specialist tier for high-volume pros', versani: 'Studio Plus (150/mo)', blendsor: '—' },
  { feature: 'Multi-seat salon tier (shared DB)', versani: 'Yes', blendsor: '—' },
]

const faqs = [
  {
    q: 'What counts as a full consultation vs a refresh?',
    a: 'A full consultation fires when you\u2019re working with a new client or making a major change — photo analysis, fresh formula generation, and situational AI support all run. A refresh is when you\u2019re pulling up an existing client for maintenance or minor tweaks (root touch-up, toner swap, gloss refresh). Refreshes are unlimited at every tier because they\u2019re where most of a real book lives. Caps only apply to full consultations.',
  },
  {
    q: 'What happens when I hit my monthly full-consultation limit?',
    a: 'You\u2019ll see a friendly prompt with the option to upgrade or wait until your next billing cycle when limits reset. Refreshes for your returning clients keep working — the cap only affects brand-new full consultations. All your past work stays fully accessible regardless.',
  },
  {
    q: 'Can I switch between tiers anytime?',
    a: 'Yes. Upgrades take effect immediately and you\u2019re prorated. Downgrades apply at your next billing cycle so you don\u2019t lose anything mid-month. No long-term commitments.',
  },
  {
    q: 'What exactly is included in the 14-day free trial?',
    a: 'Full Studio access — unlimited refreshes, Studio-level full consultations, unlimited virtual try-ons, post-treatment AI scoring, the full performance dashboard, voice narration. No credit card required upfront.',
  },
  {
    q: 'How does post-treatment AI scoring actually work?',
    a: 'After completing a color service, take a quick "after" photo. Versani compares it against your target formula and returns scores on tone accuracy, evenness, and hair integrity — along with a short written note on what worked and what could improve. About 30 seconds end-to-end.',
  },
  {
    q: 'When should I upgrade from Pro to Studio?',
    a: 'When you start hitting the 30 try-ons, 50 renderings, or 65 full-consultation cap on Pro — that means your new-client volume justifies it. Also: when you care more about patterns over time than individual results. Studio\u2019s performance dashboard turns scored services into stylist insight.',
  },
  {
    q: 'When does Studio Plus make sense?',
    a: 'When you\u2019re consistently pushing past 100 full consultations in a month. This is typical for color correction specialists, celebrity colorists, and stylists with heavy new-client acquisition. Studio Plus gives you 50 more full consultations, priority processing, advanced correction tooling, and early access to new Academy content — all for $15 more than Studio.',
  },
  {
    q: 'Is my data really mine?',
    a: 'Yes. Your personal RAG — your shade charts, formulas, client history, photos — belongs to you. We don\u2019t sell data, we don\u2019t centralize anyone\u2019s library. You can export everything anytime, and canceling puts your account into read-only mode instead of deleting anything.',
  },
]

export default function PricingPage() {
  return (
    <>
      <SiteNav />
      <main id="main" className="relative">
        {/* Hero */}
        <section
          aria-labelledby="pricing-hero-heading"
          className="relative isolate overflow-hidden pt-32 md:pt-40 pb-8 md:pb-12"
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 gold-radial pointer-events-none"
          />
          <div className="relative container text-center">
            <p className="text-xs uppercase tracking-[0.24em] text-[color:var(--gold)] mb-5">
              Membership
            </p>
            <h1
              id="pricing-hero-heading"
              className="font-serif font-light text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.05] tracking-tight text-[color:var(--foreground)]"
            >
              Pricing that respects{' '}
              <em className="italic font-normal text-[color:var(--gold)]">
                your craft
              </em>
            </h1>
            <p className="mt-7 max-w-2xl mx-auto text-base md:text-lg text-[color:var(--muted-foreground)] leading-relaxed">
              Five tiers designed around how professionals actually work. Every
              plan includes generous capacity for consultations and client
              updates. Start free for 14 days — no card required.
            </p>
          </div>
        </section>

        {/* Toggle + tier cards (client) */}
        <section
          aria-label="Pricing tiers"
          className="container pt-8 pb-24 md:pb-32"
        >
          <PricingClient />
        </section>

        {/* Upgrade reasons */}
        <section
          aria-labelledby="upgrade-heading"
          className="container pb-24 md:pb-28 max-w-5xl"
        >
          <div className="text-center mb-12">
            <div className="text-[10px] font-bold uppercase tracking-[0.25em] mb-3 text-[color:var(--gold)]">
              Choosing a tier
            </div>
            <h2
              id="upgrade-heading"
              className="font-serif text-3xl md:text-4xl font-light tracking-tight"
            >
              Moving from Pro to{' '}
              <em className="italic font-normal text-[color:var(--gold)]">
                Studio
              </em>{' '}
              means…
            </h2>
            <p className="text-sm text-white/55 mt-3 max-w-lg mx-auto">
              The same app, with the guardrails removed — and a layer of
              intelligence turned on.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {upgradeHighlights.map((item, i) => (
              <div
                key={i}
                className="rounded-2xl p-6 bg-white/[0.04] border border-white/[0.08]"
              >
                <div className="font-medium text-base mb-2 text-[color:var(--foreground)]">
                  {item.title}
                </div>
                <div className="text-sm text-white/60 leading-relaxed">
                  {item.body}
                </div>
              </div>
            ))}
          </div>

          <p className="text-xs text-white/40 text-center mt-10 italic">
            Most Pro users upgrade around week 6 — when limits start catching up
            to ambition.
          </p>
        </section>

        {/* Studio Plus callout */}
        <section className="container pb-24 md:pb-28 max-w-4xl">
          <div className="rounded-2xl p-8 md:p-12 bg-gradient-to-b from-[color:var(--gold)]/[0.06] to-[color:var(--gold)]/[0.01] border border-[color:var(--gold)]/[0.18]">
            <div className="text-[10px] font-bold uppercase tracking-[0.25em] mb-3 text-[color:var(--gold)]">
              When Studio isn&apos;t quite enough
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-light tracking-tight mb-5">
              Studio{' '}
              <em className="italic font-normal text-[color:var(--gold)]">
                Plus
              </em>{' '}
              is for the specialists
            </h2>
            <p className="text-base text-white/75 leading-relaxed mb-4">
              Color correction pros, celebrity colorists, and high-volume
              specialists often push past 100 full consultations in a strong
              month. Studio Plus adds 50 more full consultations (the best
              per-consult ratio in the lineup) plus priority AI processing,
              advanced correction tooling, and early access to new Academy
              masterclasses.
            </p>
            <p className="text-base text-white/65 leading-relaxed">
              If your book skews heavily toward new clients, major changes, or
              corrections — this is the tier that keeps up. For teams of 3+
              stylists sharing a practice, move up to Salon for per-seat
              economics.
            </p>
          </div>
        </section>

        {/* Salon calculator */}
        <section
          aria-labelledby="salon-heading"
          className="container pb-24 md:pb-28 max-w-4xl"
        >
          <div className="rounded-2xl p-8 md:p-12 bg-white/[0.04] border border-white/[0.08] text-center">
            <h2
              id="salon-heading"
              className="font-serif text-3xl md:text-4xl font-light tracking-tight mb-3"
            >
              Salon{' '}
              <em className="italic font-normal text-[color:var(--gold)]">
                Pricing
              </em>
            </h2>
            <p className="text-sm text-white/60 mb-10 max-w-md mx-auto">
              Every seat gets the full Studio-level experience. Pay per-seat —
              the rate decreases as your team grows.
            </p>

            <SalonCalculator />

            <p className="text-xs text-white/40 mt-8">
              50+ seats? Enterprise pricing available — talk to us. · Beauty
              schools: see dedicated{' '}
              <Link
                href="/schools"
                className="text-[color:var(--gold)] hover:underline"
              >
                school pricing
              </Link>
              .
            </p>
          </div>
        </section>

        {/* Versani vs Blendsor */}
        <section
          aria-labelledby="comparison-heading"
          className="container pb-24 md:pb-28 max-w-5xl"
        >
          <div className="text-center mb-10">
            <h2
              id="comparison-heading"
              className="font-serif text-3xl md:text-4xl font-light tracking-tight"
            >
              Versani{' '}
              <em className="italic font-normal text-[color:var(--gold)]">
                vs
              </em>{' '}
              Blendsor
            </h2>
            <p className="text-sm text-white/55 mt-2">
              How we compare across what matters.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden bg-white/[0.04] border border-white/[0.08]">
            <div className="grid grid-cols-[1.5fr_1fr_1fr] bg-white/[0.04] px-5 py-3 border-b border-white/[0.06]">
              <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/50">
                Feature
              </div>
              <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-center text-[color:var(--gold)]">
                Versani
              </div>
              <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-center text-white/40">
                Blendsor
              </div>
            </div>
            {comparisonRows.map((row, i) => (
              <div
                key={i}
                className={
                  'grid grid-cols-[1.5fr_1fr_1fr] px-5 py-3.5 items-center' +
                  (i < comparisonRows.length - 1
                    ? ' border-b border-white/[0.04]'
                    : '')
                }
              >
                <div className="text-sm text-white/80 font-medium">
                  {row.feature}
                </div>
                <div className="text-sm text-center text-[color:var(--gold)]">
                  {row.versani}
                </div>
                <div className="text-sm text-center text-white/40">
                  {row.blendsor}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section
          aria-labelledby="faq-heading"
          className="container pb-24 md:pb-28 max-w-3xl"
        >
          <div className="text-center mb-10">
            <div className="text-[10px] font-bold uppercase tracking-[0.25em] mb-3 text-[color:var(--gold)]">
              Common Questions
            </div>
            <h2
              id="faq-heading"
              className="font-serif text-3xl md:text-4xl font-light tracking-tight"
            >
              Answers to what you&apos;re{' '}
              <em className="italic font-normal text-[color:var(--gold)]">
                wondering
              </em>
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((item, i) => (
              <FAQItem key={i} question={item.q} answer={item.a} />
            ))}
          </div>
        </section>

        {/* Footer note */}
        <section className="container pb-24 max-w-3xl text-center">
          <p className="text-xs text-white/40 leading-relaxed">
            All prices in USD. No setup fees, no contracts. Cancel anytime. The
            14-day free trial auto-downgrades to read-only mode — your data is
            always preserved.
          </p>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
