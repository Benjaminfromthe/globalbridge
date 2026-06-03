import { useState } from 'react'

type Country = {
  code: string
  name: string
  description?: string
}

const defaultCountries: Country[] = [
  { code: 'rw', name: 'Rwanda', description: 'Gorillas, coffee, and cultural heritage.' },
  { code: 'ke', name: 'Kenya', description: 'Savannah safaris and coastlines.' },
  { code: 'tz', name: 'Tanzania', description: 'Mount Kilimanjaro and islands.' },
]

export default function CountryDiscovery() {
  const [following, setFollowing] = useState<Record<string, boolean>>({ rw: true })

  function toggle(code: string) {
    setFollowing((s) => ({ ...s, [code]: !s[code] }))
  }

  return (
    <aside className="space-y-4">
      <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
        <h4 className="text-sm font-semibold">Discover Countries</h4>
        <p className="mt-1 text-xs text-slate-500">Follow destinations to personalize your feed.</p>
        <div className="mt-3 space-y-3">
          {defaultCountries.map((c) => (
            <div key={c.code} className="flex items-center justify-between gap-3">
              <div>
                <div className="text-sm font-medium text-slate-900">{c.name}</div>
                <div className="text-xs text-slate-500">{c.description}</div>
              </div>
              <button
                onClick={() => toggle(c.code)}
                className={`rounded-md px-3 py-1 text-sm font-medium ${following[c.code] ? 'bg-slate-900 text-white' : 'border border-slate-200 bg-white text-slate-700'}`}
              >
                {following[c.code] ? 'Following' : 'Follow'}
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
        <h5 className="text-sm font-semibold">Explore</h5>
        <p className="mt-2 text-xs text-slate-500">Trending cultural stories and destinations.</p>
      </div>
    </aside>
  )
}
