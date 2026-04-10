import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ColorGenius - AI Color Analysis & Palette Generator',
  description: 'Professional AI-powered color analysis and palette generation for salons and designers',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
