import type { Metadata } from 'next'
import Link from 'next/link'
import { SiteNav } from '@/components/nav/SiteNav'
import { SiteFooter } from '@/components/nav/SiteFooter'

export const metadata: Metadata = {
  title: 'Cookie Policy — Versani',
  description:
    'How Versani uses cookies on this website — a short list, minimal tracking, and the controls you have to manage them.',
  alternates: { canonical: '/cookies' },
  openGraph: {
    title: 'Versani Cookie Policy',
    description:
      'A short list, minimal tracking, and clear controls.',
    url: '/cookies',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Versani Cookie Policy',
    description: 'A short list, minimal tracking.',
  },
}

const cookieTypes = [
  {
    title: 'Essential',
    body: 'Required for the site to function — authenticated sessions, basic security, form submission. These cannot be disabled without breaking core functionality.',
  },
  {
    title: 'Analytics',
    body: 'Anonymized usage data (page views, referral source, basic device class). Helps us understand what is useful and what is not. No individual tracking.',
  },
  {
    title: 'Marketing',
    body: 'We do not run tracking pixels for ad networks. If that ever changes, this policy — and our consent banner — will be updated before the fact.',
  },
]

export default function CookiesPage() {
  return (
    <>
      <SiteNav />
      <main id="main" className="relative">
        {/* Hero */}
        <section
          aria-labelledby="cookies-hero-heading"
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
              id="cookies-hero-heading"
              className="font-serif font-light text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.05] tracking-tight text-[color:var(--foreground)]"
            >
              Cookie{' '}
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
        <section className="container pt-10 md:pt-16 pb-24 md:pb-28 max-w-3xl">
          <div className="space-y-10 text-sm md:text-base text-white/80 leading-relaxed">
            {/* Intro */}
            <section>
              <h2 className="font-serif text-2xl md:text-3xl mb-4 text-[color:var(--foreground)]">
                What are cookies?
              </h2>
              <p>
                Cookies are small text files placed on your device when you
                visit a website. They are used to remember preferences, keep
                you signed in, and help site owners understand how a site is
                used. Some cookies are set by us; others are set by services we
                use to run the site.
              </p>
            </section>

            {/* Types */}
            <section>
              <h2 className="font-serif text-2xl md:text-3xl mb-4 text-[color:var(--foreground)]">
                Cookies we use
              </h2>
              <div className="grid grid-cols-1 gap-4">
                {cookieTypes.map((t) => (
                  <div
                    key={t.title}
                    className="rounded-2xl p-6 bg-white/[0.04] border border-white/[0.08]"
                  >
                    <div className="text-[10px] font-bold uppercase tracking-[0.25em] mb-3 text-[color:var(--gold)]">
                      {t.title}
                    </div>
                    <p className="text-sm text-white/75 leading-relaxed">
                      {t.body}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Third-party */}
            <section>
              <h2 className="font-serif text-2xl md:text-3xl mb-4 text-[color:var(--foreground)]">
                Third-party cookies
              </h2>
              <p className="mb-3">
                This website is served via Vercel and uses Vercel Analytics to
                measure aggregate traffic. Vercel Analytics is privacy-first: it
                does not use third-party cookies or fingerprinting, does not
                collect personal data, and is GDPR and CCPA compliant.
              </p>
              <p>
                If we add any other third-party service that sets cookies, we
                will list it here and update our consent banner.
              </p>
            </section>

            {/* Control */}
            <section>
              <h2 className="font-serif text-2xl md:text-3xl mb-4 text-[color:var(--foreground)]">
                How to control cookies
              </h2>
              <p className="mb-3">You can control cookies in a few ways:</p>
              <ul className="list-disc pl-5 space-y-1.5 marker:text-[color:var(--gold)]/50">
                <li>
                  Use your browser&apos;s settings to block or delete cookies.
                  Most browsers also offer a private-browsing mode.
                </li>
                <li>
                  Use Do Not Track or Global Privacy Control signals —
                  Versani respects both where technically feasible.
                </li>
                <li>
                  Decline non-essential cookies in our consent banner when it
                  appears.
                </li>
              </ul>
              <p className="mt-4">
                Note that disabling essential cookies will prevent key features
                (such as signed-in sessions) from working.
              </p>
            </section>

            {/* Contact */}
            <section>
              <h2 className="font-serif text-2xl md:text-3xl mb-4 text-[color:var(--foreground)]">
                Questions?
              </h2>
              <p>
                Questions about cookies, tracking, or privacy? Email{' '}
                <a
                  href="mailto:privacy@versani.ai"
                  className="text-[color:var(--gold)] hover:underline"
                >
                  privacy@versani.ai
                </a>{' '}
                or visit the{' '}
                <Link
                  href="/privacy"
                  className="text-[color:var(--gold)] hover:underline"
                >
                  Privacy Policy
                </Link>
                .
              </p>
            </section>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
