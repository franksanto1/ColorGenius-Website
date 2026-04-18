import Link from 'next/link'
import { VersaniWordmark } from '@/components/VersaniWordmark'

const columns = [
  {
    title: 'Platform',
    links: [
      { href: '/#features', label: 'Consultation' },
      { href: '/#features', label: 'Formula Lab' },
      { href: '/#features', label: 'Ask Versani' },
      { href: '/#pricing', label: 'Pricing' },
    ],
  },
  {
    title: 'Studio',
    links: [
      { href: '/#pricing', label: 'For Colorists' },
      { href: '/#pricing', label: 'For Studios' },
      { href: '/#pricing', label: 'For Salons' },
    ],
  },
  {
    title: 'Company',
    links: [
      { href: '/#philosophy', label: 'Philosophy' },
      { href: '/#contact', label: 'Contact' },
      { href: '/privacy', label: 'Privacy' },
      { href: '/terms', label: 'Terms' },
    ],
  },
]

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-[color:var(--border)]/60 mt-24 md:mt-32">
      <div className="container py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <VersaniWordmark size="sm" />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-[color:var(--muted-foreground)]">
              A consultation platform built exclusively for professional hair
              colorists. Beauty meets intelligence — every formula adapted to
              you.
            </p>
          </div>

          <div className="md:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
            {columns.map((col) => (
              <div key={col.title}>
                <h4 className="text-xs uppercase tracking-[0.2em] text-[color:var(--gold)] font-medium">
                  {col.title}
                </h4>
                <ul className="mt-5 space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-[color:var(--muted-foreground)] hover:text-[color:var(--foreground)] transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-[color:var(--border)]/60 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-xs text-[color:var(--muted-foreground)]">
            &copy; {year} Versani. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-[color:var(--muted-foreground)]">
            <Link href="/privacy" className="hover:text-[color:var(--foreground)]">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-[color:var(--foreground)]">
              Terms
            </Link>
            <Link href="/accessibility" className="hover:text-[color:var(--foreground)]">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
