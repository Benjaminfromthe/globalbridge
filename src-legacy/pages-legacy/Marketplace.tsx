import { useQuery } from '@tanstack/react-query'
import CategoryCard from '../components/marketplace/CategoryCard'
import ImageWithFallback from '../components/ImageWithFallback'
import { products as mockProducts } from '../data/products'
import { ShoppingCart } from 'lucide-react'

function fetchProducts() {
  // simulate network latency
  return new Promise<typeof mockProducts>((resolve) => {
    setTimeout(() => resolve(mockProducts), 600)
  })
}

export default function Marketplace() {
  const { data, isLoading, isError } = useQuery({ queryKey: ['products'], queryFn: fetchProducts })

  if (isLoading) {
    return <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{Array.from({ length: 6 }).map((_, i) => (
      <div key={i} className="h-40 animate-pulse rounded-xl bg-slate-100" />
    ))}</div>
  }

  if (isError || !data) {
    return <div className="text-red-600">Failed to load products.</div>
  }

  const categories = Array.from(new Set(data.map((p) => p.category)))

  return (
    <div className="space-y-6">
      <header>
        <h2 className="text-2xl font-semibold">Marketplace</h2>
        <p className="text-slate-600">Featured Rwandan products</p>
      </header>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((c) => (
          <CategoryCard key={c} title={c} icon={<ShoppingCart size={16} />} path={`#category-${c}`} />
        ))}
      </div>

      <div>
        <h3 className="text-lg font-semibold">Products</h3>
        <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {data.map((p) => (
            <article key={p.id} className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md">
              <ImageWithFallback src={p.imageUrl} alt={p.name} className="h-44 w-full object-cover" />
              <div className="p-4">
                <h4 className="text-sm font-semibold text-slate-900">{p.name}</h4>
                <div className="mt-2 flex items-center justify-between">
                  <div className="text-slate-600 text-sm">{p.category}</div>
                  <div className="text-sm font-medium text-slate-900">${p.price.toFixed(2)}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
