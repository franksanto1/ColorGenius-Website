'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { VersaniWordmark } from '@/components/VersaniWordmark'
import { LinkButton } from '@/components/ui/Button'
import { cn } from '@/lib/cn'

const navLinks = [
  { href: '/#features', label: 'Platform' },
  { href: '/#pricing', label: 'Pricing' },
  { href: '/#philosophy', label: 'Philosophy' },
  { href: '/#contact', label: 'Contact' },
]

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 inset-x-0 z-50 transition-all duration-500 ease-luxury',
        scrolled
          ? 'backdrop-blur-md bg-[color:var(--background)]/70 border-b border-[color:var(--border)]/60'
          : 'bg-transparent',
      )}
    >
      <nav
        aria-label="Primary"
        className="container flex items-center justify-between h-18 md:h-20"
      >
        <Link href="/" aria-label="Versani home" className="shrink-0">
          <VersaniWordmark size="sm" />
        </Link>

        <ul className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm text-[color:var(--muted-foreground)] hover:text-[color:var(--foreground)] transition-colors duration-200 tracking-wide"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <LinkButton
            href="/#pricing"
            variant="gold-solid"
            size="sm"
            className="hidden md:inline-flex"
          >
            Get Started
          </LinkButton>

          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden h-10 w-10 flex items-center justify-center rounded-full border border-[color:var(--border)] text-[color:var(--foreground)]"
          >
            <span className="sr-only">Toggle navigation</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              {open ? (
                <>
                  <path d="M6 6l12 12" />
                  <path d="M18 6L6 18" />
                </>
              ) : (
                <>
                  <path d="M3 7h18" />
                  <path d="M3 12h18" />
                  <path d="M3 17h18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden border-t border-[color:var(--border)]/60 bg-[color:var(--background)]/95 backdrop-blur-md">
          <ul className="container py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-base text-[color:var(--foreground)]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <LinkButton href="/#pricing" variant="gold-solid" size="md" className="w-full">
                Get Started
              </LinkButton>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
