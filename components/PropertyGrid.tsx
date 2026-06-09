import PropertyCard from './PropertyCard'
import { Property } from '@/data/mockProperties'

interface PropertyGridProps {
  properties: Property[]
  title?: string
  description?: string
}

export default function PropertyGrid({ 
  properties, 
  title = "Explore nearby stays",
  description = "Discover amazing places to stay"
}: PropertyGridProps) {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="mb-8">
        <h2 className="text-3xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </section>
  )
}
