import Hero from '@/components/Hero'
import SearchBar from '@/components/SearchBar'
import PropertyGrid from '@/components/PropertyGrid'
import Footer from '@/components/Footer'
import { mockProperties } from '@/data/mockProperties'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with gradient background and inspiring message */}
      <Hero />
      
      {/* Search Bar positioned to overlap hero section */}
      <SearchBar />

      {/* Properties Grid - Display all available properties */}
      <PropertyGrid 
        properties={mockProperties}
        title="Explore amazing places"
        description="Discover unique stays handpicked for you"
      />

      {/* Footer */}
      <Footer />
    </div>
  )
}
