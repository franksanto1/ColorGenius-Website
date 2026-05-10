import type { Metadata } from 'next'
import Link from 'next/link'
import { VersaniWordmark } from '@/components/VersaniWordmark'
import { cn } from '@/lib/cn'

export const metadata: Metadata = {
  title: 'Admin · Versani',
  robots: { index: false, follow: false },
}

const navItems = [
  { href: '/admin', label: 'Dashboard' },
  { href: '/admin/users', label: 'Users' },
  { href: '/admin/membership', label: 'Membership' },
  { href: '/admin/revenue', label: 'Revenue' },
  { href: '/admin/app-stores', label: 'App Stores' },
  { href: '/admin/partners', label: 'Partners' },
  { href: '/admin/ambassadors', label: 'Ambassadors' },
  { href: '/admin/reports', label: 'Reports' },
]

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  // Middleware handles auth gating. This layout just renders the shell.
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="border-b border-white/[0.08] bg-background/80 backdrop-blur-md sticky top-0 z-40">
        <div className="container h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" aria-label="Versani home">
              <VersaniWordmark size="sm" />
            </Link>
            <span className="text-xs tracking-[0.2em] uppercase text-gold">
              Admin Console
            </span>
          </div>
          <form action="/auth/signout" method="POST">
            <button
              type="submit"
              className="text-xs uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors"
            >
              Sign out
            </button>
          </form>
        </div>
      </header>

      <div className="container flex-1 flex gap-8 py-8">
        <aside className="w-56 shrink-0">
          <nav aria-label="Admin navigation">
            <ul className="space-y-1 sticky top-24">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      'block px-4 py-2.5 rounded-lg text-sm transition-colors',
                      'text-muted-foreground hover:text-foreground hover:bg-white/[0.04]'
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        <main className="flex-1 min-w-0">{children}</main>
      </div>
    </div>
  )
}
