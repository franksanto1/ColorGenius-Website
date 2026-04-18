import type { Metadata } from 'next'
import Link from 'next/link'
import { SiteNav } from '@/components/nav/SiteNav'
import { SiteFooter } from '@/components/nav/SiteFooter'

export const metadata: Metadata = {
  title: 'Terms of Service — Versani',
  description:
    'The terms that govern your use of Versani. Subscription, acceptable use, intellectual property, and the data ownership commitments we stand behind.',
  alternates: { canonical: '/terms' },
  openGraph: {
    title: 'Versani Terms of Service',
    description:
      'Fair, plain-language terms — with the data-ownership commitments we stand behind.',
    url: '/terms',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Versani Terms of Service',
    description: 'Fair, plain-language terms.',
  },
}

const sections = [
  { id: 'acceptance', label: '1. Acceptance of Terms' },
  { id: 'accounts', label: '2. Account Creation' },
  { id: 'billing', label: '3. Subscriptions & Billing' },
  { id: 'acceptable-use', label: '4. Acceptable Use' },
  { id: 'ip', label: '5. Intellectual Property' },
  { id: 'data-ownership', label: '6. Data & Formula Ownership' },
  { id: 'termination', label: '7. Termination' },
  { id: 'disclaimers', label: '8. Disclaimers' },
  { id: 'liability', label: '9. Limitation of Liability' },
  { id: 'changes', label: '10. Changes to Terms' },
  { id: 'governing-law', label: '11. Governing Law' },
  { id: 'contact', label: '12. Contact' },
]

export default function TermsPage() {
  return (
    <>
      <SiteNav />
      <main id="main" className="relative">
        {/* Hero */}
        <section
          aria-labelledby="terms-hero-heading"
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
              id="terms-hero-heading"
              className="font-serif font-light text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.05] tracking-tight text-[color:var(--foreground)]"
            >
              Terms of{' '}
              <em className="italic font-normal text-[color:var(--gold)]">
                Service
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
            <nav
              aria-label="Terms sections"
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
                These Terms govern your use of Versani — the consultation
                platform, associated applications, and this website. By
                creating an account or using the service you agree to these
                Terms. If you do not agree, please do not use Versani.
              </p>

              <section id="acceptance" className="scroll-mt-28">
                <h2 className="font-serif text-2xl md:text-3xl mb-4 text-[color:var(--foreground)]">
                  1. Acceptance of Terms
                </h2>
                <p>
                  By accessing or using Versani, you confirm that you are at
                  least 18 years old and a licensed or licensed-in-training hair
                  professional, or acting on behalf of one. These Terms form a
                  binding agreement between you and Versani, Inc.
                </p>
              </section>

              <section id="accounts" className="scroll-mt-28">
                <h2 className="font-serif text-2xl md:text-3xl mb-4 text-[color:var(--foreground)]">
                  2. Account Creation
                </h2>
                <p className="mb-3">
                  To use Versani you must create an account with accurate
                  professional information. You are responsible for
                  safeguarding your credentials and for all activity that
                  occurs under your account.
                </p>
                <ul className="list-disc pl-5 space-y-1.5 marker:text-[color:var(--gold)]/50">
                  <li>One account per individual professional.</li>
                  <li>Salon tier accounts may include multiple named seats.</li>
                  <li>
                    You must notify us promptly of any unauthorized access at{' '}
                    <a
                      href="mailto:security@versani.ai"
                      className="text-[color:var(--gold)] hover:underline"
                    >
                      security@versani.ai
                    </a>
                    .
                  </li>
                </ul>
              </section>

              <section id="billing" className="scroll-mt-28">
                <h2 className="font-serif text-2xl md:text-3xl mb-4 text-[color:var(--foreground)]">
                  3. Subscriptions &amp; Billing
                </h2>
                <p className="mb-3">
                  Paid subscriptions renew automatically each billing cycle
                  (monthly or yearly). You may cancel at any time from your
                  account settings; cancellation takes effect at the end of the
                  current billing period.
                </p>
                <ul className="list-disc pl-5 space-y-1.5 marker:text-[color:var(--gold)]/50">
                  <li>
                    Free trials convert to read-only mode at expiration unless
                    you select a paid plan.
                  </li>
                  <li>
                    Upgrades are prorated and take effect immediately;
                    downgrades apply at the next billing cycle.
                  </li>
                  <li>
                    Taxes, where applicable, are added at checkout based on
                    your billing address.
                  </li>
                  <li>
                    Refunds are issued at our discretion for material service
                    failures.
                  </li>
                </ul>
              </section>

              <section id="acceptable-use" className="scroll-mt-28">
                <h2 className="font-serif text-2xl md:text-3xl mb-4 text-[color:var(--foreground)]">
                  4. Acceptable Use
                </h2>
                <p className="mb-3">You agree not to:</p>
                <ul className="list-disc pl-5 space-y-1.5 marker:text-[color:var(--gold)]/50">
                  <li>Resell, sublicense, or white-label the service without written permission.</li>
                  <li>Reverse-engineer, scrape, or automate the interface beyond published APIs.</li>
                  <li>
                    Upload content you do not have the right to use — including
                    client photos without consent.
                  </li>
                  <li>Use the service to harass, defame, or harm others.</li>
                  <li>Attempt to defeat rate limits, security controls, or usage caps.</li>
                </ul>
              </section>

              <section id="ip" className="scroll-mt-28">
                <h2 className="font-serif text-2xl md:text-3xl mb-4 text-[color:var(--foreground)]">
                  5. Intellectual Property
                </h2>
                <p>
                  The Versani platform, brand, trademarks, software, model
                  weights, and content (excluding your own uploaded content)
                  are the property of Versani, Inc. and protected by applicable
                  intellectual-property law. Your use grants you a personal,
                  non-exclusive, non-transferable right to access the service —
                  nothing more.
                </p>
              </section>

              <section id="data-ownership" className="scroll-mt-28">
                <h2 className="font-serif text-2xl md:text-3xl mb-4 text-[color:var(--foreground)]">
                  6. Data &amp; Formula Ownership
                </h2>
                <p className="mb-3">
                  Your shade charts, formulas, client records, photos, and
                  notes belong to you. Always. Versani acts as a custodian, not
                  an owner, of your professional library.
                </p>
                <ul className="list-disc pl-5 space-y-1.5 marker:text-[color:var(--gold)]/50">
                  <li>You can export your data at any time, in open formats.</li>
                  <li>We do not sell, license, or train on your personal library.</li>
                  <li>
                    Aggregated, anonymized trends may be used to improve the
                    service; you can opt out of this in Settings.
                  </li>
                  <li>
                    On cancellation, your account enters read-only mode;
                    nothing is deleted unless you delete it.
                  </li>
                </ul>
              </section>

              <section id="termination" className="scroll-mt-28">
                <h2 className="font-serif text-2xl md:text-3xl mb-4 text-[color:var(--foreground)]">
                  7. Termination
                </h2>
                <p>
                  You may cancel at any time. We may suspend or terminate
                  accounts for material breach of these Terms, non-payment, or
                  conduct that threatens the security or reputation of the
                  platform. Where possible we will provide notice and a chance
                  to remedy.
                </p>
              </section>

              <section id="disclaimers" className="scroll-mt-28">
                <h2 className="font-serif text-2xl md:text-3xl mb-4 text-[color:var(--foreground)]">
                  8. Disclaimers
                </h2>
                <p>
                  Versani provides educational guidance and AI-assisted
                  formula recommendations. It does not replace the licensed
                  professional judgment of the colorist. You remain responsible
                  for every service performed, including patch tests, allergy
                  checks, integrity assessments, and compliance with local
                  regulations. The service is provided on an &quot;as-is&quot;
                  and &quot;as-available&quot; basis, without warranties of any
                  kind to the maximum extent permitted by law.
                </p>
              </section>

              <section id="liability" className="scroll-mt-28">
                <h2 className="font-serif text-2xl md:text-3xl mb-4 text-[color:var(--foreground)]">
                  9. Limitation of Liability
                </h2>
                <p>
                  To the maximum extent permitted by law, Versani and its
                  officers, employees, and partners will not be liable for
                  indirect, incidental, special, consequential, or punitive
                  damages arising from your use of the service. Our aggregate
                  liability will not exceed the amount you paid Versani in the
                  twelve months preceding the claim.
                </p>
              </section>

              <section id="changes" className="scroll-mt-28">
                <h2 className="font-serif text-2xl md:text-3xl mb-4 text-[color:var(--foreground)]">
                  10. Changes to Terms
                </h2>
                <p>
                  We may update these Terms periodically. Material changes
                  will be announced via email and on this page at least thirty
                  days before they take effect. Continued use after that date
                  constitutes acceptance.
                </p>
              </section>

              <section id="governing-law" className="scroll-mt-28">
                <h2 className="font-serif text-2xl md:text-3xl mb-4 text-[color:var(--foreground)]">
                  11. Governing Law
                </h2>
                <p>
                  These Terms are governed by the laws of the State of
                  California, without regard to conflict-of-law principles.
                  Any disputes will be resolved in the state or federal courts
                  located in Los Angeles County, California, unless otherwise
                  required by applicable consumer-protection law.
                </p>
              </section>

              <section id="contact" className="scroll-mt-28">
                <h2 className="font-serif text-2xl md:text-3xl mb-4 text-[color:var(--foreground)]">
                  12. Contact
                </h2>
                <p>
                  Questions about these Terms? Email{' '}
                  <a
                    href="mailto:legal@versani.ai"
                    className="text-[color:var(--gold)] hover:underline"
                  >
                    legal@versani.ai
                  </a>{' '}
                  or reach us via the{' '}
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
