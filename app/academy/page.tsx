import type { Metadata } from 'next'
import Link from 'next/link'
import { SiteNav } from '@/components/nav/SiteNav'
import { SiteFooter } from '@/components/nav/SiteFooter'
import { LinkButton } from '@/components/ui/Button'
import { Reveal } from '@/components/ui/Reveal'

export const metadata: Metadata = {
  title: 'Academy — Masters teaching masters',
  description:
    'The Versani Academy — a growing library of articles, video tutorials, and live masterclasses from master colorists. Open to everyone, free during beta.',
  alternates: { canonical: '/academy' },
  openGraph: {
    title: 'The Versani Academy',
    description:
      'Real professional content from master colorists. Articles, tutorials, and live masterclasses. Free during beta.',
    url: '/academy',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Versani Academy',
    description:
      'Masters teaching masters. A growing library for the modern colorist.',
  },
}

const masters = [
  {
    name: 'Jane Colorist',
    category: 'Balayage Master',
    bio: 'Two decades behind the chair. Known for sun-kissed surface work and editorial-grade placement.',
  },
  {
    name: 'Amara Lewis',
    category: 'Color Correction Specialist',
    bio: 'Correction and repair. She takes the work no one else will touch and returns it intact.',
  },
  {
    name: 'Dante Okafor',
    category: 'Editorial Colorist',
    bio: 'Runway and print. Builds vivid, high-conviction looks with a scientist\u2019s grasp of tone.',
  },
]

const categories = [
  {
    title: 'Color Theory',
    body: 'The science behind every formula. Undertone, neutralization, and the logic of the wheel — applied at the chair.',
  },
  {
    title: 'Technique',
    body: 'Mastering application, placement, and finish. The motions that separate adequate from exceptional.',
  },
  {
    title: 'Brand Craft',
    body: 'Deep dives into specific manufacturer lines. What each brand does best and where its limits are.',
  },
  {
    title: 'Corrective',
    body: 'Diagnosing and fixing complex cases. Reading what went wrong and building the safe path forward.',
  },
  {
    title: 'Gray Coverage',
    body: 'Strategies for mature clientele. Coverage without flatness, dimension without compromise.',
  },
  {
    title: 'Vivids',
    body: 'Editorial and creative color. Longevity, brightness, and the full range of direct-dye work.',
  },
  {
    title: 'Science',
    body: 'Chemistry, porosity, and the art of control. Why formulas behave differently on different heads.',
  },
]

const articles = [
  {
    category: 'Gray Coverage',
    title: 'Reading Undertones in Natural Gray',
    excerpt:
      'Natural gray is never a single color. Learn how to read the warm, cool, and neutral populations woven through a mature canopy.',
  },
  {
    category: 'Science',
    title: 'Developer Volume: When to Break the Rules',
    excerpt:
      'The textbook answer is rarely the right one. A practical guide to choosing the volume that respects both lift and integrity.',
  },
  {
    category: 'Brand Craft',
    title: 'Inventory as a Superpower',
    excerpt:
      'Your product library is the most underrated tool on your station. Here is how top colorists treat inventory as craft.',
  },
  {
    category: 'Corrective',
    title: 'Color Correction: The First 10 Minutes Matter Most',
    excerpt:
      'Most corrective outcomes are decided before a bowl is mixed. What to look for, ask for, and rule out — fast.',
  },
  {
    category: 'Technique',
    title: 'Balayage on Porous Hair: A Five-Step Protocol',
    excerpt:
      'Porosity turns free-hand work into a chemistry problem. A repeatable protocol for soft, even lift on fragile canvases.',
  },
  {
    category: 'Gray Coverage',
    title: 'Gray Coverage Without Flatness',
    excerpt:
      'Dimension is what keeps coverage from reading like a helmet. A framework for building depth back in.',
  },
]

export default function AcademyPage() {
  return (
    <>
      <SiteNav />
      <main id="main" className="relative">
        {/* Hero */}
        <section
          aria-labelledby="academy-hero-heading"
          className="relative isolate overflow-hidden pt-32 md:pt-40 pb-8 md:pb-12"
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 gold-radial pointer-events-none"
          />
          <div className="relative container text-center">
            <p className="text-xs uppercase tracking-[0.24em] text-[color:var(--gold)] mb-5">
              The Library
            </p>
            <h1
              id="academy-hero-heading"
              className="font-serif font-light text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.05] tracking-tight text-[color:var(--foreground)]"
            >
              The{' '}
              <em className="italic font-normal text-[color:var(--gold)]">
                Academy
              </em>
            </h1>
            <p className="mt-6 text-base md:text-lg text-[color:var(--muted-foreground)] tracking-wide">
              Masters teaching masters.
            </p>
            <p className="mt-7 max-w-2xl mx-auto text-base md:text-lg text-[color:var(--muted-foreground)] leading-relaxed">
              Real professional content from master colorists. Written articles,
              video tutorials, and live masterclasses. Open to everyone, and
              free during beta.
            </p>
          </div>
        </section>

        {/* Featured Masters */}
        <section
          aria-labelledby="masters-heading"
          className="container pt-16 md:pt-24 pb-24 md:pb-28 max-w-5xl"
        >
          <Reveal>
            <div className="text-center mb-12">
              <div className="text-[10px] font-bold uppercase tracking-[0.25em] mb-3 text-[color:var(--gold)]">
                Featured Masters
              </div>
              <h2
                id="masters-heading"
                className="font-serif text-3xl md:text-4xl font-light tracking-tight"
              >
                The{' '}
                <em className="italic font-normal text-[color:var(--gold)]">
                  voices
                </em>{' '}
                behind the work
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {masters.map((m, i) => (
              <Reveal key={m.name} delay={0.05 + i * 0.08}>
                <div className="rounded-2xl p-7 bg-white/[0.04] border border-white/[0.08] h-full">
                  <div
                    aria-hidden="true"
                    className="w-20 h-20 rounded-full mb-5 mx-auto bg-gradient-to-b from-[color:var(--gold)]/[0.15] to-[color:var(--gold)]/[0.03] border border-[color:var(--gold)]/[0.18]"
                  />
                  <div className="text-[10px] font-bold uppercase tracking-[0.2em] mb-2 text-[color:var(--gold)] text-center">
                    {m.category}
                  </div>
                  <h3 className="font-serif text-xl text-center mb-3 text-[color:var(--foreground)]">
                    {m.name}
                  </h3>
                  <p className="text-sm text-white/60 leading-relaxed text-center">
                    {m.bio}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Categories */}
        <section
          aria-labelledby="categories-heading"
          className="container pb-24 md:pb-28 max-w-5xl"
        >
          <Reveal>
            <div className="text-center mb-12">
              <div className="text-[10px] font-bold uppercase tracking-[0.25em] mb-3 text-[color:var(--gold)]">
                What you&apos;ll find
              </div>
              <h2
                id="categories-heading"
                className="font-serif text-3xl md:text-4xl font-light tracking-tight"
              >
                Seven{' '}
                <em className="italic font-normal text-[color:var(--gold)]">
                  disciplines
                </em>
              </h2>
              <p className="text-sm text-white/55 mt-3 max-w-lg mx-auto">
                The Academy is organized by craft, not by level. Every category
                runs from fundamentals to mastery.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {categories.map((c, i) => (
              <Reveal key={c.title} delay={0.04 * i}>
                <div className="rounded-2xl p-6 bg-white/[0.04] border border-white/[0.08] h-full">
                  <div className="font-serif text-xl mb-2 text-[color:var(--foreground)]">
                    {c.title}
                  </div>
                  <div className="text-sm text-white/60 leading-relaxed">
                    {c.body}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Sample Articles */}
        <section
          aria-labelledby="articles-heading"
          className="container pb-24 md:pb-28 max-w-6xl"
        >
          <Reveal>
            <div className="text-center mb-12">
              <div className="text-[10px] font-bold uppercase tracking-[0.25em] mb-3 text-[color:var(--gold)]">
                From the Library
              </div>
              <h2
                id="articles-heading"
                className="font-serif text-3xl md:text-4xl font-light tracking-tight"
              >
                A taste of the{' '}
                <em className="italic font-normal text-[color:var(--gold)]">
                  collection
                </em>
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {articles.map((a, i) => (
              <Reveal key={a.title} delay={0.04 * i}>
                <Link
                  href="#"
                  className="block rounded-2xl p-6 bg-white/[0.04] border border-white/[0.08] hover:border-[color:var(--gold)]/[0.3] transition-colors h-full"
                >
                  <div className="text-[10px] font-bold uppercase tracking-[0.2em] mb-3 text-[color:var(--gold)]">
                    {a.category}
                  </div>
                  <h3 className="font-serif text-lg leading-snug mb-3 text-[color:var(--foreground)]">
                    {a.title}
                  </h3>
                  <p className="text-sm text-white/60 leading-relaxed mb-4">
                    {a.excerpt}
                  </p>
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--gold)]">
                    Read article →
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Contributor CTA */}
        <section className="container pb-24 md:pb-28 max-w-4xl">
          <Reveal>
            <div className="rounded-2xl p-8 md:p-12 bg-gradient-to-b from-[color:var(--gold)]/[0.06] to-[color:var(--gold)]/[0.01] border border-[color:var(--gold)]/[0.18] text-center">
              <div className="text-[10px] font-bold uppercase tracking-[0.25em] mb-3 text-[color:var(--gold)]">
                Want to contribute?
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-light tracking-tight mb-4">
                Teach the{' '}
                <em className="italic font-normal text-[color:var(--gold)]">
                  next generation
                </em>
              </h2>
              <p className="text-base text-white/70 leading-relaxed mb-8 max-w-xl mx-auto">
                The Academy grows through master colorists who are willing to
                codify their craft. If you teach, mentor, or publish — the
                Founding Ambassador program is how you join the library.
              </p>
              <LinkButton href="/ambassadors" variant="gold-solid" size="md">
                Become a Founding Ambassador
              </LinkButton>
            </div>
          </Reveal>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
