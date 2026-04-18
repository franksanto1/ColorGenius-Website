import { cn } from '@/lib/cn'

type WordmarkSize = 'sm' | 'md' | 'lg' | 'xl' | 'display'

interface VersaniWordmarkProps {
  size?: WordmarkSize
  className?: string
  tagline?: boolean
  as?: 'span' | 'h1' | 'div'
}

const sizeClass: Record<WordmarkSize, string> = {
  sm: 'text-2xl md:text-3xl tracking-[0.24em]',
  md: 'text-4xl md:text-5xl tracking-[0.22em]',
  lg: 'text-6xl md:text-7xl tracking-[0.20em]',
  xl: 'text-7xl md:text-8xl tracking-[0.18em]',
  display: 'text-[clamp(3.5rem,12vw,10rem)] tracking-[0.16em]',
}

/**
 * Versani wordmark rendered in Cormorant Garamond serif — gold, thin, letter-spaced.
 * Uses live text (not an image) so it stays crisp at every viewport and is selectable.
 */
export function VersaniWordmark({
  size = 'md',
  className,
  tagline = false,
  as: Tag = 'span',
}: VersaniWordmarkProps) {
  return (
    <span className={cn('inline-flex flex-col items-center', className)}>
      <Tag
        aria-label="Versani"
        className={cn(
          'font-serif font-light uppercase leading-none',
          'text-[color:var(--gold)]',
          sizeClass[size],
        )}
      >
        Versani
      </Tag>
      {tagline && (
        <span
          className="mt-3 text-[color:var(--gold-light)] font-light tracking-[0.32em] uppercase text-xs md:text-sm"
          aria-hidden="true"
        >
          Beauty Meets Intelligence
        </span>
      )}
    </span>
  )
}
