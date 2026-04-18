import { createClient } from '@/lib/supabase/server'

type ProfileRow = {
  id: string
  email?: string | null
  subscription_tier?: string | null
  subscription_status?: string | null
  created_at?: string | null
  last_sign_in_at?: string | null
}

async function fetchUsers() {
  const supabase = await createClient()
  try {
    const { data, error } = await supabase
      .from('profiles')
      .select('id, email, subscription_tier, subscription_status, created_at')
      .order('created_at', { ascending: false })
      .limit(100)
    if (error) throw error
    return (data || []) as ProfileRow[]
  } catch (err) {
    console.error('Users query failed:', err)
    return [] as ProfileRow[]
  }
}

export default async function AdminUsersPage() {
  const users = await fetchUsers()

  return (
    <section className="max-w-6xl">
      <p className="text-xs uppercase tracking-[0.24em] text-gold mb-2">Users</p>
      <h1 className="font-serif text-3xl md:text-4xl text-foreground mb-8">
        All users
      </h1>

      {users.length === 0 ? (
        <div className="rounded-2xl border border-white/[0.08] bg-white/[0.04] p-10 text-center">
          <p className="text-muted-foreground">
            No users yet. Connect Supabase and profiles will appear here.
          </p>
        </div>
      ) : (
        <div className="rounded-2xl border border-white/[0.08] bg-white/[0.04] overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-white/[0.04] border-b border-white/[0.08]">
              <tr>
                <th className="text-left px-4 py-3 text-xs uppercase tracking-wider text-muted-foreground">
                  Email
                </th>
                <th className="text-left px-4 py-3 text-xs uppercase tracking-wider text-muted-foreground">
                  Tier
                </th>
                <th className="text-left px-4 py-3 text-xs uppercase tracking-wider text-muted-foreground">
                  Status
                </th>
                <th className="text-left px-4 py-3 text-xs uppercase tracking-wider text-muted-foreground">
                  Signed up
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map((u) => (
                <tr key={u.id} className="border-b border-white/[0.04] last:border-0">
                  <td className="px-4 py-3 text-foreground">{u.email || '—'}</td>
                  <td className="px-4 py-3 text-muted-foreground">
                    {u.subscription_tier || '—'}
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full ${
                        u.subscription_status === 'active'
                          ? 'bg-green-500/10 text-green-300'
                          : 'bg-white/[0.04] text-muted-foreground'
                      }`}
                    >
                      {u.subscription_status || 'inactive'}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">
                    {u.created_at
                      ? new Date(u.created_at).toLocaleDateString()
                      : '—'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  )
}
