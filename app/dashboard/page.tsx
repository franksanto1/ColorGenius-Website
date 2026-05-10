import type { Metadata } from 'next'
import Link from 'next/link'
import { SectionHero } from '@/components/team/SectionHero'
import { MetricCard } from '@/components/team/MetricCard'
import { DataCard } from '@/components/team/DataCard'
import { MiniSparkline } from '@/components/team/MiniSparkline'
import { LinkButton } from '@/components/ui/Button'
import { stylistMock } from '@/lib/mock/stylist'
import { formatPercent, formatDate, formatCurrency } from '@/lib/format'

export const metadata: Metadata = {
  title: 'My Dashboard · Versani',
  description: 'Personal performance, usage, and client overview.',
  robots: { index: false, follow: false },
}

/**
 * Industry (individual stylist) dashboard.
 *
 * Audience: Pro / Premium individual subscribers (not salon owners).
 * Mirrors the same component library as /salon and /school for visual
 * consistency. Uses mock data in preview mode (no Supabase env) and
 * real data when authenticated.
 */
export default function StylistDashboardPage() {
  const { profile, usageMeters, performance, recentClients, recentActivity } =
    stylistMock

  const usagePercent = (used: number, cap: number | null) =>
    cap === null ? 0 : Math.min(100, Math.round((used / cap) * 100))

  const usageColor = (pct: number) => {
    if (pct >= 90) return 'text-rose-300'
    if (pct >= 75) return 'text-amber-200'
    return 'text-emerald-300'
  }

  return (
    <div className="space-y-10">
      <SectionHero
        eyebrow={`${profile.tier} member`}
        title={`Welcome back, ${profile.name.split(' ')[0]}`}
        subtitle={`${profile.specialty} · ${profile.city} · Joined ${formatDate(profile.joinedAt)}`}
        right={
          <div className="flex items-center gap-2">
            <LinkButton href="/dashboard/clients" variant="gold-outline" size="sm">
              View clients
            </LinkButton>
            <LinkButton href="/dashboard/performance" variant="gold-solid" size="sm">
              See performance
            </LinkButton>
          </div>
        }
      />

      {/* Performance + retention top row */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard
          label="Performance score"
          value={performance.score.toFixed(1)}
          sub="30-day rolling average"
          trend="up"
          trendLabel="+0.3"
        >
          <MiniSparkline data={performance.scoreTrend} width={160} height={24} />
        </MetricCard>
        <MetricCard
          label="Consultations completed"
          value={performance.consultationsCompleted.toLocaleString()}
          sub="Lifetime through Versani"
        />
        <MetricCard
          label="Client retention"
          value={formatPercent(performance.retentionRate)}
          sub="Returning clients, last 90 days"
          trend="up"
          trendLabel="+4pts"
        />
        <MetricCard
          label="Top formula"
          value={`${performance.topFormulaUsage}×`}
          sub={performance.topFormula}
        />
      </section>

      {/* Usage meters — the canonical 4 (Full Consults / Reformulations / A&L / Repeat Visits) */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-serif text-2xl text-foreground">
            This month’s usage
          </h2>
          <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
            Resets {formatDate(usageMeters[0].resets)}
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {usageMeters.map((meter) => {
            const pct = usagePercent(meter.used, meter.cap)
            const isUnlimited = meter.cap === null
            return (
              <div
                key={meter.label}
                className="rounded-2xl border border-white/[0.08] bg-white/[0.04] p-6"
              >
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">
                  {meter.label}
                </div>
                <div className="flex items-baseline justify-between mb-3">
                  <div className="font-serif text-3xl text-foreground">
                    {meter.used.toLocaleString()}
                  </div>
                  {isUnlimited ? (
                    <span className="text-xs uppercase tracking-[0.16em] text-emerald-300">
                      Unlimited
                    </span>
                  ) : (
                    <span className={`text-xs font-medium ${usageColor(pct)}`}>
                      {pct}%
                    </span>
                  )}
                </div>
                {!isUnlimited && (
                  <>
                    <div className="h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
                      <div
                        className="h-full bg-[color:var(--gold)]"
                        style={{ width: `${pct}%` }}
                        aria-hidden="true"
                      />
                    </div>
                    <div className="text-xs text-muted-foreground mt-2">
                      {meter.used} of {meter.cap} {meter.unit}
                    </div>
                  </>
                )}
                {isUnlimited && (
                  <div className="text-xs text-muted-foreground">
                    {meter.used} {meter.unit} this month · free, no cap
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </section>

      {/* Recent clients + Billing summary */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-serif text-2xl text-foreground">
              Recent clients
            </h2>
            <Link
              href="/dashboard/clients"
              className="text-xs uppercase tracking-[0.2em] text-gold hover:text-gold-light"
            >
              See all
            </Link>
          </div>
          <div className="rounded-2xl border border-white/[0.08] bg-white/[0.04]">
            <ul className="divide-y divide-white/[0.04]">
              {recentClients.map((c) => (
                <li
                  key={c.id}
                  className="px-6 py-4 flex items-start justify-between gap-4"
                >
                  <div className="min-w-0">
                    <div className="text-sm font-medium text-foreground">
                      {c.name}
                    </div>
                    <div className="text-xs text-muted-foreground mt-0.5">
                      Last: {formatDate(c.lastVisit)} · {c.formula}
                    </div>
                    {c.nextSuggested && (
                      <div className="text-[11px] text-[color:var(--gold)] mt-1">
                        Next suggested: {formatDate(c.nextSuggested)}
                      </div>
                    )}
                  </div>
                  <div className="shrink-0 text-right">
                    <div className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                      Score
                    </div>
                    <div className="font-serif text-xl text-foreground">
                      {c.satisfaction.toFixed(1)}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <DataCard title="Subscription">
          <div className="text-xs uppercase tracking-[0.16em] text-muted-foreground mb-2">
            {profile.tier} tier
          </div>
          <div className="font-serif text-2xl text-foreground">
            {formatCurrency(profile.monthlyPrice)}
            <span className="text-sm text-muted-foreground">/mo</span>
          </div>
          <p className="text-xs text-muted-foreground mt-3">
            Next renewal {formatDate(profile.nextRenewal)} on your saved card.
          </p>
          <div className="mt-4 flex flex-col gap-2">
            <Link
              href="/dashboard/billing"
              className="text-xs uppercase tracking-[0.18em] text-gold hover:text-gold-light"
            >
              Manage billing
            </Link>
            <Link
              href="/pricing"
              className="text-xs uppercase tracking-[0.18em] text-muted-foreground hover:text-foreground"
            >
              See all plans
            </Link>
          </div>
        </DataCard>
      </section>

      {/* Recent activity feed */}
      <section>
        <h2 className="font-serif text-2xl text-foreground mb-4">
          Recent activity
        </h2>
        <div className="rounded-2xl border border-white/[0.08] bg-white/[0.04]">
          <ul className="divide-y divide-white/[0.04]">
            {recentActivity.map((a) => (
              <li
                key={a.id}
                className="px-6 py-4 flex items-start justify-between gap-4"
              >
                <div className="min-w-0">
                  <div className="text-sm text-foreground">{a.summary}</div>
                  <div className="text-[11px] text-muted-foreground mt-1">
                    {formatDate(a.timestamp)}
                  </div>
                </div>
                <span className="text-[10px] uppercase tracking-[0.18em] text-gold/80 shrink-0">
                  {a.type === 'ask-learn' ? 'Ask & Learn' : a.type}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  )
}
