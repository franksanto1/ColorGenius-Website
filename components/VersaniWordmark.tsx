import Image from 'next/image'
import { cn } from '@/lib/cn'

type WordmarkSize = 'sm' | 'md' | 'lg' | 'xl' | 'display'

interface VersaniWordmarkProps {
  /** Visual size scale */
  size?: WordmarkSize
  /** Extra class names on the outer wrapper */
  className?: string
  /** Show the "Beauty Meets Intelligence" tagline beneath */
  tagline?: boolean
  /** Use the monogram (V icon) instead of the full wordmark */
  variant?: 'wordmark' | 'monogram'
  /** Visual priority — set true for above-the-fold use (header, hero) */
  priority?: boolean
}

// Wordmark is 2096x496 — ratio ~4.23:1
const wordmarkHeight: Record<WordmarkSize, number> = {
  sm: 32, // ~134px wide
  md: 48, // ~203px wide
  lg: 72, // ~304px wide
  xl: 96, // ~405px wide
  display: 160, // ~676px wide
}

// Monogram is 1024x1024 — square
const monogramSize: Record<WordmarkSize, number> = {
  sm: 32,
  md: 48,
  lg: 72,
  xl: 96,
  display: 140,
}

/**
 * Versani brand wordmark / monogram rendered from the official gold PNG assets.
 * Matches the main Versani app for perfect brand congruence.
 */
export function VersaniWordmark({
  size = 'md',
  className,
  tagline = false,
  variant = 'wordmark',
  priority = false,
}: VersaniWordmarkProps) {
  if (variant === 'monogram') {
    const dim = monogramSize[size]
    return (
      <span
        className={cn('inline-flex flex-col items-center', className)}
        aria-label="Versani"
      >
        <Image
          src="/versani-monogram.png"
          alt="Versani"
          width={dim}
          height={dim}
          priority={priority}
          className="block object-contain"
          style={{ width: 'auto', height: `${dim}px` }}
        />
        {tagline && (
          <span
            className="mt-3 font-light tracking-[0.32em] uppercase text-xs md:text-sm"
            style={{ color: 'var(--gold-light)' }}
            aria-hidden="true"
          >
            Beauty Meets Intelligence
          </span>
        )}
      </span>
    )
  }

  const h = wordmarkHeight[size]
  const w = Math.round(h * (2096 / 496)) // preserve aspect ratio

  return (
    <span
      className={cn('inline-flex flex-col items-center', className)}
      aria-label="Versani"
    >
      <Image
        src="/versani-wordmark.png"
        alt="Versani"
        width={w}
        height={h}
        priority={priority}
        className="block object-contain"
        style={{ height: `${h}px`, width: 'auto' }}
      />
      {tagline && (
        <span
          className="mt-3 font-light tracking-[0.32em] uppercase text-xs md:text-sm"
          style={{ color: 'var(--gold-light)' }}
          aria-hidden="true"
        >
          Beauty Meets Intelligence
        </span>
      )}
    </span>
  )
}
