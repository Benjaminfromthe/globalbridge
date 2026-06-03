// React 17+ automatic JSX runtime is used; no direct React import needed
import { useAuth } from '../../context/AuthContext'
import { recommendForUser } from '../../services/recommendationEngine'

export default function RecommendedSection() {
  const { interests } = useAuth()
  const items = recommendForUser(interests, 6)

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <header className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Recommended for you</h2>
        <p className="text-sm text-slate-600">Personalized suggestions to help you discover Rwanda</p>
      </header>

      {items.length === 0 ? (
        <div className="rounded-2xl border border-slate-200 bg-white p-6">No recommendations yet.</div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <article key={it.id} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              {it.image && <img src={it.image} alt={it.title} className="h-40 w-full rounded-md object-cover" />}
              <div className="mt-3">
                <h3 className="text-sm font-semibold text-slate-900">{it.title}</h3>
                <p className="mt-1 text-xs text-slate-500">{it.type.toUpperCase()} • {it.snippet}</p>
                <a href={it.href} className="mt-3 inline-block text-sm text-emerald-700 hover:underline">View</a>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  )
}
