import { Search, Globe, Menu, User } from 'lucide-react'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center gap-2">
              <svg
                className="w-8 h-8 text-airbnb-pink"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
              </svg>
              <span className="text-xl font-bold text-airbnb-pink hidden md:block">
                airbnb
              </span>
            </a>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex items-center gap-4 border border-gray-300 rounded-full px-4 py-2 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
            <span className="text-sm font-semibold">Anywhere</span>
            <div className="w-px h-6 bg-gray-300" />
            <span className="text-sm font-semibold">Any week</span>
            <div className="w-px h-6 bg-gray-300" />
            <span className="text-sm text-gray-600">Add guests</span>
            <div className="bg-airbnb-pink text-white p-2 rounded-full">
              <Search size={16} />
            </div>
          </div>

          {/* Right Menu */}
          <div className="flex items-center gap-4">
            <button className="hidden md:block text-sm font-semibold hover:bg-gray-100 px-4 py-2 rounded-full transition">
              Airbnb your home
            </button>
            
            <button className="p-2 hover:bg-gray-100 rounded-full transition">
              <Globe size={18} />
            </button>

            <button className="flex items-center gap-2 border border-gray-300 rounded-full px-3 py-2 hover:shadow-md transition">
              <Menu size={18} />
              <div className="bg-gray-600 text-white p-1 rounded-full">
                <User size={18} />
              </div>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}