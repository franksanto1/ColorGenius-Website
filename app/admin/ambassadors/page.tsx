export default function AdminAmbassadorsPage() {
  return (
    <section className="max-w-5xl">
      <p className="text-xs uppercase tracking-[0.24em] text-gold mb-2">Ambassadors</p>
      <h1 className="font-serif text-3xl md:text-4xl text-foreground mb-8">
        Founding Ambassadors
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="rounded-2xl border border-white/[0.08] bg-white/[0.04] p-6">
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
            Active Ambassadors
          </div>
          <div className="font-serif text-3xl text-foreground">0 / 8</div>
        </div>
        <div className="rounded-2xl border border-white/[0.08] bg-white/[0.04] p-6">
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
            Attributed Signups
          </div>
          <div className="font-serif text-3xl text-foreground">0</div>
        </div>
        <div className="rounded-2xl border border-white/[0.08] bg-white/[0.04] p-6">
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
            Affiliate Revenue (MTD)
          </div>
          <div className="font-serif text-3xl text-foreground">$0</div>
        </div>
      </div>

      <button className="px-5 py-2 rounded-full bg-gold text-black text-sm font-semibold mb-6 hover:bg-gold-light transition-colors">
        Add ambassador
      </button>

      <div className="rounded-2xl border border-white/[0.08] bg-white/[0.04] p-10 text-center">
        <p className="text-muted-foreground">
          No ambassadors yet. Founding Ambassadors (5–8 slots) will appear here once signed.
        </p>
      </div>
    </section>
  )
}
