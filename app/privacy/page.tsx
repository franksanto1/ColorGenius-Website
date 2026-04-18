import type { Metadata } from 'next'
import Link from 'next/link'
import { SiteNav } from '@/components/nav/SiteNav'
import { SiteFooter } from '@/components/nav/SiteFooter'

export const metadata: Metadata = {
  title: 'Privacy Policy — Versani',
  description:
    'How Versani collects, uses, and protects your data — and your clients\u2019 data. Your rights under GDPR and CCPA, cookie practices, and security commitments.',
  alternates: { canonical: '/privacy' },
  openGraph: {
    title: 'Versani Privacy Policy',
    description:
      'Data ownership is inviolable. How Versani handles information, honors your rights, and protects professional libraries.',
    url: '/privacy',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Versani Privacy Policy',
    description: 'How Versani handles data, honors rights, and stays out of your way.',
  },
}

const sections = [
  { id: 'information-we-collect', label: '1. Information We Collect' },
  { id: 'how-we-use', label: '2. How We Use Information' },
  { id: 'data-sharing', label: '3. Data Sharing' },
  { id: 'your-rights', label: '4. Your Rights (GDPR & CCPA)' },
  { id: 'data-portability', label: '5. Data Portability' },
  { id: 'cookies', label: '6. Cookies' },
  { id: 'children', label: '7. Children\u2019s Privacy' },
  { id: 'security', label: '8. Security' },
  { id: 'changes', label: '9. Changes to This Policy' },
  { id: 'contact', label: '10. Contact' },
]

export default function PrivacyPage() {
  return (
    <>
      <SiteNav />
      <main id="main" className="relative">
        {/* Hero */}
        <section
          aria-labelledby="privacy-hero-heading"
          className="relative isolate overflow-hidden pt-32 md:pt-40 pb-8 md:pb-12"
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 gold-radial pointer-events-none"
          />
          <div className="relative container text-center">
            <p className="text-xs uppercase tracking-[0.24em] text-[color:var(--gold)] mb-5">
              Legal
            </p>
            <h1
              id="privacy-hero-heading"
              className="font-serif font-light text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.05] tracking-tight text-[color:var(--foreground)]"
            >
              Privacy{' '}
              <em className="italic font-normal text-[color:var(--gold)]">
                Policy
              </em>
            </h1>
            <p className="mt-5 text-sm text-white/50">
              Last updated: April 2026
            </p>
          </div>
        </section>

        {/* Body */}
        <section className="container pt-10 md:pt-16 pb-24 md:pb-28 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-10">
            {/* TOC */}
            <nav
              aria-label="Privacy sections"
              className="md:sticky md:top-28 md:self-start"
            >
              <div className="text-[10px] font-bold uppercase tracking-[0.2em] mb-4 text-[color:var(--gold)]">
                On this page
              </div>
              <ul className="space-y-2">
                {sections.map((s) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className="text-xs text-white/55 hover:text-[color:var(--gold)] transition-colors leading-snug block"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="space-y-10 text-sm md:text-base text-white/80 leading-relaxed">
              <p className="text-base md:text-lg text-white/85 leading-relaxed">
                At Versani, protecting your data and your clients&apos; data is
                our top priority. This Privacy Policy explains what we collect,
                how we use it, and the rights you have. It applies to the
                Versani website, applications, and related services.
              </p>

              <section id="information-we-collect" className="scroll-mt-28">
                <h2 className="font-serif text-2xl md:text-3xl mb-4 text-[color:var(--foreground)]">
                  1. Information We Collect
                </h2>
                <p className="mb-3">
                  We collect only the information needed to provide the service
                  and honor the professional trust that makes it possible.
                </p>
                <ul className="list-disc pl-5 space-y-1.5 marker:text-[color:var(--gold)]/50">
                  <li>
                    Account details — name, email, phone, and salon affiliation.
                  </li>
                  <li>
                    Brand and line preferences across your inventory categories
                    (permanent, demi-permanent, lightening, toners, developers,
                    bond builders, and related product types).
                  </li>
                  <li>
                    Client hair profiles and service history you choose to
                    record.
                  </li>
                  <li>
                    Before/after photographs — only when uploaded with client
                    consent.
                  </li>
                  <li>
                    Shade chart data you import into your personal library
                    (user-initiated only).
                  </li>
                  <li>Technical usage logs, anonymized.</li>
                  <li>
                    Marketing contact information you submit via forms on this
                    website.
                  </li>
                </ul>
              </section>

              <section id="how-we-use" className="scroll-mt-28">
                <h2 className="font-serif text-2xl md:text-3xl mb-4 text-[color:var(--foreground)]">
                  2. How We Use Information
                </h2>
                <p className="mb-3">We use data only to:</p>
                <ul className="list-disc pl-5 space-y-1.5 marker:text-[color:var(--gold)]/50">
                  <li>Generate accurate multi-brand formulas.</li>
                  <li>Maintain client history and team-shared records.</li>
                  <li>Provide educational guidance and technique recommendations.</li>
                  <li>Enable inventory tracking across vendors.</li>
                  <li>Improve our AI models using aggregated, anonymized data.</li>
                  <li>Respond to inquiries submitted through contact forms.</li>
                </ul>
                <p className="mt-4 font-medium text-[color:var(--foreground)]">
                  We never sell your data or your clients&apos; data.
                </p>
              </section>

              <section id="data-sharing" className="scroll-mt-28">
                <h2 className="font-serif text-2xl md:text-3xl mb-4 text-[color:var(--foreground)]">
                  3. Data Sharing
                </h2>
                <p className="mb-3">
                  We share information only with the limited set of providers
                  needed to run the platform:
                </p>
                <ul className="list-disc pl-5 space-y-1.5 marker:text-[color:var(--gold)]/50">
                  <li>
                    Cloud infrastructure providers that host our services,
                    encrypted at rest and in transit.
                  </li>
                  <li>
                    AI model providers for formula generation — no client names
                    or personal details are sent.
                  </li>
                  <li>
                    Web search APIs for real-time product data verification —
                    only brand and product names are transmitted.
                  </li>
                  <li>Analytics services for anonymized, aggregated usage trends.</li>
                </ul>
                <p className="mt-4">
                  We may share anonymized, aggregated insights (trending shades,
                  techniques, brand performance) with manufacturers and
                  distributors. No personally identifiable information is ever
                  shared, and you can opt out at any time from Settings.
                </p>
              </section>

              <section id="your-rights" className="scroll-mt-28">
                <h2 className="font-serif text-2xl md:text-3xl mb-4 text-[color:var(--foreground)]">
                  4. Your Rights (GDPR &amp; CCPA)
                </h2>
                <p className="mb-3">
                  Wherever you are, you have the right to access, correct,
                  export, and delete the personal information we hold about you.
                  European and California residents are protected by GDPR and
                  CCPA respectively, including:
                </p>
                <ul className="list-disc pl-5 space-y-1.5 marker:text-[color:var(--gold)]/50">
                  <li>The right to access and receive a copy of your data.</li>
                  <li>The right to correct inaccurate information.</li>
                  <li>The right to deletion (subject to legal retention obligations).</li>
                  <li>The right to restrict or object to certain processing.</li>
                  <li>The right to data portability.</li>
                  <li>
                    The right to opt out of any sale or share of personal
                    information — Versani does not sell or share personal data.
                  </li>
                </ul>
                <p className="mt-4">
                  To exercise any of these rights, email{' '}
                  <a
                    href="mailto:privacy@versani.ai"
                    className="text-[color:var(--gold)] hover:underline"
                  >
                    privacy@versani.ai
                  </a>
                  .
                </p>
              </section>

              <section id="data-portability" className="scroll-mt-28">
                <h2 className="font-serif text-2xl md:text-3xl mb-4 text-[color:var(--foreground)]">
                  5. Data Portability
                </h2>
                <p>
                  Your shade charts, formulas, client records, and photos
                  belong to you. You can export everything at any time in
                  open, machine-readable formats. If you cancel your
                  subscription, your account moves to read-only mode — nothing
                  is deleted unless you delete it.
                </p>
              </section>

              <section id="cookies" className="scroll-mt-28">
                <h2 className="font-serif text-2xl md:text-3xl mb-4 text-[color:var(--foreground)]">
                  6. Cookies
                </h2>
                <p>
                  We use a small set of cookies to keep you signed in, remember
                  your preferences, and measure anonymized usage of the
                  marketing site. See our{' '}
                  <Link
                    href="/cookies"
                    className="text-[color:var(--gold)] hover:underline"
                  >
                    Cookie Policy
                  </Link>{' '}
                  for the full list.
                </p>
              </section>

              <section id="children" className="scroll-mt-28">
                <h2 className="font-serif text-2xl md:text-3xl mb-4 text-[color:var(--foreground)]">
                  7. Children&apos;s Privacy
                </h2>
                <p>
                  Versani is a professional tool for licensed colorists and is
                  not directed to children under 16. We do not knowingly
                  collect personal information from children. If you believe a
                  child has submitted information to us, contact{' '}
                  <a
                    href="mailto:privacy@versani.ai"
                    className="text-[color:var(--gold)] hover:underline"
                  >
                    privacy@versani.ai
                  </a>{' '}
                  and we will delete it.
                </p>
              </section>

              <section id="security" className="scroll-mt-28">
                <h2 className="font-serif text-2xl md:text-3xl mb-4 text-[color:var(--foreground)]">
                  8. Security
                </h2>
                <p>
                  We use modern industry-standard protections: encryption in
                  transit (TLS 1.2+) and at rest, row-level access controls,
                  environment isolation, and regular audits. No platform is
                  perfectly invulnerable — if a breach affects your
                  information, we will notify you and the applicable regulators
                  as required by law.
                </p>
              </section>

              <section id="changes" className="scroll-mt-28">
                <h2 className="font-serif text-2xl md:text-3xl mb-4 text-[color:var(--foreground)]">
                  9. Changes to This Policy
                </h2>
                <p>
                  We may update this policy from time to time. Material changes
                  will be announced via email and on this page. Continued use
                  of Versani after changes take effect constitutes acceptance
                  of the updated policy.
                </p>
              </section>

              <section id="contact" className="scroll-mt-28">
                <h2 className="font-serif text-2xl md:text-3xl mb-4 text-[color:var(--foreground)]">
                  10. Contact
                </h2>
                <p>
                  Questions, concerns, or data-subject requests? Email{' '}
                  <a
                    href="mailto:privacy@versani.ai"
                    className="text-[color:var(--gold)] hover:underline"
                  >
                    privacy@versani.ai
                  </a>
                  . For general inquiries visit our{' '}
                  <Link
                    href="/contact"
                    className="text-[color:var(--gold)] hover:underline"
                  >
                    contact page
                  </Link>
                  .
                </p>
              </section>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
