import * as React from 'react'
import Link from 'next/link'
import { cn } from '@/lib/cn'

type Variant = 'gold-solid' | 'gold-outline' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-wide whitespace-nowrap transition-all duration-300 ease-luxury ' +
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-background ' +
  'disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]'

const variants: Record<Variant, string> = {
  'gold-solid':
    'bg-[color:var(--gold)] text-black border border-[color:var(--gold-light)] ' +
    'hover:bg-[color:var(--gold-light)] hover:border-[color:var(--gold-light)]',
  'gold-outline':
    'bg-transparent text-[color:var(--gold)] border border-[color:var(--gold)] ' +
    'hover:bg-[color:var(--gold)] hover:text-black',
  ghost:
    'bg-transparent text-[color:var(--foreground)] border border-transparent ' +
    'hover:bg-white/[0.04] hover:border-white/10',
}

const sizes: Record<Size, string> = {
  sm: 'h-9 px-4 text-xs',
  md: 'h-11 px-6 text-sm',
  lg: 'h-14 px-8 text-base',
}

interface BaseProps {
  variant?: Variant
  size?: Size
  className?: string
  children: React.ReactNode
}

type ButtonProps = BaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'children'> & {
    href?: undefined
  }

type LinkButtonProps = BaseProps & {
  href: string
  external?: boolean
  'aria-label'?: string
}

export function Button({
  variant = 'gold-solid',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  )
}

export function LinkButton({
  variant = 'gold-solid',
  size = 'md',
  className,
  children,
  href,
  external,
  ...props
}: LinkButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className)

  if (external) {
    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {children}
      </a>
    )
  }

  return (
    <Link href={href} className={classes} {...props}>
      {children}
    </Link>
  )
}
