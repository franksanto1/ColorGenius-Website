import type { Metadata } from 'next'
import Link from 'next/link'
import { SiteNav } from '@/components/nav/SiteNav'
import { SiteFooter } from '@/components/nav/SiteFooter'
import {
  PricingClient,
  SalonCalculator,
  FAQItem,
  TopUpPacks,
} from '@/components/pricing/PricingClient'

export const metadata: Metadata = {
  title: 'Pricing — Five tiers, zero compromise',
  description:
    'Pricing that respects your craft. Five Versani tiers — Free Trial, Pro, Premium, Team, and Custom — with per-seat salon pricing, top-up consultation packs that never expire, and a 7-day full-access trial.',
  alternates: { canonical: '/pricing' },
  openGraph: {
    title: 'Versani Pricing — Five tiers, zero compromise',
    description:
      'Five tiers designed around how professionals actually work. 7-day full-access trial. Top up anytime — consultations never expire.',
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
    title: 'More full consultations (50 → 70)',
    body: 'Real headroom for heavy new-client weeks. Formula Reformulations rise with you (120 → 160).',
  },
  {
    title: 'AI client insights (Premium exclusive)',
    body: 'Individual client pattern analysis — "Sarah\u2019s retention improved 34%". Not available on Pro.',
  },
  {
    title: 'Revenue-per-client tracking (Premium exclusive)',
    body: 'Know your top 10% by lifetime value. Plus scheduling AI that prompts rebook outreach.',
  },
  {
    title: 'Unlimited virtual try-ons (50 → ∞)',
    body: 'Show every client their future color — fair-use threshold ~100/month.',
  },
  {
    title: 'Correction workflow UI + client-facing reports',
    body: 'Structured multi-step interface for correction cases, plus branded PDFs with your logo.',
  },
  {
    title: 'More of everything else',
    body: 'Post-treatment scoring (80 → 140), voice narrations (50 → 90), and Ask & Learn messages (75 → 150).',
  },
]

const comparisonRows = [
  { feature: 'Free-trial length', versani: '7-day full access' },
  { feature: 'Pro tier full consultations / month', versani: '50 (full AI flow) + overage packs' },
  { feature: 'Overage packs available', versani: 'Top-ups never expire' },
  { feature: 'Formula Reformulations for returning clients', versani: '200 Pro / 250 Premium' },
  { feature: 'Pro tier price', versani: '$19.99/mo or $203.89/yr' },
  { feature: 'Premium tier price', versani: '$26.99/mo or $275.29/yr' },
  { feature: 'Unlimited client profiles (Pro)', versani: 'Yes' },
  { feature: 'Virtual try-ons (Pro)', versani: '50 / month' },
  { feature: 'Virtual try-ons (Premium)', versani: 'Unlimited (fair-use ~100/mo)' },
  { feature: 'AI preview rendering', versani: 'Bundled with consult' },
  { feature: 'Post-treatment AI scoring', versani: 'Pro: weekly digest · Premium: full insights' },
  { feature: 'Full 90-day performance dashboard', versani: 'Included on Pro and Premium' },
  { feature: 'AI client insights', versani: 'Premium-exclusive' },
  { feature: 'Revenue-per-client tracking', versani: 'Premium-exclusive' },
  { feature: 'Correction workflow UI', versani: 'Premium-exclusive' },
  { feature: 'Personal RAG data ownership', versani: 'Yes' },
  { feature: 'Your actual inventory drives every formula', versani: 'Yes' },
  { feature: 'Voice formula narration', versani: 'Pro & Premium: hands-free Voice Texting' },
  { feature: 'Ask & Learn messages / month', versani: '250 Pro / 400 Premium + top-up packs ($1.99+)' },
  { feature: 'Multi-seat salon tier (shared DB)', versani: 'Yes' },
]

const faqs = [
  {
    q: 'What counts as a full consultation vs a refresh?',
    a: 'A full consultation fires when you\u2019re working with a new client or making a major change — photo analysis, fresh formula generation, and situational AI support all run. A refresh is a client update for an existing client (root touch-up, toner swap, gloss refresh). Formula Reformulations have their own separate monthly cap. Caps only apply to these buckets — past work stays accessible regardless.',
  },
  {
    q: 'What happens when I reach my consultation cap?',
    a: 'You can add a top-up pack at any time — 5 consultations for $5.99, 10 for $9.99, or 25 for $19.99. Top-up consultations never expire and roll over indefinitely. You can also upgrade to Premium for more volume and exclusive features. Formula Reformulations for returning clients keep working in their own bucket.',
  },
  {
    q: 'Is there an annual plan?',
    a: 'Yes \u2014 Pro at $203.89/year or Premium at $275.29/year. Both save you 2 months compared to monthly billing, plus include priority onboarding, a starter top-up credit, and early access to new features.',
  },
  {
    q: 'How does the free trial work?',
    a: 'Seven days of full Premium access with no limits. On day 7, upgrade to any paid tier to keep your momentum, or your account enters read-only mode \u2014 your data stays preserved. No credit card required to start.',
  },
  {
    q: 'Do my top-up consultations expire?',
    a: 'No. Consultations from top-up packs never expire and roll over indefinitely. Use them when you need them.',
  },
  {
    q: 'What if I hit my Ask & Learn limit?',
    a: 'You can add Top-Up 25 ($1.99), Top-Up 50 ($2.99), or Top-Up 100 ($4.99) anytime. Ask & Learn messages never expire \u2014 use them whenever you need them. If you\u2019re consistently hitting your monthly limit, upgrading a tier may be more economical. Pro includes 250/month and Premium 400/month.',
  },
  {
    q: 'Can I switch between tiers anytime?',
    a: 'Yes. Upgrades take effect immediately and you\u2019re prorated. Downgrades apply at your next billing cycle so you don\u2019t lose anything mid-month. No long-term commitments.',
  },
  {
    q: 'How does post-treatment AI scoring actually work?',
    a: 'After completing a color service, take a quick "after" photo. Versani compares it against your target formula and returns scores on tone accuracy, evenness, and hair integrity — along with a short written note on what worked and what could improve. About 30 seconds end-to-end.',
  },
  {
    q: 'When should I upgrade from Pro to Premium?',
    a: 'When you consistently hit Pro\u2019s 50-consultation cap, want business operator tools (revenue-per-client tracking, scheduling AI, monthly business review PDFs), need the correction workflow UI, or want AI client insights (individual client pattern analysis). Premium is the tier for colorists running a business, not just doing the craft. Premium also brings 70 consultations baseline and unlimited virtual try-ons.',
  },
  {
    q: 'What about high-volume specialists and correction pros?',
    a: 'If you\u2019re consistently pushing past Premium\u2019s caps \u2014 typical for color correction specialists and celebrity colorists \u2014 reach out about our Custom tier. We tailor volume, onboarding, and contract terms to fit your practice.',
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
              Five tiers designed around how professionals actually work. Top up
              anytime &mdash; consultations never expire. 7-day full-access
              trial, then billing or read-only.
            </p>
          </div>
        </section>

        {/* Toggle + tier cards (client) */}
        <section
          aria-label="Pricing tiers"
          className="container pt-8 pb-20 md:pb-24"
        >
          <PricingClient />
        </section>

        {/* Top-Up Packs — unified tabbed surface (mobile-friendly) */}
        <section
          aria-labelledby="topup-heading"
          className="container pb-24 md:pb-28 max-w-5xl"
        >
          <div className="text-center mb-8 md:mb-10">
            <div className="text-[10px] font-bold uppercase tracking-[0.25em] mb-3 text-[color:var(--gold)]">
              Need more?
            </div>
            <h2
              id="topup-heading"
              className="font-serif text-3xl md:text-4xl font-light tracking-tight"
            >
              Top up{' '}
              <em className="italic font-normal text-[color:var(--gold)]">
                anytime
              </em>
            </h2>
            <p className="text-sm text-white/55 mt-3 max-w-lg mx-auto">
              Add consultations or Ask & Learn messages instantly. Nothing
              expires.
            </p>
          </div>

          <div className="flex justify-center md:justify-start mb-2">
            <TopUpPacks />
          </div>
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
                Premium
              </em>{' '}
              means…
            </h2>
            <p className="text-sm text-white/55 mt-3 max-w-lg mx-auto">
              More volume, plus the business operator layer &mdash; AI client
              insights, revenue tracking, scheduling AI, and the correction
              workflow UI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {upgradeHighlights.map((item, i) => (
              <div
                key={i}
                className="rounded-2xl p-4 bg-white/[0.04] border border-white/[0.08]"
              >
                <div className="font-medium text-base mb-1 text-[color:var(--foreground)]">
                  {item.title}
                </div>
                <div className="text-sm text-white/60 leading-relaxed">
                  {item.body}
                </div>
              </div>
            ))}
          </div>

          <p className="text-xs text-white/40 text-center mt-10 italic">
            Not ready for Premium yet? Grab a top-up pack whenever you need extra
            capacity &mdash; consults and Ask & Learn messages never expire.
          </p>
        </section>

        {/* Still need more — Custom callout */}
        <section className="container pb-24 md:pb-28 max-w-4xl">
          <div className="rounded-2xl p-8 md:p-12 bg-gradient-to-b from-[color:var(--gold)]/[0.06] to-[color:var(--gold)]/[0.01] border border-[color:var(--gold)]/[0.18]">
            <div className="text-[10px] font-bold uppercase tracking-[0.25em] mb-3 text-[color:var(--gold)]">
              Still need more?
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-light tracking-tight mb-5">
              See the{' '}
              <em className="italic font-normal text-[color:var(--gold)]">
                Custom
              </em>{' '}
              tier
            </h2>
            <p className="text-base text-white/75 leading-relaxed mb-4">
              Color correction pros, celebrity colorists, and high-volume
              specialists sometimes push past Premium&rsquo;s caps in a strong
              month. For those cases we tailor volume, onboarding, and contract
              terms to fit your practice.
            </p>
            <p className="text-base text-white/65 leading-relaxed">
              If your book skews heavily toward new clients, major changes, or
              corrections &mdash; or if you run multiple locations &mdash;
              let&rsquo;s talk. For teams of 3+ stylists sharing a practice,
              move to Team for per-seat economics.
            </p>
          </div>
        </section>

        {/* Team calculator */}
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
              Every seat gets the full Premium-level experience. Pay per-seat —
              the rate decreases as your team grows.
            </p>

            <SalonCalculator />

            <p className="text-xs text-white/40 mt-8">
              50+ seats, multi-location groups, or beauty education brands? See
              our{' '}
              <span className="text-[color:var(--gold)]">Custom</span> tier
              above — let&rsquo;s talk. · Beauty schools: see dedicated{' '}
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

        {/* Versani at a glance */}
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
              competitors
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
                competitors
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
            trial runs 7 days of full Premium access, then billing or read-only.
            Top-up consultations never expire.
          </p>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
