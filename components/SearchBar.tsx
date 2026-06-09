'use client'

import { useState } from 'react'
import { Search, MapPin, Calendar, Users, Minus, Plus } from 'lucide-react'
import type { SearchParams, GuestCount } from '@/types/search'

interface SearchBarProps {
  onSearch?: (params: SearchParams) => void
  className?: string
}

export default function SearchBar({ onSearch, className = '' }: SearchBarProps) {
  const [activeInput, setActiveInput] = useState<string | null>(null)
  const [location, setLocation] = useState('')
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [guests, setGuests] = useState<GuestCount>({
    adults: 0,
    children: 0,
    infants: 0,
  })

  const totalGuests = guests.adults + guests.children + guests.infants

  const handleGuestChange = (type: keyof GuestCount, delta: number) => {
    setGuests(prev => ({
      ...prev,
      [type]: Math.max(0, (prev[type] || 0) + delta),
    }))
  }

  const handleSearch = () => {
    const searchParams: SearchParams = {
      location,
      checkIn,
      checkOut,
      guests,
    }
    
    if (onSearch) {
      onSearch(searchParams)
    } else {
      console.log('Search params:', searchParams)
    }
  }

  // Close dropdown when clicking outside
  const handleBackdropClick = () => {
    setActiveInput(null)
  }

  return (
    <>
      <div className={`relative w-full max-w-5xl ${className}`}>
        <div className="bg-white rounded-full shadow-2xl border border-gray-200 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
            {/* Location Input */}
            <div className="relative">
              <button
                onClick={() => setActiveInput('location')}
                className={`w-full text-left px-6 py-4 md:rounded-l-full transition-all ${
                  activeInput === 'location' ? 'bg-white shadow-lg ring-2 ring-gray-300' : 'hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <MapPin size={20} className="text-gray-500 flex-shrink-0" />
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
                      onClick={(e) => e.stopPropagation()}
                    />
                  </div>
                </div>
              </button>
            </div>

            {/* Check-in Date */}
            <div className="relative border-t md:border-t-0 md:border-l border-gray-200">
              <button
                onClick={() => setActiveInput('checkIn')}
                className={`w-full text-left px-6 py-4 transition-all ${
                  activeInput === 'checkIn' ? 'bg-white shadow-lg ring-2 ring-gray-300' : 'hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Calendar size={20} className="text-gray-500 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <label className="block text-xs font-semibold text-gray-900 mb-1">
                      Check in
                    </label>
                    <input
                      type="date"
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                      placeholder="Add dates"
                      className="w-full text-sm text-gray-600 bg-transparent border-none outline-none cursor-pointer"
                      onFocus={() => setActiveInput('checkIn')}
                      onClick={(e) => e.stopPropagation()}
                    />
                  </div>
                </div>
              </button>
            </div>

            {/* Check-out Date */}
            <div className="relative border-t md:border-t-0 md:border-l border-gray-200">
              <button
                onClick={() => setActiveInput('checkOut')}
                className={`w-full text-left px-6 py-4 transition-all ${
                  activeInput === 'checkOut' ? 'bg-white shadow-lg ring-2 ring-gray-300' : 'hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Calendar size={20} className="text-gray-500 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <label className="block text-xs font-semibold text-gray-900 mb-1">
                      Check out
                    </label>
                    <input
                      type="date"
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                      placeholder="Add dates"
                      className="w-full text-sm text-gray-600 bg-transparent border-none outline-none cursor-pointer"
                      onFocus={() => setActiveInput('checkOut')}
                      onClick={(e) => e.stopPropagation()}
                      min={checkIn}
                    />
                  </div>
                </div>
              </button>
            </div>

            {/* Guests Selector */}
            <div className="relative border-t md:border-t-0 md:border-l border-gray-200">
              <button
                onClick={() => setActiveInput(activeInput === 'guests' ? null : 'guests')}
                className={`w-full text-left px-6 py-4 md:rounded-r-full transition-all ${
                  activeInput === 'guests' ? 'bg-white shadow-lg ring-2 ring-gray-300' : 'hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Users size={20} className="text-gray-500 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <label className="block text-xs font-semibold text-gray-900 mb-1">
                      Who
                    </label>
                    <div className="text-sm text-gray-600 truncate">
                      {totalGuests > 0 ? `${totalGuests} guest${totalGuests > 1 ? 's' : ''}` : 'Add guests'}
                    </div>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      handleSearch()
                    }}
                    className="bg-airbnb-pink hover:bg-airbnb-pink-dark text-white p-3 rounded-full transition-all hover:scale-105 flex-shrink-0"
                    aria-label="Search"
                  >
                    <Search size={18} />
                  </button>
                </div>
              </button>

              {/* Guests Dropdown */}
              {activeInput === 'guests' && (
                <div 
                  className="absolute top-full right-0 mt-3 w-96 bg-white rounded-3xl shadow-2xl border border-gray-200 p-8 z-50"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="space-y-8">
                    {/* Adults */}
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-gray-900 text-base">Adults</div>
                        <div className="text-sm text-gray-500 mt-1">Ages 13 or above</div>
                      </div>
                      <div className="flex items-center gap-4">
                        <button
                          onClick={() => handleGuestChange('adults', -1)}
                          disabled={guests.adults === 0}
                          className="w-9 h-9 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-gray-900 disabled:opacity-25 disabled:cursor-not-allowed disabled:hover:border-gray-300 transition-all"
                          aria-label="Decrease adults"
                        >
                          <Minus size={16} className="text-gray-700" />
                        </button>
                        <span className="w-10 text-center font-medium text-gray-900">{guests.adults}</span>
                        <button
                          onClick={() => handleGuestChange('adults', 1)}
                          className="w-9 h-9 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-gray-900 transition-all"
                          aria-label="Increase adults"
                        >
                          <Plus size={16} className="text-gray-700" />
                        </button>
                      </div>
                    </div>

                    {/* Children */}
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-gray-900 text-base">Children</div>
                        <div className="text-sm text-gray-500 mt-1">Ages 2–12</div>
                      </div>
                      <div className="flex items-center gap-4">
                        <button
                          onClick={() => handleGuestChange('children', -1)}
                          disabled={guests.children === 0}
                          className="w-9 h-9 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-gray-900 disabled:opacity-25 disabled:cursor-not-allowed disabled:hover:border-gray-300 transition-all"
                          aria-label="Decrease children"
                        >
                          <Minus size={16} className="text-gray-700" />
                        </button>
                        <span className="w-10 text-center font-medium text-gray-900">{guests.children}</span>
                        <button
                          onClick={() => handleGuestChange('children', 1)}
                          className="w-9 h-9 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-gray-900 transition-all"
                          aria-label="Increase children"
                        >
                          <Plus size={16} className="text-gray-700" />
                        </button>
                      </div>
                    </div>

                    {/* Infants */}
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-gray-900 text-base">Infants</div>
                        <div className="text-sm text-gray-500 mt-1">Under 2</div>
                      </div>
                      <div className="flex items-center gap-4">
                        <button
                          onClick={() => handleGuestChange('infants', -1)}
                          disabled={guests.infants === 0}
                          className="w-9 h-9 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-gray-900 disabled:opacity-25 disabled:cursor-not-allowed disabled:hover:border-gray-300 transition-all"
                          aria-label="Decrease infants"
                        >
                          <Minus size={16} className="text-gray-700" />
                        </button>
                        <span className="w-10 text-center font-medium text-gray-900">{guests.infants}</span>
                        <button
                          onClick={() => handleGuestChange('infants', 1)}
                          className="w-9 h-9 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-gray-900 transition-all"
                          aria-label="Increase infants"
                        >
                          <Plus size={16} className="text-gray-700" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Close button */}
                  <button
                    onClick={() => setActiveInput(null)}
                    className="mt-8 w-full py-3 text-sm font-semibold text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    Close
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Backdrop Overlay */}
      {activeInput && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
          onClick={handleBackdropClick}
        />
      )}
    </>
  )
}
