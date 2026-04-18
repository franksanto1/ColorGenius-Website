/**
 * Supabase browser client.
 * Used in Client Components for interactive auth flows (signin, signup, etc).
 * Shares the same Supabase project as the main Versani app.
 */
import { createBrowserClient } from '@supabase/ssr'

export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || '',
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
  )
}
