/**
 * Supabase barrel export.
 * Real clients live in lib/supabase/client.ts and lib/supabase/server.ts.
 */
export { createClient as createBrowserClient } from './supabase/client'
export { createClient as createServerClient, createServiceClient } from './supabase/server'
