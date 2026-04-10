import Link from 'next/link'

// Mock data - replace with API calls to OpenServ backend later
const mockColorPalettes = [
  {
    id: 1,
    name: 'Warm Naturals',
    colors: ['#D4A574', '#C68642', '#B8860B', '#8B6914'],
    category: 'warm',
    description: 'Perfect for warm skin tones'
  },
  {
    id: 2,
    name: 'Cool Brights',
    colors: ['#4A90E2', '#357ABD', '#1E3A5F', '#2E5C8A'],
    category: 'cool',
    description: 'Ideal for cool undertones'
  },
  {
    id: 3,
    name: 'Sunset Tones',
    colors: ['#FF6B6B', '#FFA500', '#FFD700', '#FF8C00'],
    category: 'warm',
    description: 'Vibrant warm palette'
  }
]

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-blue-600">ColorGenius</h1>
            <div className="space-x-4">
              <Link href="#features" className="hover:text-blue-600">Features</Link>
              <Link href="#palettes" className="hover:text-blue-600">Palettes</Link>
              <Link href="/app" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Launch App
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-4">AI-Powered Color Analysis</h2>
          <p className="text-xl mb-8">Get personalized color palettes designed for your unique skin tone</p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100">
            Try ColorGenius Free
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-4xl font-bold mb-12 text-center">Why ColorGenius?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow">
              <h4 className="text-xl font-bold mb-4">🎨 AI Analysis</h4>
              <p>Advanced machine learning analyzes your skin tone and suggests perfect colors</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow">
              <h4 className="text-xl font-bold mb-4">📊 Professional Results</h4>
              <p>Get salon-quality color recommendations from the comfort of your home</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow">
              <h4 className="text-xl font-bold mb-4">💾 Save & Share</h4>
              <p>Build your palette and share with your colorist for perfect results</p>
            </div>
          </div>
        </div>
      </section>

      {/* Palettes Section */}
      <section id="palettes" className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-4xl font-bold mb-12 text-center">Featured Palettes</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mockColorPalettes.map((palette) => (
              <div key={palette.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="flex h-32">
                  {palette.colors.map((color, i) => (
                    <div
                      key={i}
                      style={{ backgroundColor: color }}
                      className="flex-1"
                      title={color}
                    />
                  ))}
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-2">{palette.name}</h4>
                  <p className="text-gray-600 mb-4">{palette.description}</p>
                  <button className="text-blue-600 font-bold hover:underline">
                    View Details →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-4xl font-bold mb-6">Ready to Find Your Perfect Colors?</h3>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 text-lg">
            Get Started Free
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>&copy; 2026 ColorGenius. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
