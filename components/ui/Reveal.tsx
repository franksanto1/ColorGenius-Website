'use client'

import { motion, type Variants } from 'motion/react'
import type { ReactNode } from 'react'

const variants: Variants = {
  hidden: { opacity: 0, y: 16 },
  shown: { opacity: 1, y: 0 },
}

interface RevealProps {
  children: ReactNode
  delay?: number
  className?: string
  as?: 'div' | 'section'
}

/**
 * Versani entrance-animation wrapper.
 * Standard: 0.6s, cubic-bezier(0.25, 0.1, 0.25, 1) — slow, confident.
 * Triggers once when scrolled into view.
 */
export function Reveal({
  children,
  delay = 0,
  className,
  as = 'div',
}: RevealProps) {
  const MotionTag = as === 'section' ? motion.section : motion.div
  return (
    <MotionTag
      initial="hidden"
      whileInView="shown"
      viewport={{ once: true, margin: '-80px' }}
      variants={variants}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </MotionTag>
  )
}
