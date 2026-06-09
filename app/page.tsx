import { Search } from 'lucide-react'
import PropertyGrid from '@/components/PropertyGrid'
import Footer from '@/components/Footer'
import { mockProperties } from '@/data/mockProperties'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px] bg-gradient-to-r from-purple-600 via-pink-500 to-red-500">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative container mx-auto px-4 h-full flex flex-col items-center justify-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-6">
            Not sure where to go? Perfect.
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-center">
            Find unique stays and experiences around the world
          </p>
          
          {/* Search Bar */}
          <div className="w-full max-w-4xl bg-white rounded-full shadow-2xl p-2">
            <div className="flex flex-col md:flex-row items-center gap-2">
              <input
                type="text"
                placeholder="Where are you going?"
                className="flex-1 px-6 py-3 text-gray-900 rounded-full focus:outline-none"
              />
              <input
                type="date"
                className="px-6 py-3 text-gray-900 rounded-full focus:outline-none"
              />
              <input
                type="date"
                className="px-6 py-3 text-gray-900 rounded-full focus:outline-none"
              />
              <button className="bg-airbnb-pink hover:bg-airbnb-pink-dark text-white px-8 py-3 rounded-full flex items-center gap-2 transition-colors">
                <Search size={20} />
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <PropertyGrid properties={mockProperties} />

      {/* Footer */}
      <Footer />
    </div>
  )
}
