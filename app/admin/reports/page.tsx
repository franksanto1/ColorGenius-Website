export default function AdminReportsPage() {
  const reportTypes = [
    {
      title: 'Monthly Industry Intelligence Report',
      desc: 'Aggregated market share, product performance, competitor trends for brand partners.',
    },
    {
      title: 'User Cohort Analysis',
      desc: 'Retention and engagement by signup cohort.',
    },
    {
      title: 'Revenue Breakdown',
      desc: 'Tier-level MRR contribution, churn impact, trial conversion.',
    },
    {
      title: 'Partner Attribution',
      desc: 'User signups attributed to each Founding Partner channel.',
    },
    {
      title: 'Ambassador Attribution',
      desc: 'Signups driven per ambassador + affiliate commission owed.',
    },
    {
      title: 'AI Cost Report',
      desc: 'Per-consultation cost, per-user cost, unit economics at scale.',
    },
  ]

  return (
    <section className="max-w-5xl">
      <p className="text-xs uppercase tracking-[0.24em] text-gold mb-2">Reports</p>
      <h1 className="font-serif text-3xl md:text-4xl text-foreground mb-8">
        Generate reports
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {reportTypes.map((r) => (
          <div
            key={r.title}
            className="rounded-2xl border border-white/[0.08] bg-white/[0.04] p-6 hover:border-gold/30 transition-colors"
          >
            <h3 className="font-serif text-lg text-foreground mb-2">{r.title}</h3>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              {r.desc}
            </p>
            <div className="flex gap-2">
              <button className="px-4 py-2 rounded-full bg-gold text-black text-xs font-semibold hover:bg-gold-light transition-colors">
                Generate
              </button>
              <button className="px-4 py-2 rounded-full border border-white/[0.08] text-foreground text-xs hover:bg-white/[0.04] transition-colors">
                Download PDF
              </button>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-8 text-xs text-muted-foreground text-center">
        Report generation runs against the shared Versani Supabase instance.
      </p>
    </section>
  )
}
