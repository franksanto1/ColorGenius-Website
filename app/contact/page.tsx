import type { Metadata } from 'next'
import Link from 'next/link'
import { SiteNav } from '@/components/nav/SiteNav'
import { SiteFooter } from '@/components/nav/SiteFooter'
import { Reveal } from '@/components/ui/Reveal'
import { LeadForm } from '@/components/forms/LeadForm'

export const metadata: Metadata = {
  title: 'Contact — Get in touch with Versani',
  description:
    'Say hello, partner with us, or get support. Four direct channels for press, partnerships, and the colorist community.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact Versani',
    description:
      'Email, press, partnerships, support. Four direct channels to reach the team.',
    url: '/contact',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Versani',
    description: 'Four direct channels to reach the team.',
  },
}

const channels = [
  {
    label: 'General',
    email: 'hello@versani.ai',
    body: 'The best inbox for most things — questions, ideas, a note about the work.',
  },
  {
    label: 'Press',
    email: 'press@versani.ai',
    body: 'Editorial requests, interviews, brand assets, and launch coverage.',
  },
  {
    label: 'Partners',
    email: 'partnerships@versani.ai',
    body: 'Brand, distributor, and platform partnerships. Academy collaborations.',
  },
  {
    label: 'Support',
    email: 'support@versani.ai',
    body: 'For members — product questions, account help, and technical issues. Live at public launch.',
  },
]

const quickLinks = [
  { href: '/partners', label: 'Partner with Versani' },
  { href: '/ambassadors', label: 'Founding Ambassador circle' },
  { href: '/schools', label: 'For beauty schools' },
  { href: '/pricing', label: 'View pricing' },
]

export default function ContactPage() {
  return (
    <>
      <SiteNav />
      <main id="main" className="relative">
        {/* Hero */}
        <section
          aria-labelledby="contact-hero-heading"
          className="relative isolate overflow-hidden pt-32 md:pt-40 pb-8 md:pb-12"
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 gold-radial pointer-events-none"
          />
          <div className="relative container text-center">
            <p className="text-xs uppercase tracking-[0.24em] text-[color:var(--gold)] mb-5">
              Contact
            </p>
            <h1
              id="contact-hero-heading"
              className="font-serif font-light text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.05] tracking-tight text-[color:var(--foreground)]"
            >
              Get in{' '}
              <em className="italic font-normal text-[color:var(--gold)]">
                touch
              </em>
            </h1>
            <p className="mt-7 max-w-2xl mx-auto text-base md:text-lg text-[color:var(--muted-foreground)] leading-relaxed">
              Whether you&apos;re a colorist, a brand, a writer, or a school —
              the right person at Versani reads every message. Pick the channel
              that fits.
            </p>
          </div>
        </section>

        {/* Channels */}
        <section
          aria-labelledby="channels-heading"
          className="container pt-16 md:pt-20 pb-24 md:pb-28 max-w-5xl"
        >
          <Reveal>
            <h2
              id="channels-heading"
              className="sr-only"
            >
              Contact channels
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {channels.map((c, i) => (
              <Reveal key={c.label} delay={0.05 * i}>
                <div className="rounded-2xl p-6 md:p-7 bg-white/[0.04] border border-white/[0.08] h-full">
                  <div className="text-[10px] font-bold uppercase tracking-[0.25em] mb-3 text-[color:var(--gold)]">
                    {c.label}
                  </div>
                  <a
                    href={`mailto:${c.email}`}
                    className="font-serif text-2xl text-[color:var(--foreground)] hover:text-[color:var(--gold)] transition-colors block mb-3"
                  >
                    {c.email}
                  </a>
                  <p className="text-sm text-white/60 leading-relaxed">
                    {c.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Contact Form */}
        <section
          aria-labelledby="form-heading"
          className="container pb-24 md:pb-28 max-w-3xl"
        >
          <Reveal>
            <div className="text-center mb-10">
              <div className="text-[10px] font-bold uppercase tracking-[0.25em] mb-3 text-[color:var(--gold)]">
                Or write us directly
              </div>
              <h2
                id="form-heading"
                className="font-serif text-3xl md:text-4xl font-light tracking-tight"
              >
                Send a{' '}
                <em className="italic font-normal text-[color:var(--gold)]">
                  note
                </em>
              </h2>
            </div>
          </Reveal>

          <Reveal>
            <LeadForm
              id="contact-form"
              intro="Tell us who you are and what you need. We aim to reply within two business days."
              submitLabel="Send message"
              successMessage={'Thank you — we\u2019ll be in touch within two business days.'}
              fields={[
                {
                  name: 'name',
                  label: 'Your name',
                  required: true,
                  placeholder: 'Full name',
                },
                {
                  name: 'email',
                  label: 'Email',
                  type: 'email',
                  required: true,
                  placeholder: 'you@salon.com',
                },
                {
                  name: 'topic',
                  label: 'Topic',
                  required: true,
                  placeholder: 'General / Partnership / Press / Support / Other',
                },
                {
                  name: 'message',
                  label: 'Message',
                  type: 'textarea',
                  required: true,
                  placeholder: 'What would you like us to know?',
                },
              ]}
            />
          </Reveal>
        </section>

        {/* Location */}
        <section className="container pb-24 md:pb-28 max-w-3xl">
          <Reveal>
            <div className="rounded-2xl p-8 md:p-10 bg-white/[0.04] border border-white/[0.08] text-center">
              <div className="text-[10px] font-bold uppercase tracking-[0.25em] mb-3 text-[color:var(--gold)]">
                Based in
              </div>
              <p className="font-serif text-2xl md:text-3xl text-[color:var(--foreground)] mb-3">
                Los Angeles, California
              </p>
              <p className="text-sm text-white/60 leading-relaxed max-w-md mx-auto">
                Versani is a distributed team with roots in professional
                beauty. If you&apos;re in town and want to talk shop, reach out.
              </p>
            </div>
          </Reveal>
        </section>

        {/* Quick links */}
        <section className="container pb-24 md:pb-28 max-w-4xl">
          <Reveal>
            <div className="text-center mb-8">
              <div className="text-[10px] font-bold uppercase tracking-[0.25em] mb-3 text-[color:var(--gold)]">
                You may also be looking for
              </div>
              <h2 className="font-serif text-2xl md:text-3xl font-light tracking-tight">
                Quick{' '}
                <em className="italic font-normal text-[color:var(--gold)]">
                  links
                </em>
              </h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-2xl p-5 bg-white/[0.04] border border-white/[0.08] hover:border-[color:var(--gold)]/[0.3] transition-colors flex items-center justify-between"
              >
                <span className="text-sm font-medium text-white/85">
                  {link.label}
                </span>
                <span className="text-[color:var(--gold)] text-sm">→</span>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
