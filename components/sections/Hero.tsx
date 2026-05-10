'use client'

import { motion } from 'motion/react'
import { LinkButton } from '@/components/ui/Button'
import { VersaniWordmark } from '@/components/VersaniWordmark'

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: [0.2, 0, 0, 1] as const },
})

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate overflow-hidden min-h-[100svh] flex items-center justify-center"
    >
      {/* Ambient gold highlights */}
      <div
        aria-hidden="true"
        className="absolute inset-0 gold-radial animate-gold-pulse pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 gold-radial-bottom pointer-events-none"
      />
      {/* Fine grain / vignette */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-[0.35]"
        style={{
          background:
            'radial-gradient(circle at center, transparent 40%, oklch(0.05 0.01 260) 100%)',
        }}
      />

      <div className="relative container pt-32 pb-20 md:pt-40 md:pb-28 text-center">
        <motion.div {...fade(0)} className="flex justify-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[color:var(--gold)]/40 bg-[color:var(--gold)]/5 text-[color:var(--gold-light)] text-[11px] tracking-[0.24em] uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--gold)]" aria-hidden="true" />
            Beauty Meets Intelligence
          </span>
        </motion.div>

        <motion.div {...fade(0.1)} className="mt-10 md:mt-14">
          <h1 className="sr-only">Versani</h1>
          <VersaniWordmark size="display" priority />
        </motion.div>

        {/* Marketing-exception treatment: bolder display type + tighter tracking
            for the hero h2. Below-the-fold sections retain default rhythm. */}
        <motion.h2
          {...fade(0.25)}
          id="hero-heading"
          className="mt-10 md:mt-12 font-serif font-light text-[clamp(2.5rem,6vw,5rem)] leading-[1.02] tracking-[-0.01em] max-w-5xl mx-auto text-[color:var(--foreground)]"
        >
          AI that{' '}
          <em className="italic font-normal text-[color:var(--gold)]">
            respects
          </em>{' '}
          your craft.
        </motion.h2>

        <motion.p
          {...fade(0.4)}
          className="mt-8 md:mt-10 max-w-2xl mx-auto text-base md:text-lg leading-relaxed text-[color:var(--muted-foreground)]"
        >
          Versani is the consultation platform built exclusively for
          professional hair colorists. Every formula, adapted to you. Every
          client, remembered. Every outcome, elevated.
        </motion.p>

        <motion.div
          {...fade(0.55)}
          className="mt-12 md:mt-14 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <LinkButton href="/pricing" variant="gold-solid" size="lg">
            Start Free Trial
          </LinkButton>
          <LinkButton href="/pricing" variant="gold-outline" size="lg">
            Explore Membership
          </LinkButton>
        </motion.div>

        {/* Trust strip — premium-SaaS credibility signal */}
        <motion.div
          {...fade(0.7)}
          className="mt-10 md:mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[11px] uppercase tracking-[0.18em] text-[color:var(--muted-foreground)]"
        >
          <span className="flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-[color:var(--gold)]" aria-hidden="true" />
            Built by master colorists
          </span>
          <span className="hidden sm:inline opacity-30">·</span>
          <span className="flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-[color:var(--gold)]" aria-hidden="true" />
            7-day free trial · no card
          </span>
          <span className="hidden sm:inline opacity-30">·</span>
          <span className="flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-[color:var(--gold)]" aria-hidden="true" />
            Cancel anytime
          </span>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          {...fade(0.9)}
          className="absolute left-1/2 -translate-x-1/2 bottom-10 hidden md:flex flex-col items-center gap-2"
          aria-hidden="true"
        >
          <span className="text-[10px] tracking-[0.3em] uppercase text-[color:var(--muted-foreground)]">
            Discover
          </span>
          <span className="h-10 w-px bg-gradient-to-b from-[color:var(--gold)]/60 to-transparent" />
        </motion.div>
      </div>
    </section>
  )
}
