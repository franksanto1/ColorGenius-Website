'use client'

import { useState } from 'react'
import { motion } from 'motion/react'
import Link from 'next/link'
import { cn } from '@/lib/cn'

/* ========================================================================
   Versani Pricing — client-side interactive surface
   - Billing toggle (monthly / yearly)
   - 5 tier cards
   - Salon calculator
   - FAQ accordion
   Server-rendered wrappers in app/pricing/page.tsx handle metadata + static
   sections (philosophy copy, comparison, callouts).
   ======================================================================== */

type Billing = 'monthly' | 'yearly'

interface TierFeature {
  label: string
  /** true = check, false = X (not included), string = detail line under label */
  included: boolean | string
}

interface Tier {
  id: string
  name: string
  tagline: string
  priceMonthly: number | null
  priceYearly: number | null
  priceLabel?: string
  ctaLabel: string
  ctaHref: string
  featured?: boolean
  annualAvailable?: boolean
  features: TierFeature[]
}

const tiers: Tier[] = [
  {
    id: 'trial',
    name: 'Free Trial',
    tagline: 'Experience the full app for 7 days — no card required.',
    priceMonthly: 0,
    priceYearly: 0,
    priceLabel: '7 days',
    ctaLabel: 'Start Free Trial',
    ctaHref: '/auth?mode=signup',
    features: [
      { label: 'Your actual product lines used in every formula', included: true },
      { label: '7 days full access', included: 'everything unlocked, no limits' },
      { label: 'Unlimited Ask & Learn throughout', included: true },
      { label: 'Unlimited clients', included: true },
      { label: 'After day 7', included: 'Upgrade anytime to keep your momentum, or account enters read-only' },
    ],
  },
  {
    id: 'beauty-student',
    name: 'Beauty Student',
    tagline: 'For cosmetology students learning professional color. SheerID-verified, focused on learning.',
    priceMonthly: 8.99,
    priceYearly: 89.90,
    annualAvailable: true,
    ctaLabel: 'Start Beauty Student',
    ctaHref: '/auth?mode=student',
    features: [
      { label: 'Your actual product lines used in every formula', included: true },
      { label: '20 Practice Cases (Full Consultations) per month', included: 'photo analysis + AI rendering + full chair-side flow' },
      { label: 'Unlimited Formula Reformulations', included: 'tweak existing formulas as needed — naturally bounded by your client roster' },
      { label: 'Repeat Visits — free + unlimited', included: '"use last formula" — no AI cost' },
      { label: '50 virtual try-ons per month', included: 'learn by visualizing' },
      { label: '100 Ask & Learn messages per month', included: 'ask questions, learn the craft, apply what you learn' },
      { label: '100 client profiles', included: 'practice with multiple personas' },
      { label: 'Versani Academy Library', included: 'masterclasses + technique walkthroughs' },
      { label: 'Basic 30-day performance dashboard', included: 'self-assessment tool' },
      { label: 'Top-up packs available', included: 'finals week? add more as needed' },
      { label: 'Full 90-day dashboard', included: false },
      { label: 'At-risk client alerts', included: false },
      { label: 'Industry benchmarks', included: false },
      { label: 'Voice Texting (STT)', included: false },
    ],
  },
  {
    id: 'essentials',
    name: 'Essentials',
    tagline: 'For part-time stylists, students post-graduation, and inspiration users exploring the full power of Versani.',
    priceMonthly: 9.99,
    priceYearly: 101.99,
    annualAvailable: true,
    ctaLabel: 'Start Essentials',
    ctaHref: '/auth?mode=signup',
    features: [
      { label: 'Your actual product lines used in every formula', included: true },
      { label: '25 Full Consultations per month', included: 'photo + creative research + formula generation' },
      { label: 'Unlimited Formula Reformulations', included: 'tweak existing formulas as needed — naturally bounded by your client roster' },
      { label: 'Repeat Visits — free + unlimited', included: '"use last formula" — no AI cost' },
      { label: '50 virtual try-ons per month', included: true },
      { label: '100 Ask & Learn messages per month', included: 'chair-side helper for any color question' },
      { label: '150 client profiles', included: true },
      { label: 'Basic 30-day performance dashboard', included: true },
      { label: 'Versani Academy Library', included: true },
      { label: 'Formula history & reports', included: true },
      { label: 'Export client reports as PDF', included: true },
      { label: 'Top-up packs available', included: '$1.99+, never expire' },
      { label: 'Voice Texting (STT)', included: false },
      { label: 'Full 90-day performance dashboard', included: false },
      { label: 'At-risk client alerts', included: false },
      { label: 'Industry benchmarks', included: false },
    ],
  },
  {
    id: 'pro',
    name: 'Pro',
    tagline: 'For full-time stylists. Everything Essentials promises, plus hands-free Voice Texting and the power features that earn it back.',
    priceMonthly: 19.99,
    priceYearly: 203.89,
    annualAvailable: true,
    ctaLabel: 'Choose Pro',
    ctaHref: '/auth?mode=signup',
    featured: true,
    features: [
      { label: 'Everything in Essentials, plus:', included: true },
      { label: '50 Full Consultations per month', included: 'new client or major change — full chair-side flow' },
      { label: 'Unlimited Formula Reformulations', included: 'tweak existing formulas as needed — naturally bounded by your client roster' },
      { label: 'Repeat Visits — free + unlimited', included: '"use last formula" — no AI cost' },
      { label: '150 virtual try-ons per month', included: 'real-time color previews on your client photo' },
      { label: '200 Ask & Learn messages per month', included: 'top-up packs available ($1.99+, never expire)' },
      { label: '300 client profiles', included: true },
      { label: 'Voice Texting (STT) — hands-free at the chair', included: 'speak instead of type, $0.002/FC via Groq' },
      { label: 'Full 90-day performance dashboard', included: 'pattern insights, full history' },
      { label: 'At-risk client alerts', included: true },
      { label: 'Weekly performance digest email', included: true },
      { label: 'Industry benchmarks', included: 'see how your scores stack against top-tier colorists' },
      { label: 'Formula A/B memory', included: 'save formula variations, track performance' },
      { label: 'Custom formula templates', included: 'save signatures for one-tap reuse' },
      { label: 'Unlimited formula history', included: true },
      { label: 'AI client insights', included: false },
      { label: 'CSV data export', included: false },
      { label: 'Revenue-per-client tracking', included: false },
    ],
  },
  {
    id: 'premium',
    name: 'Premium',
    tagline: 'For busy salons and heavy users. Unlimited try-ons, generous chat headroom, full data portability, and hands-free Voice Texting.',
    priceMonthly: 26.99,
    priceYearly: 275.29,
    annualAvailable: true,
    ctaLabel: 'Choose Premium',
    ctaHref: '/auth?mode=signup',
    features: [
      { label: 'Everything in Pro, plus the business operator tier:', included: true },
      { label: '75 Full Consultations per month', included: 'more headroom for busy weeks' },
      { label: 'Unlimited Formula Reformulations', included: 'tweak existing formulas as needed — naturally bounded by your client roster' },
      { label: 'Repeat Visits — free + unlimited', included: '"use last formula" — no AI cost' },
      { label: 'Unlimited virtual try-ons', included: 'fair-use threshold ~300/month' },
      { label: '300 Ask & Learn messages per month', included: 'top-up packs available ($1.99+, never expire)' },
      { label: 'Unlimited client profiles', included: 'your full book — no caps for power users' },
      { label: 'Voice Texting (STT) — hands-free at the chair', included: 'speak instead of type, $0.002/FC via Groq' },
      { label: 'AI client insights', included: 'individual client pattern analysis' },
      { label: 'CSV data export', included: 'full portability of your scoring, formulas, client patterns' },
      { label: 'Revenue-per-client tracking', included: 'know your top 10% by lifetime value' },
      { label: 'Returning-client scheduling AI', included: 'AI predicts when clients rebook, prompts outreach' },
      { label: 'Monthly business review PDF', included: 'auto-emailed monthly performance report' },
      { label: 'Correction workflow UI', included: 'structured multi-step interface for correction cases' },
      { label: 'Client-facing branded reports', included: 'professional PDFs with your logo' },
    ],
  },
  {
    id: 'team-essentials',
    name: 'Team Essentials',
    tagline: 'Team Dashboard + shared client database + user assignment + Essentials-level caps per seat. 3-seat minimum.',
    priceMonthly: 9.99,
    priceYearly: 119.88,
    annualAvailable: false,
    priceLabel: 'per seat',
    ctaLabel: 'Request Team Pricing',
    ctaHref: 'mailto:frank@versani.ai?subject=Team%20Essentials%20Versani%20pricing%20inquiry',
    features: [
      { label: 'Essentials-level features per seat', included: '25 FCs · Unlimited Reformulations · 50 try-ons · 100 Ask & Learn' },
      { label: '★ Team Dashboard', included: 'team rankings, shared inventory, per-stylist tracking' },
      { label: 'Your salon product lines used in every formula', included: true },
      { label: 'Shared salon inventory across all stylists', included: true },
      { label: 'Shared client database (150 × seats)', included: true },
      { label: 'Per-stylist usage tracking', included: true },
      { label: 'Role-based permissions', included: true },
      { label: 'Salon owner dashboard', included: 'team performance at a glance' },
      { label: 'Top-ups: dual-buyer (admin or individual stylist)', included: 'charged to whoever buys; portable' },
      { label: 'Flat per-seat pricing (no volume brackets)', included: 'same price 3-50 seats' },
      { label: '51+ seats → Custom tier', included: 'negotiated pricing for multi-location groups' },
    ],
  },
  {
    id: 'team-pro',
    name: 'Team Pro',
    tagline: 'Team Dashboard + revenue-per-stylist tracking + at-risk alerts across the team + Pro-level caps per seat. 3-seat minimum.',
    priceMonthly: 19.99,
    priceYearly: 239.88,
    annualAvailable: false,
    priceLabel: 'per seat',
    ctaLabel: 'Request Team Pricing',
    ctaHref: 'mailto:frank@versani.ai?subject=Team%20Pro%20Versani%20pricing%20inquiry',
    features: [
      { label: 'Pro-level features per seat', included: '50 FCs · Unlimited Reformulations · 150 try-ons · 200 Ask & Learn' },
      { label: '★ Team Dashboard with revenue analytics', included: 'team rankings, revenue-per-stylist, at-risk alerts' },
      { label: 'Voice Texting (STT) team-wide', included: 'hands-free chair-side for every seat' },
      { label: 'Shared salon inventory across all stylists', included: true },
      { label: 'Shared client database (300 × seats)', included: true },
      { label: 'Per-stylist usage + revenue tracking', included: true },
      { label: 'Industry benchmarks (anonymized)', included: true },
      { label: 'Weekly team performance digest', included: true },
      { label: 'Top-ups: dual-buyer (admin or individual stylist)', included: 'charged to whoever buys; portable' },
      { label: 'Flat per-seat pricing (no volume brackets)', included: 'same price 3-50 seats' },
      { label: '51+ seats → Custom tier', included: 'negotiated pricing for multi-location groups' },
    ],
  },
  {
    id: 'team-premium',
    name: 'Team Premium',
    tagline: 'Team Dashboard + multi-location reporting + CSV export team-wide + Voice Texting team-wide + unlimited try-ons + Premium-level caps per seat. 3-seat minimum.',
    priceMonthly: 26.99,
    priceYearly: 323.88,
    annualAvailable: false,
    priceLabel: 'per seat',
    ctaLabel: 'Request Team Pricing',
    ctaHref: 'mailto:frank@versani.ai?subject=Team%20Premium%20Versani%20pricing%20inquiry',
    features: [
      { label: 'Premium-level features per seat', included: '75 FCs · Unlimited Reformulations · unlimited try-ons · 300 Ask & Learn · unlimited client profiles' },
      { label: '★ Team Dashboard with full business intelligence', included: 'team rankings, revenue-per-stylist, multi-location reporting' },
      { label: 'AI client insights per stylist', included: 'individual client pattern analysis' },
      { label: 'Revenue-per-client tracking (team-wide)', included: 'know your top 10% by LTV' },
      { label: 'Returning-client scheduling AI', included: 'rebook predictions across the team' },
      { label: 'Monthly business review PDF', included: 'auto-emailed salon performance report' },
      { label: 'Correction workflow UI', included: 'structured multi-step for corrections' },
      { label: 'Client-facing branded reports', included: 'PDFs with your salon logo' },
      { label: 'CSV export for all data', included: 'full portability' },
      { label: 'Voice Texting (STT) team-wide', included: 'hands-free chair-side for every seat' },
      { label: 'Industry benchmarks (anonymized)', included: 'your salon vs top-tier nationally' },
      { label: 'Flat per-seat pricing (no volume brackets)', included: 'same price 3-50 seats' },
      { label: '51+ seats → Custom tier', included: 'negotiated pricing for multi-location groups' },
    ],
  },
  {
    id: 'custom',
    name: 'Custom',
    tagline: 'For 50+ seats, multi-location salon groups, beauty schools, and color education brands.',
    priceMonthly: null,
    priceYearly: null,
    priceLabel: 'By conversation',
    ctaLabel: "Let's talk",
    ctaHref: 'mailto:frank@versani.ai?subject=Custom%20%2F%20Multi-location%20Versani%20pricing%20inquiry',
    features: [
      { label: 'Custom volume economics', included: 'per-seat rate continues to decrease above 50 seats' },
      { label: 'Dedicated onboarding', included: 'we migrate your team and train every stylist' },
      { label: 'Direct access to the founder', included: 'account management from Frank himself' },
      { label: 'Shared database across all locations', included: true },
      { label: 'Multi-location team dashboards', included: true },
      { label: 'Custom contract terms', included: true },
      { label: 'Priority support', included: true },
    ],
  },
]

/* ── Team per-seat pricing tiers (was Salon Plan A/B; renamed Team Essentials/Pro/Premium 2026-05-07) ── */
const salonBreakpoints = {
  teamEssentials: [
    { min: 3, max: 50, perSeat: 9.99 },
  ],
  teamPro: [
    { min: 3, max: 50, perSeat: 19.99 },
  ],
  teamPremium: [
    { min: 3, max: 50, perSeat: 26.99 },
  ],
} as const

function getSalonPerSeatRate(
  seats: number,
  option: 'teamEssentials' | 'teamPro' | 'teamPremium',
): number {
  const brackets = salonBreakpoints[option]
  const bracket =
    brackets.find((b) => seats >= b.min && seats <= b.max) ??
    brackets[brackets.length - 1]
  return bracket.perSeat
}

const salonExamples = [3, 5, 10, 25]
/* ================================================================
   Root client component
   ================================================================ */

export const overagePacks = [
  { size: 5, price: 5.99, label: 'Top-Up 5', description: '5 extra consultations', tag: null as null | 'popular' | 'best' },
  { size: 10, price: 9.99, label: 'Top-Up 10', description: '10 extra consultations', tag: 'popular' as const },
  { size: 25, price: 19.99, label: 'Top-Up 25', description: '25 extra consultations', tag: 'best' as const },
]

export const askVersaniPacks = [
  {
    id: 'ask-25',
    size: 25,
    price: 1.99,
    label: 'Top-Up 25 Ask & Learn',
    description: '25 extra Ask & Learn messages. Never expires.',
    badge: null as string | null,
  },
  {
    id: 'ask-50',
    size: 50,
    price: 2.99,
    label: 'Top-Up 50 Ask & Learn',
    description: '50 extra Ask & Learn messages. Never expires.',
    badge: 'POPULAR',
  },
  {
    id: 'ask-100',
    size: 100,
    price: 4.99,
    label: 'Top-Up 100 Ask & Learn',
    description: '100 extra Ask & Learn messages. Never expires.',
    badge: 'BEST VALUE',
  },
]

export function PricingClient() {
  const [billing, setBilling] = useState<Billing>('monthly')

  const formatPrice = (tier: Tier) => {
    if (tier.priceMonthly === 0) return 'Free'
    if (tier.priceMonthly === null) return tier.priceLabel ?? 'Custom'
    const useYearly =
      billing === 'yearly' &&
      tier.annualAvailable !== false &&
      tier.priceYearly !== null
    const price = useYearly ? tier.priceYearly! / 12 : tier.priceMonthly
    return `$${price.toFixed(2)}`
  }

  const formatCadence = (tier: Tier) => {
    if (tier.priceMonthly === 0) return tier.priceLabel
    if (tier.priceMonthly === null) return ''
    const useYearly =
      billing === 'yearly' &&
      tier.annualAvailable !== false &&
      tier.priceYearly !== null
    return useYearly ? '/month, billed yearly' : '/month'
  }

  return (
    <>
      {/* Billing toggle */}
      <div className="flex justify-center mb-14">
        <div className="inline-flex items-center gap-1 p-1 rounded-full bg-white/[0.04] border border-white/[0.08]">
          <button
            type="button"
            onClick={() => setBilling('monthly')}
            className={cn(
              'px-5 py-2 rounded-full text-sm font-semibold tracking-wide transition-colors',
              billing === 'monthly'
                ? 'bg-[color:var(--gold)] text-black'
                : 'text-white/60 hover:text-white/90',
            )}
          >
            Monthly
          </button>
          <button
            type="button"
            onClick={() => setBilling('yearly')}
            className={cn(
              'px-5 py-2 rounded-full text-sm font-semibold tracking-wide transition-colors flex items-center gap-2',
              billing === 'yearly'
                ? 'bg-[color:var(--gold)] text-black'
                : 'text-white/60 hover:text-white/90',
            )}
          >
            Yearly
            <span
              className={cn(
                'text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-full',
                billing === 'yearly'
                  ? 'bg-black/15 text-black'
                  : 'bg-[color:var(--gold)]/15 text-[color:var(--gold)]',
              )}
            >
              Save nearly 2 months
            </span>
          </button>
        </div>
      </div>

      {/* Tier cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        {tiers.map((tier, i) => (
          <motion.div
            key={tier.id}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{
              duration: 0.6,
              delay: 0.05 + i * 0.06,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className={cn(
              'relative rounded-2xl p-7 flex flex-col',
              tier.featured
                ? 'bg-gradient-to-b from-[color:var(--gold)]/[0.08] to-[color:var(--gold)]/[0.01] border-2 border-[color:var(--gold)]'
                : 'bg-white/[0.04] border border-white/[0.08]',
            )}
            style={
              tier.featured
                ? {
                    boxShadow:
                      '0 8px 32px rgba(0,0,0,0.6), 0 0 40px oklch(0.76 0.15 85 / 0.08), inset 0 1px 0 rgba(255,255,255,0.06)',
                  }
                : {
                    boxShadow:
                      '0 4px 20px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.04)',
                  }
            }
          >
            {tier.featured && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.18em] whitespace-nowrap bg-[color:var(--gold)] text-black">
                Most Popular
              </div>
            )}

            <div className="mb-1">
              <h3 className="font-serif text-2xl tracking-tight text-[color:var(--foreground)]">
                {tier.name}
              </h3>
            </div>
            <p className="text-sm text-white/55 leading-relaxed mb-6">
              {tier.tagline}
            </p>

            {/* Price */}
            <div className="mb-6">
              <div className="flex items-baseline gap-1.5">
                <span className="font-serif text-4xl tracking-tight text-[color:var(--foreground)]">
                  {formatPrice(tier)}
                </span>
                {tier.priceMonthly !== null && tier.priceMonthly > 0 && (
                  <span className="text-sm text-white/50 font-medium">
                    {formatCadence(tier)}
                  </span>
                )}
                {tier.priceMonthly === 0 && (
                  <span className="text-sm text-white/50 font-medium ml-1">
                    {tier.priceLabel}
                  </span>
                )}
              </div>
              {billing === 'yearly' &&
                tier.annualAvailable !== false &&
                tier.priceYearly &&
                tier.priceMonthly && (
                  <p className="text-xs text-white/40 mt-1 font-medium">
                    ${tier.priceYearly}/year — $
                    {(tier.priceMonthly * 12 - tier.priceYearly).toFixed(0)}{' '}
                    savings
                  </p>
                )}
              {billing === 'yearly' && tier.annualAvailable === false && (
                <p className="text-xs mt-1 font-medium text-[color:var(--gold)]">
                  Monthly only · annual billing starts at Pro
                </p>
              )}
            </div>

            <Link
              href={tier.ctaHref}
              className={cn(
                'inline-flex items-center justify-center gap-2 h-12 px-6 rounded-full text-sm font-medium tracking-wide transition-all duration-300 ease-luxury w-full mb-6',
                tier.featured
                  ? 'bg-[color:var(--gold)] text-black border border-[color:var(--gold-light)] hover:bg-[color:var(--gold-light)]'
                  : 'bg-transparent text-[color:var(--gold)] border border-[color:var(--gold)] hover:bg-[color:var(--gold)] hover:text-black',
              )}
            >
              {tier.ctaLabel}
            </Link>

            <ul className="space-y-3 text-sm">
              {tier.features.map((feature, j) => (
                <li key={j} className="flex items-start gap-2.5">
                  {feature.included === false ? (
                    <XIcon />
                  ) : (
                    <CheckIcon />
                  )}
                  <span
                    className={cn(
                      feature.included === false
                        ? 'text-white/30 line-through decoration-white/30'
                        : 'text-white/80',
                    )}
                  >
                    {feature.label}
                    {typeof feature.included === 'string' && (
                      <span className="block text-xs text-white/45 mt-0.5 font-normal no-underline">
                        {feature.included}
                      </span>
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </>
  )
}

/* ================================================================
   Overage Packs — always-visible top-up cards
   ================================================================ */

/**
 * Compact tile used inside the TopUpPacks grid.
 * Designed for 2-column mobile / 3-column desktop layouts — no vertical wasted space.
 */
function TopUpTile({
  label,
  price,
  description,
  badge,
  unit,
}: {
  label: string
  price: number
  description: string
  badge?: string | null
  unit: string
}) {
  return (
    <Link
      href="/auth?mode=signup"
      className={cn(
        'group relative rounded-2xl p-4 md:p-5 flex flex-col justify-between min-h-[150px]',
        'transition-all duration-300 ease-luxury',
        'hover:border-[color:var(--gold)]/[0.55]',
        badge
          ? 'bg-gradient-to-b from-[color:var(--gold)]/[0.08] to-[color:var(--gold)]/[0.01] border border-[color:var(--gold)]/[0.35]'
          : 'bg-white/[0.04] border border-white/[0.08]',
      )}
    >
      {badge && (
        <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-[0.18em] whitespace-nowrap bg-[color:var(--gold)] text-black">
          {badge}
        </div>
      )}
      <div>
        <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[color:var(--gold)] mb-1.5">
          {label}
        </div>
        <div className="flex items-baseline gap-1 mb-1">
          <span className="font-serif text-2xl md:text-3xl tracking-tight text-[color:var(--foreground)]">
            ${price.toFixed(2)}
          </span>
        </div>
        <p className="text-xs text-white/55 leading-snug">{description}</p>
      </div>
      <div className="mt-3 text-[11px] font-medium text-[color:var(--gold)] group-hover:text-[color:var(--foreground)] transition-colors">
        Add {unit} →
      </div>
    </Link>
  )
}

/**
 * Legacy OveragePacks — kept for backwards compatibility if referenced elsewhere.
 * New default is <TopUpPacks /> (segmented tabs + compact tile grid).
 */
export function OveragePacks() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
      {overagePacks.map((pack) => (
        <TopUpTile
          key={pack.size}
          label={pack.label}
          price={pack.price}
          description={pack.description}
          badge={
            pack.tag === 'popular' ? 'Popular' : pack.tag === 'best' ? 'Best Value' : null
          }
          unit="consults"
        />
      ))}
    </div>
  )
}

/**
 * TopUpPacks — unified mobile-first top-up surface.
 *
 * Shows BOTH Consultation packs AND Ask & Learn packs in two clearly
 * labeled sections. No tabs — users see everything at once.
 * Each section uses a compact 2-col (mobile) / 3-col (desktop) tile grid.
 */
export function TopUpPacks() {
  const consultPacks = overagePacks.map((p) => ({
    id: `c-${p.size}`,
    label: p.label,
    price: p.price,
    description: `${p.size} extra consultations. Never expires.`,
    badge:
      p.tag === 'popular' ? 'Popular' : p.tag === 'best' ? 'Best Value' : null,
  }))

  const askPacks = askVersaniPacks.map((p) => ({
    id: p.id,
    label: p.label,
    price: p.price,
    description: p.description,
    badge:
      p.badge === 'POPULAR'
        ? 'Popular'
        : p.badge === 'BEST VALUE'
          ? 'Best Value'
          : null,
  }))

  return (
    <div className="space-y-10 md:space-y-12">
      {/* Consultation packs */}
      <div>
        <div className="flex items-baseline justify-between mb-4 md:mb-5">
          <div>
            <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-[color:var(--gold)] mb-1">
              Consultations
            </div>
            <h3 className="font-serif text-xl md:text-2xl tracking-tight text-[color:var(--foreground)]">
              Extra consultations
            </h3>
          </div>
          <span className="hidden md:inline text-xs text-white/45">
            Never expires
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {consultPacks.map((pack) => (
            <TopUpTile
              key={pack.id}
              label={pack.label}
              price={pack.price}
              description={pack.description}
              badge={pack.badge}
              unit="consults"
            />
          ))}
        </div>
      </div>

      {/* Ask & Learn packs */}
      <div>
        <div className="flex items-baseline justify-between mb-4 md:mb-5">
          <div>
            <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-[color:var(--gold)] mb-1">
              Ask & Learn
            </div>
            <h3 className="font-serif text-xl md:text-2xl tracking-tight text-[color:var(--foreground)]">
              Extra Ask & Learn messages
            </h3>
          </div>
          <span className="hidden md:inline text-xs text-white/45">
            Never expires
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {askPacks.map((pack) => (
            <TopUpTile
              key={pack.id}
              label={pack.label}
              price={pack.price}
              description={pack.description}
              badge={pack.badge}
              unit="messages"
            />
          ))}
        </div>
      </div>

      <p className="text-xs text-white/45 text-center md:text-left">
        Packs work across all paid tiers. Nothing expires.
      </p>
    </div>
  )
}

/* ================================================================
   Ask & Learn Packs — always-visible Ask & Learn top-up cards
   ================================================================ */

export function AskAndLearnPacks() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {askVersaniPacks.map((pack) => (
        <div
          key={pack.id}
          className={cn(
            'relative rounded-2xl p-6 flex flex-col',
            pack.badge
              ? 'bg-gradient-to-b from-[color:var(--gold)]/[0.08] to-[color:var(--gold)]/[0.01] border border-[color:var(--gold)]/[0.35]'
              : 'bg-white/[0.04] border border-white/[0.08]',
          )}
        >
          {pack.badge && (
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.18em] whitespace-nowrap bg-[color:var(--gold)] text-black">
              {pack.badge}
            </div>
          )}
          <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[color:var(--gold)] mb-2">
            {pack.label}
          </div>
          <div className="flex items-baseline gap-1.5 mb-2">
            <span className="font-serif text-3xl tracking-tight text-[color:var(--foreground)]">
              ${pack.price.toFixed(2)}
            </span>
          </div>
          <p className="text-sm text-white/60 leading-relaxed mb-4">
            {pack.description}
          </p>
          <Link
            href="/auth?mode=signup"
            className={cn(
              'inline-flex items-center justify-center gap-2 h-11 px-6 rounded-full text-sm font-medium tracking-wide transition-all duration-300 ease-luxury w-full mt-auto',
              'bg-transparent text-[color:var(--gold)] border border-[color:var(--gold)] hover:bg-[color:var(--gold)] hover:text-black',
            )}
          >
            Add to plan
          </Link>
        </div>
      ))}
    </div>
  )
}

/* ================================================================
   Salon Calculator — standalone client component
   ================================================================ */

type TeamPlanKey = 'teamEssentials' | 'teamPro' | 'teamPremium'

export function SalonCalculator() {
  const [option, setOption] = useState<TeamPlanKey>('teamPro')
  const [seats, setSeats] = useState<number>(10)

  const clampSeats = (n: number) => Math.max(3, Math.min(50, Math.round(n)))
  const perSeat = getSalonPerSeatRate(seats, option)
  const total = seats * perSeat
  const brackets = salonBreakpoints[option]

  const planMeta: Record<TeamPlanKey, { label: string; description: string; tab: string }> = {
    teamEssentials: {
      tab: 'Team Essentials',
      label: 'Team Essentials · Essentials-level features per seat',
      description: '25 FCs/seat · Unlimited Reformulations · 50 try-ons · 100 Ask & Learn + Team Dashboard. For salons starting out.',
    },
    teamPro: {
      tab: 'Team Pro',
      label: 'Team Pro · Pro-level features per seat',
      description: '50 FCs/seat · Unlimited Reformulations · 150 try-ons · 200 Ask & Learn · Voice Texting team-wide + Team Dashboard. For full-time stylists.',
    },
    teamPremium: {
      tab: 'Team Premium',
      label: 'Team Premium · Premium-level features per seat',
      description: '75 FCs/seat · unlimited try-ons · unlimited client profiles per seat · CSV export team-wide + AI client insights + Team Dashboard. For production salons.',
    },
  }
  const optionLabel = planMeta[option].label
  const optionDescription = planMeta[option].description

  return (
    <div className="text-left">
      {/* Option toggle */}
      <div className="flex justify-center mb-6">
        <div className="inline-flex items-center gap-1 p-1 rounded-full bg-white/[0.04] border border-white/[0.08] flex-wrap">
          {(['teamEssentials', 'teamPro', 'teamPremium'] as TeamPlanKey[]).map((key) => (
            <button
              key={key}
              type="button"
              onClick={() => setOption(key)}
              className={cn(
                'px-4 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-colors',
                option === key
                  ? 'bg-[color:var(--gold)] text-black'
                  : 'text-white/60 hover:text-white/90',
              )}
            >
              {planMeta[key].tab}
            </button>
          ))}
        </div>
      </div>

      <div className="text-center mb-6">
        <div className="text-[11px] font-bold uppercase tracking-[0.25em] mb-2 text-[color:var(--gold)]">
          {optionLabel}
        </div>
        <p className="text-xs text-white/55 max-w-sm mx-auto">
          {optionDescription}
        </p>
      </div>

      {/* Calculator */}
      <div
        className="rounded-2xl p-6 md:p-8 mb-6 bg-gradient-to-b from-[color:var(--gold)]/[0.06] to-[color:var(--gold)]/[0.01] border border-[color:var(--gold)]/[0.18]"
      >
        <div className="text-center">
          <div className="text-xs text-white/60 font-medium mb-3">
            How many seats does your salon need?
          </div>

          <div className="flex items-center justify-center gap-3 mb-4">
            <button
              type="button"
              onClick={() => setSeats(clampSeats(seats - 1))}
              className="w-10 h-10 rounded-full bg-white/[0.06] hover:bg-white/[0.1] text-white/80 text-xl font-bold transition-colors"
              aria-label="Decrease seats"
            >
              −
            </button>
            <input
              type="number"
              min={1}
              max={50}
              value={seats}
              onChange={(e) =>
                setSeats(clampSeats(Number(e.target.value) || 1))
              }
              className="w-20 text-center font-serif text-3xl bg-transparent border-b border-white/[0.15] focus:border-[color:var(--gold)] focus:outline-none text-[color:var(--foreground)]"
            />
            <button
              type="button"
              onClick={() => setSeats(clampSeats(seats + 1))}
              className="w-10 h-10 rounded-full bg-white/[0.06] hover:bg-white/[0.1] text-white/80 text-xl font-bold transition-colors"
              aria-label="Increase seats"
            >
              +
            </button>
          </div>

          <div className="font-serif text-4xl md:text-5xl tracking-tight mb-1 text-[color:var(--foreground)]">
            ${total.toFixed(2)}
          </div>
          <div className="text-sm text-white/60 mb-1">/month</div>
          <div className="text-xs text-white/50">
            ${perSeat.toFixed(2)} per seat
          </div>
        </div>
      </div>

      {/* Rate breakpoints */}
      <div className="mb-6">
        <div className="text-[10px] font-bold uppercase tracking-[0.18em] mb-2 text-white/60 text-center">
          Your per-seat rate
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-center">
          {brackets.map((b, i) => {
            const isCurrent = seats >= b.min && seats <= b.max
            const rangeLabel =
              b.max === 50 ? `${b.min}+ seats` : `${b.min}–${b.max} seats`
            return (
              <div
                key={i}
                className={cn(
                  'rounded-lg p-3 transition-all border',
                  isCurrent
                    ? 'bg-[color:var(--gold)]/[0.12] border-[color:var(--gold)]'
                    : 'bg-white/[0.03] border-white/[0.06]',
                )}
              >
                <div className="text-[10px] text-white/60 uppercase tracking-wider mb-1">
                  {rangeLabel}
                </div>
                <div
                  className={cn(
                    'font-serif text-base',
                    isCurrent
                      ? 'text-[color:var(--gold)]'
                      : 'text-[color:var(--foreground)]',
                  )}
                >
                  ${b.perSeat.toFixed(2)}/seat
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Quick sizes */}
      <div>
        <div className="text-[10px] font-bold uppercase tracking-[0.18em] mb-3 text-white/60 text-center">
          Pricing at common salon sizes
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
          {salonExamples.map((n) => {
            const rate = getSalonPerSeatRate(n, option)
            const monthlyTotal = n * rate
            return (
              <button
                type="button"
                key={n}
                onClick={() => setSeats(n)}
                className="rounded-lg p-3 hover:bg-white/[0.04] transition-colors bg-white/[0.02] border border-white/[0.06]"
              >
                <div className="text-[10px] text-white/50 uppercase tracking-wider mb-1">
                  {n} seats
                </div>
                <div className="font-serif text-xl text-[color:var(--foreground)]">
                  ${monthlyTotal.toFixed(0)}
                </div>
                <div className="text-[10px] text-white/40">/month</div>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}

/* ================================================================
   FAQ accordion — client component
   ================================================================ */

interface FAQItemProps {
  question: string
  answer: string
}

export function FAQItem({ question, answer }: FAQItemProps) {
  const [open, setOpen] = useState(false)
  return (
    <div className="rounded-xl overflow-hidden bg-white/[0.03] border border-white/[0.06]">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
      >
        <span className="text-sm font-semibold text-white/90">{question}</span>
        <span
          className="shrink-0 text-xl leading-none transition-transform duration-200 text-[color:var(--gold)]"
          style={{ transform: open ? 'rotate(45deg)' : 'rotate(0)' }}
          aria-hidden="true"
        >
          +
        </span>
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
        className="overflow-hidden"
      >
        <p className="px-5 pb-4 text-sm text-white/65 leading-relaxed">
          {answer}
        </p>
      </motion.div>
    </div>
  )
}

/* ── Icons ── */

function CheckIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mt-0.5 shrink-0 text-[color:var(--gold)]"
      aria-hidden="true"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

function XIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mt-0.5 shrink-0 text-white/20"
      aria-hidden="true"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  )
}

function DotIcon() {
  return (
    <div
      className="w-4 h-4 mt-0.5 shrink-0 rounded-full flex items-center justify-center bg-[color:var(--gold)]/15"
      aria-hidden="true"
    >
      <div className="w-1.5 h-1.5 rounded-full bg-[color:var(--gold)]" />
    </div>
  )
}

// Legacy alias for backwards compatibility (any file still importing the old name)
export const AskVersaniPacks = AskAndLearnPacks
