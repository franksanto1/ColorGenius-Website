import type { Metadata } from 'next'
import Link from 'next/link'
import { VersaniWordmark } from '@/components/VersaniWordmark'

export const metadata: Metadata = {
  title: 'Admin',
  robots: { index: false, follow: false },
}

/**
 * Admin layout — placeholder.
 *
 * TODO (future phase):
 *   Wire Supabase Auth here. Pattern:
 *     1. const supabase = createServerClient(...)
 *     2. const { data: { user } } = await supabase.auth.getUser()
 *     3. if (!user || !isAdmin(user)) redirect('/login?next=/admin')
 *
 *   Until auth is wired, this layout is gated by a simple
 *   environment flag so staging builds don't expose stubs.
 */
export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Placeholder guard. Real guard will live in middleware + server
  // component auth check once Supabase is integrated.
  const adminEnabled = process.env.NEXT_PUBLIC_ADMIN_ENABLED === 'true'

  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b border-[color:var(--border)]">
        <div className="container h-16 flex items-center justify-between">
          <Link href="/" aria-label="Versani home">
            <VersaniWordmark size="sm" />
          </Link>
          <span className="text-xs tracking-[0.2em] uppercase text-[color:var(--muted-foreground)]">
            Admin Console
          </span>
        </div>
      </header>

      <main className="container flex-1 py-16">
        {adminEnabled ? (
          children
        ) : (
          <div className="max-w-xl">
            <h1 className="font-serif text-4xl md:text-5xl mb-4">
              Admin access required.
            </h1>
            <p className="text-[color:var(--muted-foreground)]">
              This area is not yet enabled. Set{' '}
              <code className="text-[color:var(--gold)]">
                NEXT_PUBLIC_ADMIN_ENABLED=true
              </code>{' '}
              in your environment to preview the placeholder dashboard.
            </p>
          </div>
        )}
      </main>
    </div>
  )
}
