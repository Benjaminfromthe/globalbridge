import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'
import ImageWithFallback from '../ImageWithFallback'

type Props = {
  title: string
  icon?: ReactNode
  path?: string
  imageUrl?: string
}

export default function CategoryCard({ title, icon, path = '#', imageUrl }: Props) {
  return (
    <Link to={path} className="block overflow-hidden rounded-xl border border-slate-200 bg-white hover:shadow-lg hover:translate-y-[-2px] transition-transform">
      <div className="overflow-hidden">
        <ImageWithFallback
          src={imageUrl}
          alt={title}
          className="w-full h-48 object-cover"
          fallbackSrc="/assets/placeholder-image.jpg"
        />
      </div>
      <div className="p-4">
        <div className="flex items-center gap-3">
          <div className="rounded-md bg-blue-600 p-2 text-white">{icon}</div>
          <div>
            <h3 className="text-sm font-semibold text-slate-900">{title}</h3>
          </div>
        </div>
      </div>
    </Link>
  )
}
