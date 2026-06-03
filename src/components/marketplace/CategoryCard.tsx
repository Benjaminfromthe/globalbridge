import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'

type Props = {
  title: string
  icon?: ReactNode
  path?: string
}

export default function CategoryCard({ title, icon, path = '#' }: Props) {
  return (
    <Link to={path} className="block rounded-xl border border-slate-200 bg-white p-4 hover:shadow-lg hover:translate-y-[-2px] transition-transform">
      <div className="flex items-center gap-3">
        <div className="rounded-md bg-blue-600 p-2 text-white">{icon}</div>
        <div>
          <h3 className="text-sm font-semibold text-slate-900">{title}</h3>
        </div>
      </div>
    </Link>
  )
}
