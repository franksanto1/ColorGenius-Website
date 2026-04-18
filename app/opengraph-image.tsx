import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Versani — Beauty Meets Intelligence'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background:
            'radial-gradient(ellipse 60% 50% at 50% 40%, rgba(212,175,55,0.18), transparent 70%), #0b0d12',
          color: '#D4AF37',
          fontFamily: 'serif',
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
        }}
      >
        <div
          style={{
            fontSize: 160,
            fontWeight: 300,
            lineHeight: 1,
          }}
        >
          Versani
        </div>
        <div
          style={{
            marginTop: 36,
            fontSize: 26,
            letterSpacing: '0.32em',
            color: '#E6C866',
            fontFamily: 'sans-serif',
          }}
        >
          Beauty Meets Intelligence
        </div>
      </div>
    ),
    { ...size },
  )
}
