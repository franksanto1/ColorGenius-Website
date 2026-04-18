export default function AdminDashboardPage() {
  return (
    <section aria-labelledby="admin-heading" className="max-w-4xl">
      <p className="text-xs uppercase tracking-[0.24em] text-[color:var(--gold)] mb-4">
        Dashboard
      </p>
      <h1 id="admin-heading" className="font-serif text-4xl md:text-5xl mb-6">
        Reports dashboard coming soon.
      </h1>
      <p className="text-[color:var(--muted-foreground)] leading-relaxed max-w-2xl">
        This console will surface Versani subscription metrics, cohort retention,
        consultation volumes, and revenue breakdowns once the backend
        integration lands. It will consume data from Supabase (identity and
        usage) and Stripe (billing and MRR).
      </p>

      <ul className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          'Active subscriptions by tier',
          'Trial-to-paid conversion',
          'Consultations run this week',
          'MRR & churn trend',
        ].map((item) => (
          <li
            key={item}
            className="rounded-xl border border-[color:var(--border)] bg-[color:var(--card)] p-6"
          >
            <span className="text-xs uppercase tracking-[0.2em] text-[color:var(--muted-foreground)]">
              Widget
            </span>
            <p className="mt-2 text-[color:var(--foreground)]">{item}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
