/**
 * Mock data for Individual Stylist (Industry) dashboard.
 *
 * Mirrors the shape we expect from OpenServ's backend per-user view.
 * Swap for real Supabase queries when backend lands.
 *
 * For Phase 3 (Q2=C hybrid): renders with mock data when no Supabase
 * env vars; renders with live data when env configured.
 */

export type StylistTier = 'Beauty Student' | 'Essentials' | 'Pro' | 'Premium'

export interface StylistProfile {
  name: string
  email: string
  tier: StylistTier
  joinedAt: string
  city: string
  specialty: string
  nextRenewal: string
  monthlyPrice: number
}

export interface UsageMeter {
  label: string
  used: number
  cap: number | null // null = unlimited
  unit: string
  resets: string
}

export interface PerformanceSummary {
  score: number // 0-10
  scoreTrend: number[] // last 30 days, 0-10
  consultationsCompleted: number
  retentionRate: number // 0-1
  topFormula: string
  topFormulaUsage: number
}

export interface RecentClient {
  id: string
  name: string
  lastVisit: string
  formula: string
  satisfaction: number // 0-10
  nextSuggested: string | null
}

export interface StylistActivity {
  id: string
  timestamp: string
  type: 'consultation' | 'reformulation' | 'ask-learn' | 'photo'
  summary: string
}

export interface IndustryAccount {
  profile: StylistProfile
  usageMeters: UsageMeter[]
  performance: PerformanceSummary
  recentClients: RecentClient[]
  recentActivity: StylistActivity[]
}

// Demo stylist on Pro tier (most common active subscriber).
export const stylistMock: IndustryAccount = {
  profile: {
    name: 'Anya Marchetti',
    email: 'anya@studiomarchetti.com',
    tier: 'Pro',
    joinedAt: '2025-09-15',
    city: 'Los Angeles',
    specialty: 'Color correction · balayage',
    nextRenewal: '2026-06-08',
    monthlyPrice: 19.99,
  },
  usageMeters: [
    {
      label: 'Full Consultations',
      used: 31,
      cap: 50,
      unit: 'consults',
      resets: '2026-06-01',
    },
    {
      label: 'Formula Reformulations',
      used: 22,
      cap: 80,
      unit: 'reforms',
      resets: '2026-06-01',
    },
    {
      label: 'The Master',
      used: 168,
      cap: 200,
      unit: 'sessions',
      resets: '2026-06-01',
    },
    {
      label: 'Repeat Visits',
      used: 47,
      cap: null, // unlimited
      unit: 'visits',
      resets: '2026-06-01',
    },
  ],
  performance: {
    score: 8.6,
    scoreTrend: [
      8.2, 8.3, 8.1, 8.4, 8.5, 8.3, 8.4, 8.5, 8.6, 8.4, 8.5, 8.6, 8.7, 8.5,
      8.6, 8.7, 8.5, 8.6, 8.6, 8.7, 8.5, 8.6, 8.7, 8.6, 8.5, 8.6, 8.7, 8.6,
      8.6, 8.7,
    ],
    consultationsCompleted: 142,
    retentionRate: 0.82,
    topFormula: 'Goldwell Topchic 5N + 6NA · 9% dev',
    topFormulaUsage: 18,
  },
  recentClients: [
    {
      id: 'c-101',
      name: 'Maya R.',
      lastVisit: '2026-05-08',
      formula: 'Wella Koleston 7/4 + 8/0 · 6% dev',
      satisfaction: 9.4,
      nextSuggested: '2026-07-02',
    },
    {
      id: 'c-102',
      name: 'Patrick W.',
      lastVisit: '2026-05-06',
      formula: 'Goldwell Topchic 6N + 7NA · 9% dev',
      satisfaction: 8.8,
      nextSuggested: '2026-06-20',
    },
    {
      id: 'c-103',
      name: 'Liana K.',
      lastVisit: '2026-05-04',
      formula: 'Redken Shades EQ 9G + 9N · 1:1',
      satisfaction: 9.1,
      nextSuggested: '2026-07-15',
    },
    {
      id: 'c-104',
      name: 'Jordan S.',
      lastVisit: '2026-04-29',
      formula: 'Schwarzkopf IGORA Royal 4-5 + 6-46 · 9%',
      satisfaction: 8.5,
      nextSuggested: '2026-06-10',
    },
  ],
  recentActivity: [
    {
      id: 'a-1',
      timestamp: '2026-05-09T14:32:00',
      type: 'consultation',
      summary: 'Full Consultation completed for Maya R. — color correction',
    },
    {
      id: 'a-2',
      timestamp: '2026-05-09T11:15:00',
      type: 'ask-learn',
      summary: 'The Master: "Glaze formulation for warm-tone refresh on level 8"',
    },
    {
      id: 'a-3',
      timestamp: '2026-05-08T16:48:00',
      type: 'reformulation',
      summary: 'Formula Reformulation for Liana K. — adjusted developer ratio',
    },
    {
      id: 'a-4',
      timestamp: '2026-05-08T10:22:00',
      type: 'photo',
      summary: 'Performance Photo logged for Patrick W. (post-treatment)',
    },
    {
      id: 'a-5',
      timestamp: '2026-05-07T15:05:00',
      type: 'consultation',
      summary: 'Full Consultation completed for Jordan S. — major lift + tone',
    },
  ],
}
