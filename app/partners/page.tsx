import type { Metadata } from 'next'
import { SiteNav } from '@/components/nav/SiteNav'
import { SiteFooter } from '@/components/nav/SiteFooter'
import { Reveal } from '@/components/ui/Reveal'
import { LeadForm } from '@/components/forms/LeadForm'
import { FAQItem } from '@/components/pricing/PricingClient'

export const metadata: Metadata = {
  title: 'Partners — Hair color brands & distributors',
  description:
    'Partner with Versani. Direct access to professional colorists making daily purchasing decisions. Premium placement, industry intelligence, and a co-branded Founding Partner program.',
  alternates: { canonical: '/partners' },
  openGraph: {
    title: 'Versani for Brand Partners',
    description:
      'Premium brand placement in front of working colorists. Year 1 is free.',
    url: '/partners',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Versani for Brand Partners',
    description:
      'Direct access to professional colorists. Year 1 is free.',
  },
}

const audience = [
  {
    title: 'Hair color manufacturers',
    body: 'Wella, L\u2019Oréal, Redken, Schwarzkopf, Goldwell, Pravana, Joico, and emerging independents. Any brand that wants to be the one colorists reach for.',
  },
  {
    title: 'Professional distributors',
    body: 'SalonCentric, CosmoProf, and regional distributors looking to deepen relationships with their independent professional customer base.',
  },
  {
    title: 'Adjacent beauty brands',
    body: 'Care, treatment, bond-repair, and tool brands whose products show up in the same chair. Shampoo and bond-builder categories are particularly strong fits.',
  },
]

const benefits = [
  {
    title: 'Premium banner placement',
    body: 'Rotating above-the-fold banners on the dashboard. Professionally designed, served only to colorists in relevant categories.',
  },
  {
    title: 'Priority Shop tab placement',
    body: 'First-position placement in the in-app Shop tab, filtered by stylist category. Featured SKUs appear natively in formula recommendations.',
  },
  {
    title: 'Monthly Industry Intelligence Report',
    body: 'Aggregate, anonymized insights drawn from the Versani network — which tones are trending, which formulas perform, which complaints spike. Available only to partners.',
  },
  {
    title: 'Co-branded Founding Partner badge',
    body: 'A recognition mark — on the site, in the product, and in partner marketing assets. Founding Partner status is permanent.',
  },
  {
    title: 'Featured Academy placement',
    body: 'Sponsored masterclass slots taught by brand educators. Native to the learning experience, never interruptive.',
  },
  {
    title: 'Right of first refusal on Year 2 pricing',
    body: 'Founding Partners lock in Year 2+ pricing before the program opens publicly. No surprises, no bidding wars.',
  },
]

const tiers = [
  {
    label: 'Anchor',
    subtitle: 'Category exclusive · 12-month commitment',
    body: 'Sole Founding Partner in your category (e.g. permanent color, toner, bond-builder). Maximum placement, maximum signal.',
  },
  {
    label: 'Standard',
    subtitle: '6-month commitment',
    body: 'Shared category placement (up to three partners per category) with full access to banner, Shop, and Academy surfaces.',
  },
  {
    label: 'Category',
    subtitle: '3-month starter',
    body: 'Entry point for emerging and independent brands. Shop placement and Academy access; banner rotation on request.',
  },
]

const faqs = [
  {
    q: 'How many colorists are on Versani today?',
    a: 'We share current network size and composition privately with prospective partners. The Founding Partner program is deliberately small — we cap partners per category to protect both signal quality and data value.',
  },
  {
    q: 'What does "Year 1 is free" actually mean?',
    a: 'Founding Partners receive full access to placements and the Industry Intelligence Report for twelve months at no cost. In exchange, we ask for co-marketing cooperation — a testimonial, a case study, and appropriate brand usage rights. Year 2+ moves to standard pricing with right of first refusal.',
  },
  {
    q: 'Does Versani take a cut of sales?',
    a: 'No. Versani does not run a marketplace and does not take commission on product sales. When a colorist purchases through a distributor link, the transaction and margin stay with you. Our revenue comes from colorists paying for the platform.',
  },
  {
    q: 'How do you protect our competitive data?',
    a: 'The Industry Intelligence Report is aggregate and anonymized. Partners see category-level movement and trend lines, never individual stylist or client data. We do not resell your sales data to competitors, and competitor performance is never surfaced to you.',
  },
  {
    q: 'Can we sponsor specific formula categories?',
    a: 'Yes. Sponsorship is category-scoped (tone, lift level, treatment type) so partners surface where their products fit. Formula recommendations always prioritize the colorist\u2019s actual inventory first — sponsored placement never overrides professional judgment.',
  },
  {
    q: 'What commitments do you ask of partners?',
    a: 'Three: accurate product data (SKUs, ingredient claims, contraindications), responsive support when colorists report issues, and co-marketing cooperation during your Founding year. In return, you are the first brand in a category designed to last.',
  },
]

export default function PartnersPage() {
  return (
    <>
      <SiteNav />
      <main id="main" className="relative">
        {/* Hero */}
        <section
          aria-labelledby="partners-hero-heading"
          className="relative isolate overflow-hidden pt-32 md:pt-40 pb-20 md:pb-28"
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 gold-radial pointer-events-none"
          />
          <div className="relative container text-center max-w-4xl">
            <p className="text-xs uppercase tracking-[0.24em] text-[color:var(--gold)] mb-5">
              For Brands & Distributors
            </p>
            <Reveal>
              <h1
                id="partners-hero-heading"
                className="font-serif font-light text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.05] tracking-tight"
              >
                Partner with{' '}
                <em className="italic font-normal text-[color:var(--gold)]">
                  Versani
                </em>
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-8 text-base md:text-lg text-[color:var(--muted-foreground)] leading-relaxed">
                Direct access to professional colorists making daily purchasing
                decisions. Not an ad network. Not a retargeting pipeline. A
                curated set of surfaces inside the tool colorists open every
                morning.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Audience */}
        <section
          aria-labelledby="audience-heading"
          className="container pb-24 md:pb-28 max-w-6xl"
        >
          <Reveal>
            <div className="text-center mb-12">
              <div className="text-[10px] font-bold uppercase tracking-[0.25em] mb-3 text-[color:var(--gold)]">
                Who this is for
              </div>
              <h2
                id="audience-heading"
                className="font-serif text-3xl md:text-4xl font-light tracking-tight"
              >
                Three kinds of{' '}
                <em className="italic font-normal text-[color:var(--gold)]">
                  partner
                </em>
              </h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {audience.map((a, i) => (
              <Reveal key={a.title} delay={i * 0.05}>
                <div className="rounded-2xl p-7 bg-white/[0.04] border border-white/[0.08] h-full">
                  <h3 className="font-serif text-xl md:text-2xl tracking-tight mb-3 text-[color:var(--foreground)]">
                    {a.title}
                  </h3>
                  <p className="text-sm text-white/65 leading-relaxed">
                    {a.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Benefits */}
        <section
          aria-labelledby="benefits-heading"
          className="container pb-24 md:pb-28 max-w-6xl"
        >
          <Reveal>
            <div className="text-center mb-12">
              <div className="text-[10px] font-bold uppercase tracking-[0.25em] mb-3 text-[color:var(--gold)]">
                What partners receive
              </div>
              <h2
                id="benefits-heading"
                className="font-serif text-3xl md:text-4xl font-light tracking-tight"
              >
                Six founding{' '}
                <em className="italic font-normal text-[color:var(--gold)]">
                  benefits
                </em>
              </h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {benefits.map((b, i) => (
              <Reveal key={b.title} delay={(i % 3) * 0.05}>
                <div className="rounded-2xl p-7 bg-white/[0.04] border border-white/[0.08] h-full">
                  <h3 className="font-serif text-xl tracking-tight mb-3 text-[color:var(--foreground)]">
                    {b.title}
                  </h3>
                  <p className="text-sm text-white/65 leading-relaxed">
                    {b.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Tier structure */}
        <section
          aria-labelledby="tier-heading"
          className="container pb-24 md:pb-28 max-w-6xl"
        >
          <Reveal>
            <div className="text-center mb-12">
              <div className="text-[10px] font-bold uppercase tracking-[0.25em] mb-3 text-[color:var(--gold)]">
                Partner Tiers
              </div>
              <h2
                id="tier-heading"
                className="font-serif text-3xl md:text-4xl font-light tracking-tight"
              >
                Three tiers,{' '}
                <em className="italic font-normal text-[color:var(--gold)]">
                  clearly scoped
                </em>
              </h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {tiers.map((t, i) => (
              <Reveal key={t.label} delay={i * 0.05}>
                <div
                  className={
                    'rounded-2xl p-7 h-full ' +
                    (i === 0
                      ? 'bg-gradient-to-b from-[color:var(--gold)]/[0.08] to-[color:var(--gold)]/[0.01] border border-[color:var(--gold)]/40'
                      : 'bg-white/[0.04] border border-white/[0.08]')
                  }
                >
                  <div className="text-[10px] font-bold uppercase tracking-[0.2em] mb-3 text-[color:var(--gold)]">
                    {t.subtitle}
                  </div>
                  <h3 className="font-serif text-2xl tracking-tight mb-3 text-[color:var(--foreground)]">
                    {t.label}
                  </h3>
                  <p className="text-sm text-white/65 leading-relaxed">
                    {t.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Year 1 free callout */}
        <section className="container pb-24 md:pb-28 max-w-4xl">
          <Reveal>
            <div className="rounded-2xl p-10 md:p-14 bg-gradient-to-b from-[color:var(--gold)]/[0.06] to-[color:var(--gold)]/[0.01] border border-[color:var(--gold)]/[0.18] text-center">
              <div className="text-[10px] font-bold uppercase tracking-[0.25em] mb-3 text-[color:var(--gold)]">
                Founding Partner Program
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-light tracking-tight mb-5">
                Year 1 is{' '}
                <em className="italic font-normal text-[color:var(--gold)]">
                  free
                </em>
              </h2>
              <p className="text-base text-white/75 leading-relaxed max-w-2xl mx-auto">
                Founding Partners pay nothing for twelve months of placements
                and access to the Industry Intelligence Report. In exchange,
                co-marketing cooperation and category exclusivity where it
                applies. Year 2+ transitions to standard program pricing with
                right of first refusal for Founding Partners.
              </p>
            </div>
          </Reveal>
        </section>

        {/* Request form */}
        <section
          aria-labelledby="partner-form-heading"
          className="container pb-24 md:pb-28 max-w-3xl"
        >
          <Reveal>
            <div className="text-center mb-10">
              <h2
                id="partner-form-heading"
                className="font-serif text-3xl md:text-4xl font-light tracking-tight"
              >
                Request a{' '}
                <em className="italic font-normal text-[color:var(--gold)]">
                  conversation
                </em>
              </h2>
              <p className="text-sm text-white/55 mt-3">
                Tell us about your brand and your category. We respond to every
                Founding Partner inquiry personally.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <LeadForm
              id="partner-form"
              submitLabel="Request a Call"
              intro="All fields help us tailor the conversation. Nothing is shared outside the Versani partner team."
              fields={[
                { name: 'name', label: 'Your name', required: true, placeholder: 'Full name' },
                { name: 'company', label: 'Brand or company', required: true, placeholder: 'Brand name' },
                { name: 'role', label: 'Role / title', placeholder: 'e.g. VP Marketing' },
                { name: 'email', label: 'Work email', type: 'email', required: true, placeholder: 'you@brand.com' },
                { name: 'category', label: 'Primary product category', placeholder: 'Permanent color, toner, bond-builder…' },
                { name: 'notes', label: 'Tell us more', type: 'textarea', placeholder: 'Anything you want us to know before the call.' },
              ]}
            />
          </Reveal>
        </section>

        {/* FAQ */}
        <section
          aria-labelledby="partner-faq-heading"
          className="container pb-32 max-w-3xl"
        >
          <Reveal>
            <div className="text-center mb-10">
              <div className="text-[10px] font-bold uppercase tracking-[0.25em] mb-3 text-[color:var(--gold)]">
                Partner FAQ
              </div>
              <h2
                id="partner-faq-heading"
                className="font-serif text-3xl md:text-4xl font-light tracking-tight"
              >
                Honest answers to{' '}
                <em className="italic font-normal text-[color:var(--gold)]">
                  hard questions
                </em>
              </h2>
            </div>
          </Reveal>
          <div className="space-y-3">
            {faqs.map((item, i) => (
              <FAQItem key={i} question={item.q} answer={item.a} />
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
