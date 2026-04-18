'use client'

import { useState, type FormEvent } from 'react'
import { cn } from '@/lib/cn'

interface LeadFormField {
  name: string
  label: string
  type?: 'text' | 'email' | 'textarea' | 'tel'
  placeholder?: string
  required?: boolean
}

interface LeadFormProps {
  id: string
  fields: LeadFormField[]
  submitLabel: string
  successMessage?: string
  /** When provided, render above fields as tone-setting lead-in */
  intro?: string
}

/**
 * Placeholder contact / application form.
 * Handles local submission UX (validation state, success message) but does NOT
 * post anywhere — backend wiring is deferred. Wire to Supabase / Resend later.
 */
export function LeadForm({
  id,
  fields,
  submitLabel,
  successMessage = 'Thank you — we\u2019ll be in touch within two business days.',
  intro,
}: LeadFormProps) {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitting(true)
    // Placeholder: no network call yet. Real submit wiring comes later.
    await new Promise((r) => setTimeout(r, 500))
    setSubmitting(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div
        role="status"
        className="rounded-2xl p-8 md:p-10 bg-gradient-to-b from-[color:var(--gold)]/[0.08] to-[color:var(--gold)]/[0.02] border border-[color:var(--gold)]/[0.3] text-center"
      >
        <div className="text-[10px] font-bold uppercase tracking-[0.25em] mb-3 text-[color:var(--gold)]">
          Received
        </div>
        <p className="font-serif text-2xl leading-snug text-[color:var(--foreground)]">
          {successMessage}
        </p>
      </div>
    )
  }

  return (
    <form
      id={id}
      onSubmit={handleSubmit}
      className="rounded-2xl p-7 md:p-10 bg-white/[0.04] border border-white/[0.08] space-y-5"
      noValidate
    >
      {intro && (
        <p className="text-sm text-white/60 leading-relaxed">{intro}</p>
      )}
      {fields.map((field) => {
        const inputBase =
          'w-full rounded-xl bg-black/30 border border-white/[0.1] px-4 py-3 text-sm text-[color:var(--foreground)] placeholder:text-white/30 ' +
          'focus:outline-none focus:border-[color:var(--gold)]/60 focus:ring-1 focus:ring-[color:var(--gold)]/40 transition-colors'
        const fieldId = `${id}-${field.name}`
        return (
          <div key={field.name} className="flex flex-col gap-2">
            <label
              htmlFor={fieldId}
              className="text-xs uppercase tracking-[0.18em] text-white/55 font-medium"
            >
              {field.label}
              {field.required && (
                <span className="text-[color:var(--gold)]"> *</span>
              )}
            </label>
            {field.type === 'textarea' ? (
              <textarea
                id={fieldId}
                name={field.name}
                required={field.required}
                placeholder={field.placeholder}
                rows={4}
                className={cn(inputBase, 'resize-y min-h-[120px]')}
              />
            ) : (
              <input
                id={fieldId}
                name={field.name}
                type={field.type ?? 'text'}
                required={field.required}
                placeholder={field.placeholder}
                className={inputBase}
              />
            )}
          </div>
        )
      })}
      <div className="pt-2">
        <button
          type="submit"
          disabled={submitting}
          className={cn(
            'inline-flex items-center justify-center gap-2 h-12 px-8 rounded-full text-sm font-medium tracking-wide transition-all duration-300 ease-luxury',
            'bg-[color:var(--gold)] text-black border border-[color:var(--gold-light)] hover:bg-[color:var(--gold-light)]',
            'disabled:opacity-60 disabled:pointer-events-none',
          )}
        >
          {submitting ? 'Sending…' : submitLabel}
        </button>
        <p className="text-xs text-white/40 mt-4">
          This form is a placeholder — wiring coming soon.
        </p>
      </div>
    </form>
  )
}
