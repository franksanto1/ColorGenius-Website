/**
 * Supabase client — STUB.
 *
 * This file is a placeholder that documents the shape of the future
 * Supabase integration without pulling in `@supabase/supabase-js` yet.
 *
 * Required environment variables (see .env.local.example):
 *   - NEXT_PUBLIC_SUPABASE_URL
 *   - NEXT_PUBLIC_SUPABASE_ANON_KEY
 *   - SUPABASE_SERVICE_ROLE_KEY  (server-only; admin operations)
 *
 * Once ready, install and replace this stub:
 *   npm install @supabase/supabase-js @supabase/ssr
 *
 * Usage will follow the App Router pattern:
 *   - createBrowserClient() for client components
 *   - createServerClient() for server components, route handlers,
 *     and middleware (reads cookies for session)
 *
 * The Versani app (salon-muse-pro) shares this Supabase project; the
 * website uses the same auth session for the /admin area via SSO.
 */

type SupabaseEnv = {
  url: string
  anonKey: string
  serviceRoleKey?: string
}

export function readSupabaseEnv(): SupabaseEnv {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!url || !anonKey) {
    throw new Error(
      'Supabase is not configured. Set NEXT_PUBLIC_SUPABASE_URL and ' +
        'NEXT_PUBLIC_SUPABASE_ANON_KEY in your environment.',
    )
  }

  return { url, anonKey, serviceRoleKey }
}

/**
 * Placeholder for createBrowserClient — not usable until the real dep
 * is installed. Exported to keep import paths stable across the codebase.
 */
export function createBrowserClient(): never {
  throw new Error(
    'Supabase browser client not wired. Install @supabase/ssr and replace this stub.',
  )
}

/**
 * Placeholder for createServerClient.
 */
export function createServerClient(): never {
  throw new Error(
    'Supabase server client not wired. Install @supabase/ssr and replace this stub.',
  )
}
