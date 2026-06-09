import { Star, Heart } from 'lucide-react'
import Image from 'next/image'

interface Property {
  id: number
  title: string
  type: string
  location: string
  price: number
  rating: number
  image: string
  isSuperhost: boolean
}

export default function PropertyCard({ property }: { property: Property }) {
  return (
    <div className="group cursor-pointer">
      <div className="relative aspect-square rounded-xl overflow-hidden mb-3">
        <Image
          src={property.image}
          alt={property.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <button className="absolute top-3 right-3 p-2 hover:scale-110 transition-transform">
          <Heart className="w-6 h-6 text-white fill-black/30 hover:fill-white/80" />
        </button>
        {property.isSuperhost && (
          <div className="absolute top-3 left-3 bg-white px-3 py-1 rounded-full text-xs font-semibold shadow-md">
            Superhost
          </div>
        )}
      </div>
      
      <div className="space-y-1">
        <div className="flex items-start justify-between">
          <h3 className="font-semibold text-gray-900 truncate flex-1">
            {property.location}
          </h3>
          <div className="flex items-center gap-1 ml-2">
            <Star className="w-4 h-4 fill-current" />
            <span className="text-sm font-semibold">{property.rating}</span>
          </div>
        </div>
        
        <p className="text-sm text-gray-600 truncate">{property.title}</p>
        <p className="text-sm text-gray-500">{property.type}</p>
        
        <div className="pt-1">
          <span className="font-semibold">${property.price}</span>
          <span className="text-gray-600"> night</span>
        </div>
      </div>
    </div>
  )
}