import { SiteNav } from '@/components/nav/SiteNav'
import { SiteFooter } from '@/components/nav/SiteFooter'
import { Hero } from '@/components/sections/Hero'

export default function HomePage() {
  return (
    <>
      <SiteNav />
      <main id="main" className="relative">
        <Hero />

        {/* Placeholder sections — to be built out in future phases.
           Hero is intentionally the centerpiece of v1. */}
        <section
          id="features"
          aria-label="Platform overview"
          className="container py-24 md:py-32"
        >
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.24em] text-[color:var(--gold)] mb-5">
              The platform
            </p>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight text-[color:var(--foreground)]">
              Consultation, formula lab, and on-demand advisor —
              <span className="text-[color:var(--muted-foreground)]">
                {' '}in one place.
              </span>
            </h2>
            <p className="mt-6 text-base md:text-lg text-[color:var(--muted-foreground)] leading-relaxed">
              Versani is a complete workspace for the modern colorist. Begin a
              consultation, refine a formula, or ask Versani anything about
              color theory — the tools work together because they were built
              together.
            </p>
          </div>
        </section>

        <section
          id="pricing"
          aria-label="Pricing"
          className="container py-24 md:py-32 border-t border-[color:var(--border)]/50"
        >
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.24em] text-[color:var(--gold)] mb-5">
              Membership
            </p>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight">
              Five tiers. Zero compromise.
            </h2>
            <p className="mt-6 text-base md:text-lg text-[color:var(--muted-foreground)] leading-relaxed">
              From a free trial to a fully-equipped salon — Versani scales with
              your craft. Detailed pricing page coming shortly.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
