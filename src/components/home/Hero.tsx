import { Link } from 'react-router-dom'
import { Compass, Rocket, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section className="overflow-hidden bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-emerald-200 via-white to-sky-100 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="inline-flex items-center rounded-full border border-emerald-300 bg-white/80 px-4 py-1 text-sm font-semibold text-emerald-700 shadow-sm shadow-emerald-100">
              Rwanda launch · Trusted by local founders
            </p>
            <h1 className="mt-8 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Discover Rwanda, Expand Your World
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
              GlobalBridge connects tourists, local businesses, and professionals with authentic experiences, marketplace growth,
              and career opportunities across Rwanda.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                to="/marketplace"
                className="inline-flex items-center justify-center rounded-full bg-emerald-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-200 transition hover:bg-emerald-600"
              >
                Explore Marketplace
              </Link>
              <Link
                to="/register"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
              >
                Get Started
              </Link>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <div className="rounded-4xl border border-slate-200 bg-white/90 p-6 shadow-lg shadow-slate-100">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700">
                <Compass className="h-6 w-6" />
              </div>
              <h2 className="mt-5 text-xl font-semibold text-slate-900">Authentic Tourism</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Curated local experiences, cultural tours, and adventure itineraries designed for modern travellers.
              </p>
            </div>
            <div className="rounded-4xl border border-slate-200 bg-white/90 p-6 shadow-lg shadow-slate-100">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 text-sky-700">
                <Sparkles className="h-6 w-6" />
              </div>
              <h2 className="mt-5 text-xl font-semibold text-slate-900">Local Marketplace</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Discover handcrafted goods, tourism services, and business support from 100% Rwandan-owned partners.
              </p>
            </div>
            <div className="rounded-4xl border border-slate-200 bg-white/90 p-6 shadow-lg shadow-slate-100">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-50 text-violet-700">
                <Rocket className="h-6 w-6" />
              </div>
              <h2 className="mt-5 text-xl font-semibold text-slate-900">Professional Opportunities</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Connect talent, projects, and partners with Rwanda’s growth economy through trusted career and networking paths.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
