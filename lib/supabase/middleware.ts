/**
 * Supabase session refresh middleware.
 * Keeps auth session fresh across requests and gates /admin routes.
 */
import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({ request })

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  // If Supabase isn't configured (e.g. local preview), skip auth entirely.
  // Admin routes remain inaccessible since they need a real session.
  if (!supabaseUrl || !supabaseKey) {
    const path = request.nextUrl.pathname
    if (path.startsWith('/admin')) {
      const redirectUrl = request.nextUrl.clone()
      redirectUrl.pathname = '/auth'
      redirectUrl.searchParams.set('next', path)
      redirectUrl.searchParams.set('error', 'supabase_not_configured')
      return NextResponse.redirect(redirectUrl)
    }
    return supabaseResponse
  }

  const supabase = createServerClient(
    supabaseUrl,
    supabaseKey,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value)
          )
          supabaseResponse = NextResponse.next({ request })
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          )
        },
      },
    }
  )

  // Refresh the session
  const {
    data: { user },
  } = await supabase.auth.getUser()

  const path = request.nextUrl.pathname

  // Protect /admin/*
  if (path.startsWith('/admin')) {
    if (!user) {
      const redirectUrl = request.nextUrl.clone()
      redirectUrl.pathname = '/auth'
      redirectUrl.searchParams.set('next', path)
      redirectUrl.searchParams.set('mode', 'signin')
      return NextResponse.redirect(redirectUrl)
    }

    // Check admin role — requires profiles.is_admin column in Supabase
    // See SCHEMA-REQUIREMENTS.md for details
    try {
      const { data: profile } = await supabase
        .from('profiles')
        .select('is_admin')
        .eq('id', user.id)
        .single()

      if (!profile?.is_admin) {
        const redirectUrl = request.nextUrl.clone()
        redirectUrl.pathname = '/'
        redirectUrl.searchParams.set('error', 'admin_only')
        return NextResponse.redirect(redirectUrl)
      }
    } catch {
      // Schema not yet migrated — fall through and let page handle gracefully
    }
  }

  return supabaseResponse
}
