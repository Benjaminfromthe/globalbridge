import { useState } from 'react'
import type { FormEvent } from 'react'
import Hero from '../components/home/Hero'
import { CheckCircle2, Globe2, HeartHandshake } from 'lucide-react'
import RecommendedSection from '../components/home/RecommendedSection'

export function Home() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleNewsletterSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!email || !email.includes('@')) {
      setStatus('error')
      return
    }

    setStatus('success')
    setEmail('')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <main className="bg-slate-50 text-slate-900">
      <Hero />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-700">Why GlobalBridge</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Rwanda’s platform for discovery, commerce, and careers.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              From sustainable tourism to local marketplaces and professional growth, GlobalBridge makes it easy to engage with Rwanda's thriving ecosystem.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <article className="rounded-4xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-100">
              <h3 className="text-xl font-semibold text-slate-900">Authentic and Local</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Feature-rich tourism experiences, curated by Rwandan hosts and community experts.
              </p>
            </article>
            <article className="rounded-4xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-100">
              <h3 className="text-xl font-semibold text-slate-900">Marketplace Innovation</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Empower local sellers and service providers to reach global travelers and business partners.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            <article className="rounded-4xl border border-slate-200 bg-slate-50 p-8 text-center shadow-sm shadow-slate-100">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-3xl bg-emerald-100 text-emerald-700">
                <Globe2 className="h-7 w-7" />
              </div>
              <p className="mt-6 text-4xl font-bold text-slate-900">500+</p>
              <p className="mt-3 text-sm leading-6 text-slate-600">Local Partners and tourism providers ready for collaboration.</p>
            </article>
            <article className="rounded-4xl border border-slate-200 bg-slate-50 p-8 text-center shadow-sm shadow-slate-100">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-3xl bg-sky-100 text-sky-700">
                <CheckCircle2 className="h-7 w-7" />
              </div>
              <p className="mt-6 text-4xl font-bold text-slate-900">100%</p>
              <p className="mt-3 text-sm leading-6 text-slate-600">Rwandan-owned services and marketplace listings.</p>
            </article>
            <article className="rounded-4xl border border-slate-200 bg-slate-50 p-8 text-center shadow-sm shadow-slate-100">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-3xl bg-violet-100 text-violet-700">
                <HeartHandshake className="h-7 w-7" />
              </div>
              <p className="mt-6 text-4xl font-bold text-slate-900">24/7</p>
              <p className="mt-3 text-sm leading-6 text-slate-600">Support for travelers, partners, and professionals across the region.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.98fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Built for conversion</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Start building your Rwanda launch mailing list today.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Capture interest early with a simple newsletter form, then measure conversion from visitor to signup.
            </p>
          </div>

          <div className="rounded-4xl border border-slate-200 bg-slate-50 p-8 shadow-sm shadow-slate-100">
            <form onSubmit={handleNewsletterSubmit} className="space-y-5">
              <label className="block text-sm font-semibold text-slate-900" htmlFor="email">
                Join the waitlist
              </label>
              <div className="grid gap-4 sm:grid-cols-[1fr_auto]">
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="you@example.com"
                  className="min-h-[52px] w-full rounded-3xl border border-slate-300 bg-white px-4 text-sm text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                  aria-label="Email address"
                />
                <button
                  type="submit"
                  className="inline-flex min-h-[52px] items-center justify-center rounded-3xl bg-emerald-700 px-6 text-sm font-semibold text-white transition hover:bg-emerald-600"
                >
                  Subscribe
                </button>
              </div>
              {status === 'success' && (
                <p className="text-sm text-emerald-700">Thanks! You are on the waitlist.</p>
              )}
              {status === 'error' && (
                <p className="text-sm text-rose-700">Please enter a valid email address.</p>
              )}
            </form>
          </div>
        </div>
      </section>

      <RecommendedSection />
    </main>
  )
}

export default Home
