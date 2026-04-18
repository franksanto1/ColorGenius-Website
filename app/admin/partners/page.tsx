export default function AdminPartnersPage() {
  return (
    <section className="max-w-5xl">
      <p className="text-xs uppercase tracking-[0.24em] text-gold mb-2">Partners</p>
      <h1 className="font-serif text-3xl md:text-4xl text-foreground mb-8">
        Brand partnerships
      </h1>

      <div className="flex gap-3 mb-8">
        <button className="px-5 py-2 rounded-full bg-gold text-black text-sm font-semibold hover:bg-gold-light transition-colors">
          Add partner
        </button>
        <button className="px-5 py-2 rounded-full border border-white/[0.08] text-foreground text-sm hover:bg-white/[0.04] transition-colors">
          Export roster
        </button>
      </div>

      <div className="rounded-2xl border border-white/[0.08] bg-white/[0.04] p-10 text-center">
        <p className="text-muted-foreground mb-2">No partners yet.</p>
        <p className="text-xs text-muted-foreground">
          Founding Partners will appear here once signed. Anchor, Standard, and Category tiers are tracked separately.
        </p>
      </div>
    </section>
  )
}
