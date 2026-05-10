import type { Metadata } from 'next'
import Link from 'next/link'
import { appStoresMock, recentRatings } from '@/lib/mock/appStores'
import { formatDate } from '@/lib/format'
import { cn } from '@/lib/cn'

export const metadata: Metadata = {
  title: 'App Stores · Admin · Versani',
  description:
    'Manage Apple App Store and Google Play listings, screenshots, version notes, and ratings.',
  robots: { index: false, follow: false },
}

const statusStyles: Record<
  string,
  { label: string; color: string; bg: string }
> = {
  live: { label: 'Live', color: 'text-emerald-300', bg: 'bg-emerald-500/10' },
  'in-review': {
    label: 'In review',
    color: 'text-amber-200',
    bg: 'bg-amber-500/10',
  },
  rejected: {
    label: 'Rejected',
    color: 'text-rose-300',
    bg: 'bg-rose-500/10',
  },
  'metadata-rejected': {
    label: 'Metadata rejected',
    color: 'text-rose-300',
    bg: 'bg-rose-500/10',
  },
  'pending-developer-action': {
    label: 'Action required',
    color: 'text-amber-200',
    bg: 'bg-amber-500/10',
  },
  preparing: {
    label: 'Preparing',
    color: 'text-sky-300',
    bg: 'bg-sky-500/10',
  },
}

function StatusPill({ status }: { status: string }) {
  const s = statusStyles[status] || statusStyles.preparing
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] uppercase tracking-[0.16em] font-medium',
        s.color,
        s.bg,
      )}
    >
      <span
        className={cn(
          'h-1.5 w-1.5 rounded-full',
          status === 'live' && 'bg-emerald-300',
          status === 'in-review' && 'bg-amber-200 animate-pulse',
          (status === 'rejected' || status === 'metadata-rejected') &&
            'bg-rose-300',
          status === 'pending-developer-action' && 'bg-amber-200',
          status === 'preparing' && 'bg-sky-300',
        )}
        aria-hidden="true"
      />
      {s.label}
    </span>
  )
}

export default function AdminAppStoresPage() {
  return (
    <div className="space-y-10">
      {/* Page hero */}
      <div className="flex items-start justify-between gap-6">
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-[color:var(--gold)] mb-3">
            App Store Manager
          </p>
          <h1 className="font-serif text-3xl md:text-4xl text-foreground mb-2">
            Apple App Store + Google Play
          </h1>
          <p className="text-sm text-muted-foreground max-w-xl leading-relaxed">
            Live listings, version submissions, screenshot status, ratings,
            and review issues. Submit new builds and respond to reviews
            without leaving Versani.
          </p>
        </div>
        <button
          type="button"
          className="hidden md:inline-flex h-11 px-6 rounded-full bg-[color:var(--gold)] text-black text-sm font-medium hover:bg-[color:var(--gold-light)] transition-colors"
        >
          Submit new version
        </button>
      </div>

      {/* Per-store cards */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {appStoresMock.map((listing) => {
          const screenshotCoverage = listing.screenshots.every(
            (s) => s.count >= s.required,
          )
          return (
            <article
              key={listing.storeId}
              className="rounded-2xl border border-white/[0.08] bg-white/[0.04] p-7"
            >
              {/* Store header */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-1">
                    {listing.storeName}
                  </div>
                  <h2 className="font-serif text-2xl text-foreground">
                    {listing.appName}{' '}
                    <span className="text-sm text-muted-foreground">
                      v{listing.currentVersion}
                    </span>
                  </h2>
                  <div className="text-[11px] text-muted-foreground mt-1">
                    {listing.bundleId}
                  </div>
                </div>
                <StatusPill status={listing.versionStatus} />
              </div>

              {/* KPIs row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6 pb-6 border-b border-white/[0.06]">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    Rating
                  </div>
                  <div className="font-serif text-xl text-foreground mt-1">
                    {listing.rating.toFixed(1)} ★
                  </div>
                  <div className="text-[10px] text-muted-foreground">
                    {listing.ratingCount.toLocaleString()} reviews
                  </div>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    Total installs
                  </div>
                  <div className="font-serif text-xl text-foreground mt-1">
                    {listing.installs.toLocaleString()}
                  </div>
                  <div className="text-[10px] text-muted-foreground">
                    +{listing.monthlyInstalls.toLocaleString()} this mo
                  </div>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    Crash rate
                  </div>
                  <div
                    className={cn(
                      'font-serif text-xl mt-1',
                      listing.crashRate > 0.5
                        ? 'text-rose-300'
                        : listing.crashRate > 0.2
                          ? 'text-amber-200'
                          : 'text-emerald-300',
                    )}
                  >
                    {listing.crashRate.toFixed(2)}%
                  </div>
                  <div className="text-[10px] text-muted-foreground">
                    Last 7 days
                  </div>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    Released
                  </div>
                  <div className="font-serif text-base text-foreground mt-1">
                    {listing.releaseDate
                      ? formatDate(listing.releaseDate)
                      : 'Pending'}
                  </div>
                  <div className="text-[10px] text-muted-foreground">
                    Submitted {formatDate(listing.lastSubmitted)}
                  </div>
                </div>
              </div>

              {/* Listing copy */}
              <div className="space-y-4 mb-6">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-1.5">
                    Short description
                  </div>
                  <p className="text-sm text-foreground">
                    {listing.shortDescription}
                  </p>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-1.5">
                    What&apos;s new (v{listing.currentVersion})
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {listing.whatsNew}
                  </p>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-1.5">
                    Keywords ({listing.keywords.length})
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {listing.keywords.map((k) => (
                      <span
                        key={k}
                        className="text-[11px] px-2 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.06] text-muted-foreground"
                      >
                        {k}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Screenshot coverage */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    Screenshot coverage
                  </div>
                  <span
                    className={cn(
                      'text-[10px] uppercase tracking-[0.16em]',
                      screenshotCoverage
                        ? 'text-emerald-300'
                        : 'text-amber-200',
                    )}
                  >
                    {screenshotCoverage ? 'Complete' : 'Incomplete'}
                  </span>
                </div>
                <ul className="space-y-2">
                  {listing.screenshots.map((s) => {
                    const ok = s.count >= s.required
                    return (
                      <li
                        key={s.device}
                        className="flex items-center justify-between text-sm"
                      >
                        <span className="text-foreground">{s.device}</span>
                        <span
                          className={cn(
                            'text-xs',
                            ok ? 'text-emerald-300' : 'text-amber-200',
                          )}
                        >
                          {s.count} / {s.required} {ok ? '✓' : '✗'}
                        </span>
                      </li>
                    )
                  })}
                </ul>
              </div>

              {/* Review issues */}
              {listing.reviewIssues.length > 0 && (
                <div className="rounded-xl bg-amber-500/[0.08] border border-amber-500/20 p-4">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-amber-200 mb-2">
                    Review issues ({listing.reviewIssues.length})
                  </div>
                  <ul className="space-y-2">
                    {listing.reviewIssues.map((issue) => (
                      <li
                        key={issue.id}
                        className="text-sm text-foreground flex items-start gap-2"
                      >
                        <span
                          className={cn(
                            'shrink-0 mt-1 h-1.5 w-1.5 rounded-full',
                            issue.severity === 'critical'
                              ? 'bg-rose-400'
                              : 'bg-amber-300',
                          )}
                          aria-hidden="true"
                        />
                        <span className="leading-relaxed">{issue.message}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Action buttons */}
              <div className="flex items-center gap-2 mt-6 pt-4 border-t border-white/[0.06]">
                <button
                  type="button"
                  className="text-xs uppercase tracking-[0.16em] text-[color:var(--gold)] hover:text-[color:var(--gold-light)]"
                >
                  Edit listing →
                </button>
                <span className="text-muted-foreground/40">·</span>
                <button
                  type="button"
                  className="text-xs uppercase tracking-[0.16em] text-muted-foreground hover:text-foreground"
                >
                  Upload screenshots
                </button>
                <span className="text-muted-foreground/40">·</span>
                <button
                  type="button"
                  className="text-xs uppercase tracking-[0.16em] text-muted-foreground hover:text-foreground"
                >
                  Open in {listing.storeId === 'app-store' ? 'ASC' : 'Play Console'}
                </button>
              </div>
            </article>
          )
        })}
      </section>

      {/* Recent ratings inbox */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-serif text-2xl text-foreground">
            Recent ratings
          </h2>
          <Link
            href="#"
            className="text-xs uppercase tracking-[0.18em] text-[color:var(--gold)] hover:text-[color:var(--gold-light)]"
          >
            View all →
          </Link>
        </div>
        <div className="rounded-2xl border border-white/[0.08] bg-white/[0.04]">
          <ul className="divide-y divide-white/[0.04]">
            {recentRatings.map((r) => (
              <li
                key={r.id}
                className="px-6 py-4 flex items-start justify-between gap-4"
              >
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="font-serif text-base text-foreground">
                      {'★'.repeat(r.rating)}
                      <span className="text-muted-foreground/40">
                        {'★'.repeat(5 - r.rating)}
                      </span>
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                      {r.store === 'app-store' ? 'App Store' : 'Play Store'} ·{' '}
                      {r.reviewerCountry} · {formatDate(r.date)}
                    </span>
                  </div>
                  <p className="text-sm text-foreground leading-relaxed">
                    {r.excerpt}
                  </p>
                </div>
                <button
                  type="button"
                  className={cn(
                    'shrink-0 text-[11px] uppercase tracking-[0.16em] px-3 py-1.5 rounded-full border',
                    r.responded
                      ? 'border-emerald-500/30 text-emerald-300 bg-emerald-500/5'
                      : 'border-[color:var(--gold)]/40 text-[color:var(--gold)] bg-[color:var(--gold)]/5 hover:bg-[color:var(--gold)]/10',
                  )}
                  disabled={r.responded}
                >
                  {r.responded ? 'Replied' : 'Reply'}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  )
}
