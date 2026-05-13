import type { Metadata } from 'next'
import { SiteNav } from '@/components/nav/SiteNav'
import { SiteFooter } from '@/components/nav/SiteFooter'
import { Reveal } from '@/components/ui/Reveal'
import { LeadForm } from '@/components/forms/LeadForm'
import { FAQItem } from '@/components/pricing/PricingClient'

export const metadata: Metadata = {
  title: 'For Schools — Classroom-ready AI for the next generation',
  description:
    'Versani for beauty schools. Dual-account model: $8.99/student base seat paid by the school (same caps as Beauty Student tier), optional $9.99 Pro student upgrade. Seamless graduation continuity.',
  alternates: { canonical: '/schools' },
  openGraph: {
    title: 'Versani for Beauty Schools',
    description:
      'Classroom-ready AI consultation. $8.99 base seat, optional Pro upgrade, graduation continuity built in.',
    url: '/schools',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Versani for Beauty Schools',
    description:
      'Classroom-ready AI with graduation continuity built in.',
  },
}

const howItWorks = [
  {
    label: 'School base seat',
    subtitle: '$8.99 per student / month',
    body: 'Paid by the school. Every enrolled student receives a seat with the same caps as the Beauty Student tier: 20 Practice Cases (Full Consultations) per month with full Correction Workflow UI safety scaffolding (same AI as every paid tier — safety isn’t a luxury), 100 Master sessions, unlimited Formula Reformulations + Repeat Visits + Virtual Try-Ons, 100 client profiles. Supervised workflows and teacher-reviewable history built in.',
  },
  {
    label: 'Pro student upgrade',
    subtitle: '+$9.99 per student / month — optional',
    body: 'Paid by the student. Unlocks full Pro tier capacity for students who want the professional experience before graduation. Optional, never required — and never sold by the school.',
  },
]

const studentFeatures = [
  {
    label: 'Supervised learning workspace',
    body: 'Every consultation is reviewable by their instructor. Students can flag work for feedback; teachers can see the reasoning behind each formula.',
  },
  {
    label: '20 Practice Cases (Full Consultations) per month',
    body: 'Same as the individual Beauty Student tier. Photo analysis, AI rendering, and full chair-side flow on every consultation.',
  },
  {
    label: 'Unlimited Formula Reformulations',
    body: 'Tweak existing formulas as needed — naturally bounded by your client roster. Never count against the full-consultation cap.',
  },
  {
    label: '100 Master sessions + voice narration',
    body: 'Same as Beauty Student tier — a master colorist beside you — quick questions or deep dives. The AI teaches alongside the instructor, never replaces them.',
  },
  {
    label: 'Personal portfolio from day one',
    body: 'Every service builds the student\u2019s personal RAG — their shade charts, their photography, their formulas. Graduates leave with a real body of work.',
  },
  {
    label: 'Graduation-day continuity',
    body: 'Student accounts upgrade seamlessly to Pro on graduation. History, formulas, and client portfolio all persist. No export, no re-entry, no lost work.',
  },
]

const teacherFeatures = [
  {
    label: 'Classroom dashboard',
    body: 'Roster view with recent activity per student. At-a-glance indicators for engagement, formula quality, and consultation completion.',
  },
  {
    label: 'Work-review queue',
    body: 'Students can flag a consultation for review. Instructors see the full reasoning, can leave inline feedback, and track grading over time.',
  },
  {
    label: 'Curriculum-aligned masterclass library',
    body: 'Academy content organized around common beauty-school curricula — color theory, application technique, consultation skills, and correction fundamentals.',
  },
  {
    label: 'Per-student usage & cap controls',
    body: 'Adjust consultation and update caps per student or per class. Useful for exam periods, capstone projects, and differentiated instruction.',
  },
  {
    label: 'No student marketing',
    body: 'Versani does not market the Pro upgrade to students inside the classroom workspace. Students learn about Pro through their instructor, on their own time, or never — the school controls the surface.',
  },
  {
    label: 'FERPA-aware data handling',
    body: 'Student PII and academic data are treated as student records, not marketing lists. Export and deletion workflows match institutional requirements.',
  },
]

const gradBenefits = [
  'Their entire portfolio, formulas, and client history persist seamlessly.',
  'The Pro subscription begins the day their school seat ends — no gap, no lapse.',
  'First-time Pro graduates receive a 90-day transition rate to ease the first rent-or-chair-fee months.',
  'Instructors can gift or endorse specific graduates into the Ambassador pipeline.',
]

const faqs = [
  {
    q: 'Do we have to commit to all our students?',
    a: 'Yes — the school seat is enrollment-based, billed monthly per active student. This keeps the per-seat rate at $8.99 (well below Pro pricing) and ensures every student gets the same tool regardless of personal ability to pay. Inactive students automatically suspend billing.',
  },
  {
    q: 'Is the Pro upgrade required?',
    a: 'Never. The school-paid base seat is a complete learning environment. The Pro upgrade is entirely optional, paid directly by the student, and is not marketed inside the classroom workspace. Schools control whether the upgrade option is even visible.',
  },
  {
    q: 'How does graduation continuity actually work?',
    a: 'On a student\u2019s graduation date, their account upgrades from school-seat to Pro. All their consultations, formulas, photos, and personal RAG data persist. The school no longer sees their workspace; the student owns it outright.',
  },
  {
    q: 'What about instructors? Do they pay separately?',
    a: 'Instructor accounts are included in the base seat pricing at a 1-to-20 student ratio. Additional instructor seats are $15/month each. Instructors get full Premium-tier capacity for their own work plus classroom administration tools.',
  },
  {
    q: 'Is there a minimum school size?',
    a: 'No hard minimum. Schools with under 25 students use the same per-seat pricing. Schools over 150 students move to custom enterprise pricing with dedicated onboarding and SIS integration.',
  },
  {
    q: 'How is this different from the Team tier?',
    a: 'School seats have reduced consultation caps appropriate for supervised learning, built-in review workflows, FERPA-aware data handling, and graduation continuity. Salon seats have full professional capacity and shared client databases. Different jobs, different tools.',
  },
  {
    q: 'Can alumni keep their data if they skip the Pro upgrade at graduation?',
    a: 'Yes. Alumni who do not start Pro immediately enter read-only mode — their full portfolio remains accessible indefinitely, and they can re-activate Pro at any time. Data is never deleted.',
  },
]

export default function SchoolsPage() {
  return (
    <>
      <SiteNav />
      <main id="main" className="relative">
        {/* Hero */}
        <section
          aria-labelledby="schools-hero-heading"
          className="relative isolate overflow-hidden pt-32 md:pt-40 pb-20 md:pb-28"
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 gold-radial pointer-events-none"
          />
          <div className="relative container text-center max-w-4xl">
            <p className="text-xs uppercase tracking-[0.24em] text-[color:var(--gold)] mb-5">
              For Beauty Schools
            </p>
            <Reveal>
              <h1
                id="schools-hero-heading"
                className="font-serif font-light text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.05] tracking-tight"
              >
                Classroom-ready AI for the{' '}
                <em className="italic font-normal text-[color:var(--gold)]">
                  next generation
                </em>
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-8 text-base md:text-lg text-[color:var(--muted-foreground)] leading-relaxed">
                Versani for schools is a supervised, graduation-continuous
                version of the professional platform. Students train on the
                same tool they will use after licensure — and their work
                follows them into their career.
              </p>
            </Reveal>
          </div>
        </section>

        {/* How it works */}
        <section
          aria-labelledby="how-heading"
          className="container pb-24 md:pb-28 max-w-5xl"
        >
          <Reveal>
            <div className="text-center mb-12">
              <div className="text-[10px] font-bold uppercase tracking-[0.25em] mb-3 text-[color:var(--gold)]">
                How it works
              </div>
              <h2
                id="how-heading"
                className="font-serif text-3xl md:text-4xl font-light tracking-tight"
              >
                A{' '}
                <em className="italic font-normal text-[color:var(--gold)]">
                  dual-account
                </em>{' '}
                model
              </h2>
              <p className="text-sm text-white/55 mt-3 max-w-xl mx-auto">
                Schools pay for the base classroom seat. Students optionally
                pay for professional capacity on their own timing.
              </p>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {howItWorks.map((item, i) => (
              <Reveal key={item.label} delay={i * 0.05}>
                <div
                  className={
                    'rounded-2xl p-7 h-full ' +
                    (i === 0
                      ? 'bg-gradient-to-b from-[color:var(--gold)]/[0.06] to-[color:var(--gold)]/[0.01] border border-[color:var(--gold)]/[0.3]'
                      : 'bg-white/[0.04] border border-white/[0.08]')
                  }
                >
                  <div className="text-[10px] font-bold uppercase tracking-[0.2em] mb-3 text-[color:var(--gold)]">
                    {item.subtitle}
                  </div>
                  <h3 className="font-serif text-2xl tracking-tight mb-3 text-[color:var(--foreground)]">
                    {item.label}
                  </h3>
                  <p className="text-sm text-white/70 leading-relaxed">
                    {item.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Students vs Teachers */}
        <section
          aria-labelledby="surfaces-heading"
          className="container pb-24 md:pb-28 max-w-6xl"
        >
          <Reveal>
            <div className="text-center mb-12">
              <div className="text-[10px] font-bold uppercase tracking-[0.25em] mb-3 text-[color:var(--gold)]">
                Two workspaces
              </div>
              <h2
                id="surfaces-heading"
                className="font-serif text-3xl md:text-4xl font-light tracking-tight"
              >
                What students get,{' '}
                <em className="italic font-normal text-[color:var(--gold)]">
                  what teachers see
                </em>
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Reveal>
              <div className="rounded-2xl p-8 bg-white/[0.04] border border-white/[0.08] h-full">
                <div className="text-[10px] font-bold uppercase tracking-[0.25em] mb-4 text-[color:var(--gold)]">
                  Student workspace
                </div>
                <h3 className="font-serif text-2xl tracking-tight mb-6 text-[color:var(--foreground)]">
                  Learning, with professional rails
                </h3>
                <ul className="space-y-4">
                  {studentFeatures.map((f) => (
                    <li key={f.label}>
                      <div className="text-sm font-semibold text-[color:var(--foreground)]">
                        {f.label}
                      </div>
                      <div className="text-sm text-white/60 leading-relaxed mt-1">
                        {f.body}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="rounded-2xl p-8 bg-white/[0.04] border border-white/[0.08] h-full">
                <div className="text-[10px] font-bold uppercase tracking-[0.25em] mb-4 text-[color:var(--gold)]">
                  Teacher workspace
                </div>
                <h3 className="font-serif text-2xl tracking-tight mb-6 text-[color:var(--foreground)]">
                  Oversight, without surveillance
                </h3>
                <ul className="space-y-4">
                  {teacherFeatures.map((f) => (
                    <li key={f.label}>
                      <div className="text-sm font-semibold text-[color:var(--foreground)]">
                        {f.label}
                      </div>
                      <div className="text-sm text-white/60 leading-relaxed mt-1">
                        {f.body}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ★ Always Unlimited callout (mirrors pricing page) */}
        <section
          aria-labelledby="schools-unlimited-heading"
          className="container pb-16 max-w-4xl"
        >
          <div className="rounded-2xl bg-gradient-to-b from-[color:var(--gold)]/[0.10] to-[color:var(--gold)]/[0.02] border-2 border-[color:var(--gold)]/[0.25] p-8 md:p-10">
            <div className="text-center mb-6">
              <p className="text-xs uppercase tracking-[0.24em] text-[color:var(--gold)] mb-3 flex items-center justify-center gap-2">
                <span aria-hidden="true">★</span>
                Every Beauty School Seat Includes
                <span aria-hidden="true">★</span>
              </p>
              <h2
                id="schools-unlimited-heading"
                className="font-serif text-2xl md:text-3xl font-light tracking-tight"
              >
                Always Unlimited{' '}
                <em className="italic font-normal text-[color:var(--gold)]">
                  for every student
                </em>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 max-w-xl mx-auto">
              {[
                'Unlimited Formula Reformulations',
                'Unlimited Repeat Visits',
                'Unlimited Performance Photo scoring',
                'Unlimited Virtual Try-Ons',
                'Unlimited formula history',
                'Unlimited Versani Academy access',
              ].map((label) => (
                <div key={label} className="flex items-start gap-2.5">
                  <span className="shrink-0 mt-0.5 text-[color:var(--gold)] text-base leading-none" aria-hidden="true">★</span>
                  <span className="text-sm text-[color:var(--foreground)]">{label}</span>
                </div>
              ))}
            </div>

            <p className="text-center text-[11px] text-white/45 mt-6 italic">
              We meter Practice Cases + The Master. Everything else, students get to explore freely.
            </p>
          </div>
        </section>

        {/* Graduation continuity */}
        <section className="container pb-24 md:pb-28 max-w-4xl">
          <Reveal>
            <div className="rounded-2xl p-10 md:p-14 bg-gradient-to-b from-[color:var(--gold)]/[0.06] to-[color:var(--gold)]/[0.01] border border-[color:var(--gold)]/[0.18]">
              <div className="text-[10px] font-bold uppercase tracking-[0.25em] mb-3 text-[color:var(--gold)]">
                Graduation-day continuity
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-light tracking-tight mb-5">
                Their work{' '}
                <em className="italic font-normal text-[color:var(--gold)]">
                  follows them
                </em>
              </h2>
              <p className="text-base text-white/75 leading-relaxed mb-6">
                The hardest transition in a cosmetologist\u2019s career is the
                first thirty days out of school. Versani is designed so that
                graduation is administrative, not disruptive.
              </p>
              <ul className="space-y-3">
                {gradBenefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[color:var(--gold)] shrink-0"
                    />
                    <span className="text-sm md:text-base text-white/75 leading-relaxed">
                      {b}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </section>

        {/* Request demo form */}
        <section
          aria-labelledby="schools-form-heading"
          className="container pb-24 md:pb-28 max-w-3xl"
        >
          <Reveal>
            <div className="text-center mb-10">
              <h2
                id="schools-form-heading"
                className="font-serif text-3xl md:text-4xl font-light tracking-tight"
              >
                Request a{' '}
                <em className="italic font-normal text-[color:var(--gold)]">
                  demo
                </em>
              </h2>
              <p className="text-sm text-white/55 mt-3">
                A 30-minute walkthrough tailored to your curriculum and campus
                size.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <LeadForm
              id="schools-form"
              submitLabel="Request Demo"
              intro="Schools of all sizes are welcome. We tailor the walkthrough to your curriculum."
              fields={[
                { name: 'name', label: 'Your name', required: true, placeholder: 'Full name' },
                { name: 'role', label: 'Role', placeholder: 'Director, instructor, academic dean…' },
                { name: 'school', label: 'School name', required: true, placeholder: 'Institution' },
                { name: 'email', label: 'Email', type: 'email', required: true, placeholder: 'you@school.edu' },
                { name: 'enrollment', label: 'Approximate enrollment', placeholder: 'Students currently enrolled' },
                { name: 'notes', label: 'Anything else', type: 'textarea', placeholder: 'Curriculum notes, integration needs, or questions to cover on the call.' },
              ]}
            />
          </Reveal>
        </section>

        {/* FAQ */}
        <section
          aria-labelledby="schools-faq-heading"
          className="container pb-32 max-w-3xl"
        >
          <Reveal>
            <div className="text-center mb-10">
              <div className="text-[10px] font-bold uppercase tracking-[0.25em] mb-3 text-[color:var(--gold)]">
                School FAQ
              </div>
              <h2
                id="schools-faq-heading"
                className="font-serif text-3xl md:text-4xl font-light tracking-tight"
              >
                Answers for{' '}
                <em className="italic font-normal text-[color:var(--gold)]">
                  administrators
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
