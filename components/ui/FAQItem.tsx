'use client'

import { useState } from 'react'
import { motion } from 'motion/react'

interface FAQItemProps {
  question: string
  answer: string
}

/**
 * Versani FAQ accordion — shared across marketing pages.
 * Matches the visual language established on /pricing.
 */
export function FAQItem({ question, answer }: FAQItemProps) {
  const [open, setOpen] = useState(false)
  return (
    <div className="rounded-xl overflow-hidden bg-white/[0.03] border border-white/[0.06]">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
      >
        <span className="text-sm font-semibold text-white/90">{question}</span>
        <span
          className="shrink-0 text-xl leading-none transition-transform duration-200 text-[color:var(--gold)]"
          style={{ transform: open ? 'rotate(45deg)' : 'rotate(0)' }}
          aria-hidden="true"
        >
          +
        </span>
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
        className="overflow-hidden"
      >
        <p className="px-5 pb-4 text-sm text-white/65 leading-relaxed">
          {answer}
        </p>
      </motion.div>
    </div>
  )
}
