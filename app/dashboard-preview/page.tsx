import Link from 'next/link'

export const metadata = {
  title: 'The Versani Dashboard · Salon & School Intelligence',
  description:
    'See what makes Versani different. Our Premium Salon Dashboard and Beauty School Dashboard deliver operational intelligence that no salon CRM provides — team benchmarks, client retention, revenue analytics, curriculum insights, board-pass predictions, and more.',
}

export default function DashboardPreviewPage() {
  return (
    <main className="min-h-screen bg-[color:var(--background)] text-[color:var(--foreground)]">
      {/* HERO */}
      <section className="relative px-4 pt-16 md:pt-24 pb-12 max-w-6xl mx-auto">
        <div className="absolute top-20 right-[10%] w-80 h-80 rounded-full bg-white/[0.02] blur-[100px] pointer-events-none" />

        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <div className="text-[11px] font-bold uppercase tracking-[0.3em] mb-4 text-[color:var(--gold)]">
            The Intelligence Layer
          </div>
          <h1 className="font-serif text-4xl md:text-6xl font-light tracking-tight leading-[1.05] mb-6">
            Every Versani account comes with a dashboard that{' '}
            <em className="italic font-normal text-[color:var(--gold)]">no salon CRM delivers</em>.
          </h1>
          <p className="text-lg text-white/65 leading-relaxed max-w-xl mx-auto">
            Phorest manages your calendar. Boulevard handles your payments. Versani makes you{' '}
            <span className="text-white">better</span> — and tells you how much better.
          </p>
        </div>
      </section>

      {/* POSITIONING CONTRAST */}
      <section className="px-4 pb-16 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div
            className="rounded-2xl p-6"
            style={{
              backgroundColor: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(255,255,255,0.06)',
            }}
          >
            <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 mb-3">
              Traditional Salon CRM
            </div>
            <div className="text-sm text-white/55 leading-relaxed">
              Appointments. Payments. Client database. Basic revenue reports. Calendar.
            </div>
          </div>

          <div
            className="rounded-2xl p-6"
            style={{
              backgroundColor: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(255,255,255,0.06)',
            }}
          >
            <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 mb-3">
              Beauty School Software
            </div>
            <div className="text-sm text-white/55 leading-relaxed">
              Enrollment management. Attendance. Grades. Accreditation documentation.
            </div>
          </div>

          <div
            className="rounded-2xl p-6"
            style={{
              background:
                'linear-gradient(to bottom, rgba(212,175,55,0.06), rgba(212,175,55,0.01))',
              border: '1px solid rgba(212,175,55,0.3)',
            }}
          >
            <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[color:var(--gold)] mb-3">
              Versani Dashboards
            </div>
            <div className="text-sm text-white/80 leading-relaxed">
              AI-scored service quality. Cross-salon anonymized benchmarking. Per-stylist specialty
              identification. Client retention alerts. Curriculum gap analysis. Predictive
              board-pass rates.
            </div>
          </div>
        </div>
      </section>

      {/* SALON DASHBOARD PREVIEW */}
      <section className="px-4 pb-24 max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <div className="text-[10px] font-bold uppercase tracking-[0.25em] mb-3 text-[color:var(--gold)]">
            Premium Salon Dashboard
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-light tracking-tight mb-4">
            Included with{' '}
            <em className="italic font-normal text-[color:var(--gold)]">Salon Plan A & B</em>
          </h2>
          <p className="text-base text-white/60 max-w-2xl mx-auto">
            Seven views that answer the questions salon owners lose sleep over at 3am.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <DashboardFeatureCard
            kind="gold"
            label="Executive View"
            title="Your salon's industry rank"
            body="Overall quality score. National rank out of every Versani salon in the country. Month-over-month trending. One glance tells you if you're winning or slipping."
          />

          <DashboardFeatureCard
            label="Team Performance"
            title="Who's best at what"
            body="Per-stylist scoring with specialty identification. 'Sarah: Balayage specialist. Marcus: Corrections pro.' Train and schedule with real data."
          />

          <DashboardFeatureCard
            kind="gold"
            label="Clients"
            title="At-risk client alerts"
            body="Retention rate vs industry. At-risk list with last-visit timing and LTV dollar amounts. One-click 'Reach out' before they churn. Top 10% by LTV leaderboard."
          />

          <DashboardFeatureCard
            kind="gold"
            label="Revenue"
            title="Where your money actually comes from"
            body="Revenue per stylist per month. Category breakdown with % of total. AI pricing insights: 'Your balayage is 15% below metro avg — raising $30 adds ~$1,740/mo.'"
          />

          <DashboardFeatureCard
            label="Industry Benchmarks"
            title="Category-level competitive intel"
            body="How you stack against every Versani salon by service category. Top 3% in corrections. Bottom 35% in balayage. Know exactly where to train and where to flex."
          />

          <DashboardFeatureCard
            label="AI Insights"
            title="The coach you don't pay"
            body="'Your Tuesday afternoons score 34% higher — schedule complex work then.' 'Sarah's quiet gray-coverage strength is an untapped marketing opportunity.' Weekly intelligence."
          />

          <DashboardFeatureCard
            label="Auto Reports"
            title="Monthly Executive Summary in your inbox"
            body="Auto-generated monthly, quarterly, and annual reports. Custom report builder for ad-hoc analysis. PDF export with your salon branding."
          />

          <DashboardFeatureCard
            kind="gold"
            label="Shareable Wins"
            title="Badges earned"
            body="'Top Correction Salon in Denver.' 'Top 5% nationally in gray coverage.' Auto-generated graphics for social posts and website banners. Your rankings become marketing."
          />
        </div>
      </section>

      {/* SCHOOL DASHBOARD PREVIEW */}
      <section className="px-4 pb-24 max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <div className="text-[10px] font-bold uppercase tracking-[0.25em] mb-3 text-[color:var(--gold)]">
            Beauty School Dashboard
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-light tracking-tight mb-4">
            For schools who want to{' '}
            <em className="italic font-normal text-[color:var(--gold)]">prove it</em>
          </h2>
          <p className="text-base text-white/60 max-w-2xl mx-auto">
            Six views that transform student outcome data into recruiting, curriculum, and
            accreditation advantages.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <DashboardFeatureCard
            kind="gold"
            label="Executive View"
            title="Your school's national rank"
            body="Overall school score. National rank out of every beauty school on Versani. Predicted board-pass rate up to +18% above national average."
          />

          <DashboardFeatureCard
            label="Students"
            title="Cohort leaderboard"
            body="Individual student progress over the semester. Specialty strengths identified per student. Feed one-on-one instructor conversations with real data."
          />

          <DashboardFeatureCard
            kind="gold"
            label="Curriculum Insights"
            title="Where your curriculum wins and loses"
            body="'Your students score 16% below national on Chemistry — consider adding 4-6 lab hours.' 'Your Formulation Accuracy is 6% above national — feature in admissions marketing.' Actionable, specific, data-backed."
          />

          <DashboardFeatureCard
            kind="gold"
            label="Instructors"
            title="Teaching quality revealed"
            body="Per-instructor student outcomes. Staffing recommendations: 'Instructor Miller's students score 22% higher — consider expanding her balayage hours.' Your best teachers visible. Your gaps too."
          />

          <DashboardFeatureCard
            kind="gold"
            label="Placement"
            title="Your recruitment marketing engine"
            body="Grad placement rate at 30/60/90 days. Avg starting salary. Top hiring salons. Alumni success stories. '96% placed at 90 days — +18% above national average' is your admissions hero."
          />

          <DashboardFeatureCard
            label="Board-Pass Prediction"
            title="Who's at risk before it's too late"
            body="Predicted board-pass rate based on Versani practice performance. Automatic at-risk student flagging for instructor intervention. Intervene weeks before the exam."
          />
        </div>
      </section>

      {/* COMPETITIVE DIFFERENTIATION */}
      <section className="px-4 pb-24 max-w-4xl mx-auto">
        <div
          className="rounded-3xl p-8 md:p-12"
          style={{
            background:
              'linear-gradient(to bottom, rgba(212,175,55,0.06), rgba(212,175,55,0.01))',
            border: '1px solid rgba(212,175,55,0.2)',
          }}
        >
          <div className="text-[10px] font-bold uppercase tracking-[0.25em] mb-3 text-[color:var(--gold)]">
            The Versani Moat
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-light tracking-tight mb-4">
            This intelligence doesn't exist in{' '}
            <em className="italic font-normal text-[color:var(--gold)]">any</em>{' '}
            salon CRM
          </h2>
          <p className="text-base text-white/75 leading-relaxed mb-6">
            Phorest, Mangomint, Meevo, Boulevard, Salonist, Glambook, GlossGenius — excellent
            tools for booking, payments, and client management. None of them can tell you how your
            salon's balayage quality compares to every other salon nationwide, because none of
            them capture AI-scored service data.
          </p>
          <p className="text-base text-white/75 leading-relaxed mb-6">
            Versani's dashboards aren't competing with your salon CRM. They sit{' '}
            <span className="text-white font-semibold">alongside it</span> as a parallel
            intelligence layer that gets smarter every time any colorist on Versani scores a
            service. Network effects compound across the platform — the more users, the better
            your benchmarks.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[color:var(--gold)] text-black text-sm font-bold hover:opacity-90 transition-opacity"
            >
              See pricing →
            </Link>
            <Link
              href="/pricing#salon"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-transparent text-[color:var(--gold)] border border-[color:var(--gold)] text-sm font-bold hover:bg-[color:var(--gold)]/10 transition-colors"
            >
              Salon Plan A & B →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA — BEAUTY SCHOOLS */}
      <section className="px-4 pb-24 max-w-4xl mx-auto">
        <div
          className="rounded-3xl p-8 md:p-12 text-center"
          style={{
            backgroundColor: 'rgba(255,255,255,0.02)',
            border: '1px solid rgba(255,255,255,0.06)',
          }}
        >
          <h2 className="font-serif text-2xl md:text-3xl font-light tracking-tight mb-3">
            Beauty school?
          </h2>
          <p className="text-base text-white/65 max-w-xl mx-auto mb-6">
            Student licenses from $9.99/month. Bulk school licenses include instructor admin tools
            free with 10+ seats. Custom arrangements for 100+ student programs.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="mailto:frank@versani.ai?subject=Beauty%20School%20Versani%20pricing"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[color:var(--gold)] text-black text-sm font-bold hover:opacity-90 transition-opacity"
            >
              Talk to us about school pricing →
            </Link>
            <Link
              href="/auth?mode=student"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-transparent text-[color:var(--gold)] border border-[color:var(--gold)] text-sm font-bold hover:bg-[color:var(--gold)]/10 transition-colors"
            >
              Student signup →
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

/* ------------------------------------------------------------------ */
/* Feature card                                                        */
/* ------------------------------------------------------------------ */

interface DashboardFeatureCardProps {
  kind?: 'default' | 'gold'
  label: string
  title: string
  body: string
}

function DashboardFeatureCard({
  kind = 'default',
  label,
  title,
  body,
}: DashboardFeatureCardProps) {
  const isGold = kind === 'gold'

  return (
    <div
      className="rounded-2xl p-6"
      style={{
        background: isGold
          ? 'linear-gradient(to bottom, rgba(212,175,55,0.06), rgba(212,175,55,0.01))'
          : 'rgba(255,255,255,0.02)',
        border: isGold ? '1px solid rgba(212,175,55,0.25)' : '1px solid rgba(255,255,255,0.06)',
      }}
    >
      <div
        className="text-[10px] font-bold uppercase tracking-[0.2em] mb-3"
        style={{ color: isGold ? 'var(--gold)' : 'rgba(255,255,255,0.45)' }}
      >
        {label}
      </div>
      <h3 className="font-serif text-xl font-normal tracking-tight mb-2">{title}</h3>
      <p className="text-sm text-white/65 leading-relaxed">{body}</p>
    </div>
  )
}
