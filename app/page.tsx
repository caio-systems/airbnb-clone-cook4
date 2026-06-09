import { Search } from 'lucide-react'
import PropertyCard from '@/components/PropertyCard'
import { properties } from '@/lib/mockData'

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
      <section className="container mx-auto px-4 py-16">
        <div className="mb-8">
          <h2 className="text-3xl font-semibold mb-2">Explore nearby stays</h2>
          <p className="text-gray-600">Discover amazing places to stay</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-semibold mb-4">About</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:underline">How Airbnb works</a></li>
                <li><a href="#" className="hover:underline">Newsroom</a></li>
                <li><a href="#" className="hover:underline">Careers</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Community</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:underline">Diversity & Belonging</a></li>
                <li><a href="#" className="hover:underline">Accessibility</a></li>
                <li><a href="#" className="hover:underline">Airbnb Associates</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Host</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:underline">Host your home</a></li>
                <li><a href="#" className="hover:underline">Host an experience</a></li>
                <li><a href="#" className="hover:underline">Responsible hosting</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:underline">Help Center</a></li>
                <li><a href="#" className="hover:underline">Cancellation options</a></li>
                <li><a href="#" className="hover:underline">Contact us</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
            <p>© 2026 Airbnb Clone. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="hover:underline">Privacy</a>
              <a href="#" className="hover:underline">Terms</a>
              <a href="#" className="hover:underline">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}