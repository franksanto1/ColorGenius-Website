export default function AdminRevenuePage() {
  return (
    <section className="max-w-5xl">
      <p className="text-xs uppercase tracking-[0.24em] text-gold mb-2">Revenue</p>
      <h1 className="font-serif text-3xl md:text-4xl text-foreground mb-8">
        Revenue analytics
      </h1>

      <div className="rounded-2xl border border-white/[0.08] bg-white/[0.04] p-8 mb-6">
        <h2 className="font-serif text-xl text-foreground mb-4">MRR trend (last 12 months)</h2>
        <div className="h-48 flex items-end gap-2">
          {[2, 5, 8, 12, 18, 25, 34, 42, 50, 61, 73, 85].map((v, i) => (
            <div
              key={i}
              className="flex-1 rounded-t bg-gold/30 relative group"
              style={{ height: `${v}%` }}
            >
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                ${v * 100}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-3 text-xs text-muted-foreground text-center">
          Placeholder — connect Supabase to populate
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="rounded-2xl border border-white/[0.08] bg-white/[0.04] p-6">
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
            ARPU
          </div>
          <div className="font-serif text-3xl text-foreground">—</div>
        </div>
        <div className="rounded-2xl border border-white/[0.08] bg-white/[0.04] p-6">
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
            LTV
          </div>
          <div className="font-serif text-3xl text-foreground">—</div>
        </div>
        <div className="rounded-2xl border border-white/[0.08] bg-white/[0.04] p-6">
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
            CAC
          </div>
          <div className="font-serif text-3xl text-foreground">—</div>
        </div>
      </div>
    </section>
  )
}
