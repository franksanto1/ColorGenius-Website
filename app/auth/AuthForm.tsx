'use client'

import { useSearchParams, useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import { createClient } from '@/lib/supabase/client'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/cn'

type AuthMode = 'signin' | 'signup'

export function AuthForm() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const initialMode = (searchParams.get('mode') as AuthMode) || 'signin'
  const nextPath = searchParams.get('next') || '/'

  const [mode, setMode] = useState<AuthMode>(initialMode)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<{ type: 'error' | 'success' | 'info'; text: string } | null>(null)

  useEffect(() => {
    setMode(initialMode)
  }, [initialMode])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMessage(null)

    let supabase
    try {
      supabase = createClient()
    } catch {
      setMessage({
        type: 'info',
        text: 'Authentication is not configured in this preview. Deploy to Vercel with Supabase env vars to enable sign-in.',
      })
      setLoading(false)
      return
    }

    try {
      if (mode === 'signup') {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            emailRedirectTo: `${window.location.origin}/auth/callback?next=${encodeURIComponent(nextPath)}`,
          },
        })
        if (error) throw error
        setMessage({
          type: 'success',
          text: 'Check your email for a verification link to complete signup.',
        })
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email, password })
        if (error) throw error
        router.push(nextPath)
        router.refresh()
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Something went wrong'
      setMessage({ type: 'error', text: errorMessage })
    } finally {
      setLoading(false)
    }
  }

  const handleMagicLink = async () => {
    if (!email) {
      setMessage({ type: 'error', text: 'Enter your email address first.' })
      return
    }
    setLoading(true)
    setMessage(null)

    let supabase
    try {
      supabase = createClient()
    } catch {
      setMessage({
        type: 'info',
        text: 'Authentication is not configured in this preview. Deploy to Vercel with Supabase env vars to enable sign-in.',
      })
      setLoading(false)
      return
    }

    try {
      const { error } = await supabase.auth.signInWithOtp({
        email,
        options: {
          emailRedirectTo: `${window.location.origin}/auth/callback?next=${encodeURIComponent(nextPath)}`,
        },
      })
      if (error) throw error
      setMessage({ type: 'success', text: 'Magic link sent. Check your email.' })
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Could not send magic link'
      setMessage({ type: 'error', text: errorMessage })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-8 md:p-10">
      <div className="flex items-center gap-2 mb-8 p-1 bg-white/[0.04] rounded-full w-fit mx-auto">
        <button
          onClick={() => setMode('signin')}
          className={cn(
            'px-5 py-2 rounded-full text-sm font-semibold transition-colors',
            mode === 'signin'
              ? 'bg-gold text-black'
              : 'text-muted-foreground hover:text-foreground'
          )}
        >
          Sign in
        </button>
        <button
          onClick={() => setMode('signup')}
          className={cn(
            'px-5 py-2 rounded-full text-sm font-semibold transition-colors',
            mode === 'signup'
              ? 'bg-gold text-black'
              : 'text-muted-foreground hover:text-foreground'
          )}
        >
          Create account
        </button>
      </div>

      <h1 className="font-serif text-2xl md:text-3xl text-center text-foreground mb-2">
        {mode === 'signup' ? 'Welcome to Versani' : 'Welcome back'}
      </h1>
      <p className="text-center text-sm text-muted-foreground mb-8">
        {mode === 'signup'
          ? 'Create your colorist account.'
          : 'Sign in to continue.'}
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.08] rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold/50 transition-colors"
            placeholder="you@salon.com"
            autoComplete="email"
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">
            Password
          </label>
          <input
            id="password"
            type="password"
            required
            minLength={8}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.08] rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold/50 transition-colors"
            placeholder={mode === 'signup' ? 'At least 8 characters' : 'Your password'}
            autoComplete={mode === 'signup' ? 'new-password' : 'current-password'}
          />
        </div>

        {message && (
          <div
            className={cn(
              'text-sm p-3 rounded-lg border',
              message.type === 'error' && 'bg-red-500/10 border-red-500/30 text-red-300',
              message.type === 'success' && 'bg-green-500/10 border-green-500/30 text-green-300',
              message.type === 'info' && 'bg-blue-500/10 border-blue-500/30 text-blue-300'
            )}
          >
            {message.text}
          </div>
        )}

        <Button type="submit" variant="gold-solid" size="lg" className="w-full" disabled={loading}>
          {loading ? 'Please wait…' : mode === 'signup' ? 'Create account' : 'Sign in'}
        </Button>
      </form>

      <div className="my-6 flex items-center gap-4">
        <div className="flex-1 h-px bg-white/[0.08]"></div>
        <span className="text-xs text-muted-foreground uppercase tracking-wider">Or</span>
        <div className="flex-1 h-px bg-white/[0.08]"></div>
      </div>

      <Button
        type="button"
        variant="gold-outline"
        size="lg"
        className="w-full"
        onClick={handleMagicLink}
        disabled={loading}
      >
        Email me a magic link
      </Button>
    </div>
  )
}
