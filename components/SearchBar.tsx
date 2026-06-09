'use client'

import { useState } from 'react'
import { Search, MapPin, Calendar, Users, Minus, Plus } from 'lucide-react'

export default function SearchBar() {
  const [activeInput, setActiveInput] = useState<string | null>(null)
  const [location, setLocation] = useState('')
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [guests, setGuests] = useState({
    adults: 0,
    children: 0,
    infants: 0,
  })

  const totalGuests = guests.adults + guests.children + guests.infants

  const handleGuestChange = (type: 'adults' | 'children' | 'infants', delta: number) => {
    setGuests(prev => ({
      ...prev,
      [type]: Math.max(0, prev[type] + delta),
    }))
  }

  const handleSearch = () => {
    console.log({ location, checkIn, checkOut, guests })
    // Search logic would go here
  }

  return (
    <div className="relative -mt-8 z-20 container mx-auto px-4">
      <div className="bg-white rounded-full shadow-2xl border border-gray-200 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
          {/* Location Input */}
          <div className="relative">
            <button
              onClick={() => setActiveInput('location')}
              className={`w-full text-left px-6 py-4 rounded-full transition-all ${
                activeInput === 'location' ? 'bg-white shadow-lg ring-2 ring-gray-300' : 'hover:bg-gray-100'
              }`}
            >
              <div className="flex items-center gap-3">
                <MapPin size={20} className="text-gray-600 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <label className="block text-xs font-semibold text-gray-900 mb-1">
                    Where
                  </label>
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Search destinations"
                    className="w-full text-sm text-gray-600 bg-transparent border-none outline-none placeholder-gray-400"
                    onFocus={() => setActiveInput('location')}
                  />
                </div>
              </div>
            </button>
          </div>

          {/* Check-in Date */}
          <div className="relative border-t md:border-t-0 md:border-l border-gray-200">
            <button
              onClick={() => setActiveInput('checkIn')}
              className={`w-full text-left px-6 py-4 rounded-full transition-all ${
                activeInput === 'checkIn' ? 'bg-white shadow-lg ring-2 ring-gray-300' : 'hover:bg-gray-100'
              }`}
            >
              <div className="flex items-center gap-3">
                <Calendar size={20} className="text-gray-600 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <label className="block text-xs font-semibold text-gray-900 mb-1">
                    Check in
                  </label>
                  <input
                    type="date"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="w-full text-sm text-gray-600 bg-transparent border-none outline-none"
                    onFocus={() => setActiveInput('checkIn')}
                  />
                </div>
              </div>
            </button>
          </div>

          {/* Check-out Date */}
          <div className="relative border-t md:border-t-0 md:border-l border-gray-200">
            <button
              onClick={() => setActiveInput('checkOut')}
              className={`w-full text-left px-6 py-4 rounded-full transition-all ${
                activeInput === 'checkOut' ? 'bg-white shadow-lg ring-2 ring-gray-300' : 'hover:bg-gray-100'
              }`}
            >
              <div className="flex items-center gap-3">
                <Calendar size={20} className="text-gray-600 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <label className="block text-xs font-semibold text-gray-900 mb-1">
                    Check out
                  </label>
                  <input
                    type="date"
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="w-full text-sm text-gray-600 bg-transparent border-none outline-none"
                    onFocus={() => setActiveInput('checkOut')}
                  />
                </div>
              </div>
            </button>
          </div>

          {/* Guests */}
          <div className="relative border-t md:border-t-0 md:border-l border-gray-200">
            <button
              onClick={() => setActiveInput('guests')}
              className={`w-full text-left px-6 py-4 rounded-full transition-all ${
                activeInput === 'guests' ? 'bg-white shadow-lg ring-2 ring-gray-300' : 'hover:bg-gray-100'
              }`}
            >
              <div className="flex items-center gap-3">
                <Users size={20} className="text-gray-600 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <label className="block text-xs font-semibold text-gray-900 mb-1">
                    Who
                  </label>
                  <div className="text-sm text-gray-600">
                    {totalGuests > 0 ? `${totalGuests} guest${totalGuests > 1 ? 's' : ''}` : 'Add guests'}
                  </div>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    handleSearch()
                  }}
                  className="bg-airbnb-pink hover:bg-airbnb-pink-dark text-white p-3 rounded-full transition-colors flex-shrink-0"
                  aria-label="Search"
                >
                  <Search size={18} />
                </button>
              </div>
            </button>

            {/* Guests Dropdown */}
            {activeInput === 'guests' && (
              <div className="absolute top-full right-0 mt-2 w-80 bg-white rounded-2xl shadow-2xl border border-gray-200 p-6 z-30">
                <div className="space-y-6">
                  {/* Adults */}
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-gray-900">Adults</div>
                      <div className="text-sm text-gray-500">Ages 13 or above</div>
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => handleGuestChange('adults', -1)}
                        disabled={guests.adults === 0}
                        className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:border-gray-900 disabled:opacity-30 disabled:cursor-not-allowed transition"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="w-8 text-center font-medium">{guests.adults}</span>
                      <button
                        onClick={() => handleGuestChange('adults', 1)}
                        className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:border-gray-900 transition"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                  </div>

                  {/* Children */}
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-gray-900">Children</div>
                      <div className="text-sm text-gray-500">Ages 2–12</div>
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => handleGuestChange('children', -1)}
                        disabled={guests.children === 0}
                        className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:border-gray-900 disabled:opacity-30 disabled:cursor-not-allowed transition"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="w-8 text-center font-medium">{guests.children}</span>
                      <button
                        onClick={() => handleGuestChange('children', 1)}
                        className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:border-gray-900 transition"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                  </div>

                  {/* Infants */}
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-gray-900">Infants</div>
                      <div className="text-sm text-gray-500">Under 2</div>
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => handleGuestChange('infants', -1)}
                        disabled={guests.infants === 0}
                        className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:border-gray-900 disabled:opacity-30 disabled:cursor-not-allowed transition"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="w-8 text-center font-medium">{guests.infants}</span>
                      <button
                        onClick={() => handleGuestChange('infants', 1)}
                        className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:border-gray-900 transition"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Close button */}
                <button
                  onClick={() => setActiveInput(null)}
                  className="mt-6 w-full py-2 text-sm font-semibold text-gray-700 hover:bg-gray-100 rounded-lg transition"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Backdrop */}
      {activeInput && (
        <div
          className="fixed inset-0 bg-black/20 z-10"
          onClick={() => setActiveInput(null)}
        />
      )}
    </div>
  )
}
