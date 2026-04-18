import type { Metadata } from 'next'
import Link from 'next/link'
import { Suspense } from 'react'
import { AuthForm } from './AuthForm'
import { VersaniWordmark } from '@/components/VersaniWordmark'

export const metadata: Metadata = {
  title: 'Sign In · Versani',
  description: 'Sign in to Versani — the professional AI consultation platform for licensed colorists.',
  robots: { index: false, follow: false },
}

export default function AuthPage() {
  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-md">
        <Link href="/" className="flex flex-col items-center mb-10">
          <VersaniWordmark size="md" priority />
          <span className="mt-3 text-xs text-muted-foreground tracking-[0.2em] uppercase">
            Beauty Meets Intelligence
          </span>
        </Link>

        <Suspense fallback={<div className="text-center text-muted-foreground">Loading…</div>}>
          <AuthForm />
        </Suspense>

        <p className="mt-8 text-center text-xs text-muted-foreground">
          By continuing you agree to our{' '}
          <Link href="/terms" className="text-gold hover:underline">
            Terms
          </Link>{' '}
          and{' '}
          <Link href="/privacy" className="text-gold hover:underline">
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </main>
  )
}
