/**
 * Mock data for App Store metadata management dashboard.
 *
 * Mirrors the shape we'll fetch from App Store Connect API + Google Play
 * Console API in production. For Phase 4 (Q3=C admin scope), this lets
 * the UI render fully against realistic data while OpenServ wires the
 * actual API integrations.
 */

export type StoreId = 'app-store' | 'play-store'
export type ListingStatus =
  | 'in-review'
  | 'live'
  | 'rejected'
  | 'pending-developer-action'
  | 'preparing'
  | 'metadata-rejected'

export interface StoreListing {
  storeId: StoreId
  storeName: string
  appName: string
  bundleId: string
  currentVersion: string
  versionStatus: ListingStatus
  lastSubmitted: string
  submittedBy: string
  releaseDate: string | null
  rating: number // 0-5
  ratingCount: number
  installs: number
  monthlyInstalls: number
  crashRate: number // %
  // Listing copy fields
  shortDescription: string
  longDescription: string
  keywords: string[]
  whatsNew: string
  // Asset slots
  screenshots: { device: string; count: number; required: number }[]
  appIcon: { uploaded: boolean; lastUpdated: string }
  // Pending review issues
  reviewIssues: { id: string; severity: 'critical' | 'warning'; message: string }[]
}

export const appStoresMock: StoreListing[] = [
  {
    storeId: 'app-store',
    storeName: 'Apple App Store',
    appName: 'Versani',
    bundleId: 'ai.versani.app',
    currentVersion: '1.4.2',
    versionStatus: 'live',
    lastSubmitted: '2026-04-22',
    submittedBy: 'frank@versani.ai',
    releaseDate: '2026-04-25',
    rating: 4.8,
    ratingCount: 1247,
    installs: 18420,
    monthlyInstalls: 3100,
    crashRate: 0.12,
    shortDescription: 'AI consultation for professional hair colorists.',
    longDescription:
      'Versani is the consultation platform built exclusively for licensed hair colorists. Adaptive AI consultation, personal RAG per stylist, post-treatment scoring, and industry intelligence — every formula adapted to you, every client remembered, every outcome elevated.',
    keywords: [
      'hair color',
      'colorist',
      'salon',
      'beauty',
      'AI consultation',
      'hair formula',
      'color correction',
      'balayage',
      'hairstylist',
      'beauty professional',
    ],
    whatsNew:
      "Performance improvements + new Repeat Visit flow (free, unlimited). Full Consultation cap raised to 50/mo on Pro and 70/mo on Premium. Updated tier names — 'Studio' is now 'Premium'; salon plans are now 'Team Essentials/Pro/Premium'.",
    screenshots: [
      { device: 'iPhone 6.7"', count: 8, required: 6 },
      { device: 'iPhone 6.5"', count: 6, required: 6 },
      { device: 'iPad Pro 12.9"', count: 4, required: 4 },
    ],
    appIcon: { uploaded: true, lastUpdated: '2026-03-15' },
    reviewIssues: [],
  },
  {
    storeId: 'play-store',
    storeName: 'Google Play Console',
    appName: 'Versani',
    bundleId: 'ai.versani.app',
    currentVersion: '1.4.1',
    versionStatus: 'in-review',
    lastSubmitted: '2026-05-08',
    submittedBy: 'frank@versani.ai',
    releaseDate: null,
    rating: 4.7,
    ratingCount: 892,
    installs: 12350,
    monthlyInstalls: 2240,
    crashRate: 0.18,
    shortDescription: 'AI consultation for professional hair colorists.',
    longDescription:
      'Versani is the consultation platform built exclusively for licensed hair colorists. Adaptive AI consultation, personal RAG per stylist, post-treatment scoring, and industry intelligence — every formula adapted to you, every client remembered, every outcome elevated.',
    keywords: [
      'hair color',
      'colorist',
      'salon',
      'beauty AI',
      'hair formula assistant',
    ],
    whatsNew:
      "Performance improvements + new Repeat Visit flow (free, unlimited). Updated tier names + Formula Reformulations meter.",
    screenshots: [
      { device: 'Phone', count: 8, required: 4 },
      { device: '7-inch tablet', count: 4, required: 4 },
      { device: '10-inch tablet', count: 4, required: 4 },
    ],
    appIcon: { uploaded: true, lastUpdated: '2026-03-15' },
    reviewIssues: [
      {
        id: 'gp-001',
        severity: 'warning',
        message:
          'Privacy policy URL must include data-deletion request flow per Play Console policy update (effective 2026-05-15).',
      },
    ],
  },
]

export interface RecentRatingActivity {
  id: string
  store: StoreId
  rating: number
  reviewerCountry: string
  date: string
  excerpt: string
  responded: boolean
}

export const recentRatings: RecentRatingActivity[] = [
  {
    id: 'r-1',
    store: 'app-store',
    rating: 5,
    reviewerCountry: 'US',
    date: '2026-05-09',
    excerpt:
      'Finally a tool that treats my formulas like craft. The new Repeat Visit feature saves me so much time.',
    responded: false,
  },
  {
    id: 'r-2',
    store: 'play-store',
    rating: 4,
    reviewerCountry: 'CA',
    date: '2026-05-08',
    excerpt:
      'Love the consultations but the photo upload could be faster on older Android devices.',
    responded: false,
  },
  {
    id: 'r-3',
    store: 'app-store',
    rating: 5,
    reviewerCountry: 'UK',
    date: '2026-05-07',
    excerpt:
      'Worth every penny. The Premium tier is exactly what I needed for my color correction practice.',
    responded: true,
  },
  {
    id: 'r-4',
    store: 'app-store',
    rating: 3,
    reviewerCountry: 'AU',
    date: '2026-05-05',
    excerpt:
      'Good app but pricing seems high for solo colorists. Would love a lower-tier option.',
    responded: false,
  },
]
