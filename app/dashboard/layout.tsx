import type { Metadata } from 'next'
import { TeamTopBar } from '@/components/team/TeamTopBar'
import { TeamSidebar } from '@/components/team/TeamSidebar'
import { PreviewBanner } from '@/components/team/PreviewBanner'
import { stylistMock } from '@/lib/mock/stylist'
import { isPreviewMode } from '@/lib/previewMode'

export const metadata: Metadata = {
  title: 'My Dashboard · Versani',
  description: 'Personal performance and usage dashboard for Versani stylists.',
  robots: { index: false, follow: false },
}

const navItems = [
  { href: '/dashboard', label: 'Overview', exact: true },
  { href: '/dashboard/clients', label: 'Clients' },
  { href: '/dashboard/formulas', label: 'My formulas' },
  { href: '/dashboard/performance', label: 'Performance' },
  { href: '/dashboard/billing', label: 'Billing' },
  { href: '/dashboard/settings', label: 'Settings' },
]

export default function StylistDashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const preview = isPreviewMode()

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <TeamTopBar
        consoleLabel="My Dashboard"
        contextLabel={`${stylistMock.profile.name} · ${stylistMock.profile.tier}`}
        userName={stylistMock.profile.name}
        previewMode={preview}
      />
      <PreviewBanner show={preview} />

      <div className="container flex-1 flex gap-8 py-8">
        <aside className="w-56 shrink-0 hidden md:block">
          <TeamSidebar items={navItems} ariaLabel="Dashboard navigation" />
        </aside>

        <main className="flex-1 min-w-0">{children}</main>
      </div>
    </div>
  )
}
