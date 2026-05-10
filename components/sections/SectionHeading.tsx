'use client'

import { Reveal } from '@/components/ui/Reveal'
import { cn } from '@/lib/cn'

/**
 * SectionHeading — canonical section header for marketing pages.
 *
 * Renders the standard editorial pattern used across the Versani site:
 *
 *   ┌──────────────────────────────────────┐
 *   │   GOLD UPPERCASE EYEBROW             │  ← `eyebrow` prop
 *   │   <h2 in Cormorant 300/500 italic>   │  ← `title` + optional `accent`
 *   │   Optional muted-foreground subtitle │  ← `subtitle` prop
 *   └──────────────────────────────────────┘
 *
 * Typography is intentionally aligned with the demo app:
 *   - h2 → font-serif (Cormorant Garamond)
 *   - eyebrow → uppercase tracking-[0.24em] gold
 *   - subtitle → muted-foreground, body sans (Outfit via global default)
 *
 * Use `accent` to italicize a phrase inside the title in gold —
 * the editorial flourish used on home/pricing/schools sections.
 */
interface SectionHeadingProps {
  /** Small uppercase gold eyebrow above the title */
  eyebrow?: string
  /** Main headline text (rendered as <h2>) */
  title: string
  /** Optional gold-italic phrase inserted at the title's end */
  accent?: string
  /** Optional supporting paragraph below the title */
  subtitle?: string
  /** id for anchor links / aria-labelledby on the parent <section> */
  id?: string
  /** Tighter top/bottom rhythm for compact sections */
  density?: 'default' | 'compact'
  /** Override alignment (default centered) */
  align?: 'center' | 'left'
  /** Pass-through className on outer wrapper */
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  accent,
  subtitle,
  id,
  density = 'default',
  align = 'center',
  className,
}: SectionHeadingProps) {
  const alignClasses = align === 'center' ? 'text-center mx-auto' : 'text-left'
  const bottomMargin = density === 'compact' ? 'mb-10' : 'mb-14'

  return (
    <Reveal>
      <div className={cn(alignClasses, bottomMargin, className)}>
        {eyebrow ? (
          <p className="text-xs uppercase tracking-[0.24em] text-[color:var(--gold)] mb-5">
            {eyebrow}
          </p>
        ) : null}

        <h2
          id={id}
          className={cn(
            'font-serif font-light leading-[1.1] tracking-tight text-[color:var(--foreground)]',
            'text-[clamp(2rem,4.5vw,3.5rem)] max-w-3xl',
            align === 'center' ? 'mx-auto' : '',
          )}
        >
          {title}
          {accent ? (
            <>
              {' '}
              <em className="italic font-normal text-[color:var(--gold)]">
                {accent}
              </em>
            </>
          ) : null}
        </h2>

        {subtitle ? (
          <p
            className={cn(
              'mt-6 text-base md:text-lg text-[color:var(--muted-foreground)] leading-relaxed max-w-2xl',
              align === 'center' ? 'mx-auto' : '',
            )}
          >
            {subtitle}
          </p>
        ) : null}
      </div>
    </Reveal>
  )
}
