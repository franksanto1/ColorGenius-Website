/**
 * Versani — Offline Ready Badge (marketing site)
 *
 * Mirror of the in-app component. A small gold pill that signals
 * "this feature works without wifi." Matches the OFFLINE READY pill on
 * Slide 5 of the investor pitch deck.
 *
 * Used to advertise the offline capability of Consultation + Pro Calculator
 * features across the marketing surface.
 */

interface OfflineReadyBadgeProps {
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export function OfflineReadyBadge({ size = 'md', className = '' }: OfflineReadyBadgeProps) {
  const sizeClasses = {
    sm: {
      container: 'gap-1 px-2 py-0.5',
      dot: 'w-1 h-1',
      text: 'text-[8px] tracking-[0.18em]',
    },
    md: {
      container: 'gap-1.5 px-2.5 py-1',
      dot: 'w-1.5 h-1.5',
      text: 'text-[9px] tracking-[0.18em]',
    },
    lg: {
      container: 'gap-2 px-3 py-1.5',
      dot: 'w-2 h-2',
      text: 'text-[10px] tracking-[0.2em]',
    },
  }[size]

  return (
    <span
      className={`inline-flex items-center ${sizeClasses.container} rounded-full border border-[color:var(--gold)]/60 bg-[color:var(--gold)]/[0.10] font-bold uppercase text-[color:var(--gold)] ${sizeClasses.text} ${className}`}
      role="img"
      aria-label="Offline ready feature — works without wifi via smart caching"
      title="Works without wifi via smart caching. Pro Calculator runs fully offline. Consultation runs the workflow + inventory suggestions offline (AI-generative features like photo analysis and creative research need network when available). Auto-syncs on reconnect."
    >
      <span
        className={`${sizeClasses.dot} rounded-full bg-[color:var(--gold)] inline-block`}
        aria-hidden="true"
      />
      Offline Ready
    </span>
  )
}
