import { useEffect, useMemo, useState } from 'react'
import type { FormEvent } from 'react'
import { useQuery } from '@tanstack/react-query'
import JobCard from '../components/jobs/JobCard'
import { jobs as mockJobs, type Job } from '../data/jobs'

type PostedJob = Job & { createdAt: string }

function fetchJobs() {
  return new Promise<Job[]>((resolve) => setTimeout(() => resolve(mockJobs), 400))
}

const getStoredJobs = () => {
  if (typeof window === 'undefined') return [] as PostedJob[]
  const stored = window.localStorage.getItem('postedJobs')
  return stored ? (JSON.parse(stored) as PostedJob[]) : []
}

export default function Jobs() {
  const { data, isLoading, isError } = useQuery({ queryKey: ['jobs'], queryFn: fetchJobs })
  const [query, setQuery] = useState('')
  const [roleFilter, setRoleFilter] = useState<'All' | Job['roleType']>('All')
  const [postedJobs, setPostedJobs] = useState<PostedJob[]>(getStoredJobs())
  const [title, setTitle] = useState('')
  const [company, setCompany] = useState('')
  const [location, setLocation] = useState('')
  const [salaryRange, setSalaryRange] = useState('')
  const [roleType, setRoleType] = useState<Job['roleType']>('Full-time')
  const [successMessage, setSuccessMessage] = useState<string | null>(null)

  useEffect(() => {
    setPostedJobs(getStoredJobs())
  }, [])

  const filtered = useMemo(() => {
    if (!data) return []
    return data.filter((j) => {
      const matchesQuery = j.title.toLowerCase().includes(query.trim().toLowerCase())
      const matchesRole = roleFilter === 'All' ? true : j.roleType === roleFilter
      return matchesQuery && matchesRole
    })
  }, [data, query, roleFilter])

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const newJob: PostedJob = {
      id: `job-${Date.now()}`,
      title,
      company,
      location,
      salaryRange,
      roleType,
      createdAt: new Date().toISOString(),
    }

    const nextJobs = [newJob, ...postedJobs]
    setPostedJobs(nextJobs)
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('postedJobs', JSON.stringify(nextJobs))
    }
    setTitle('')
    setCompany('')
    setLocation('')
    setSalaryRange('')
    setRoleType('Full-time')
    setSuccessMessage('Your job request has been posted successfully.')
  }

  if (isLoading) {
    return <div className="space-y-3">{Array.from({ length: 4 }).map((_, i) => (
      <div key={i} className="h-28 animate-pulse rounded-lg bg-slate-100" />
    ))}</div>
  }

  if (isError) {
    return <div className="text-red-600">Failed to load jobs.</div>
  }

  return (
    <div className="space-y-10">
      <section>
        <header>
          <h2 className="text-2xl font-semibold">Jobs & Gigs</h2>
          <p className="text-slate-600">Discover roles in tourism, translation, and logistics.</p>
        </header>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex w-full items-center gap-2">
            <label htmlFor="search-jobs" className="sr-only">Search jobs by title</label>
            <input
              id="search-jobs"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search jobs by title..."
              className="w-full rounded-md border border-slate-200 bg-white px-3 py-2 shadow-sm focus:outline-none"
            />
          </div>

          <div className="mt-2 sm:mt-0">
            <label htmlFor="filter-role" className="sr-only">Filter by role type</label>
            <select
              id="filter-role"
              value={roleFilter}
              onChange={(e) => setRoleFilter(e.target.value as any)}
              className="rounded-md border border-slate-200 bg-white px-3 py-2 shadow-sm"
            >
              <option value="All">All Role Types</option>
              <option value="Full-time">Full-time</option>
              <option value="Gig">Gig</option>
              <option value="Contract">Contract</option>
            </select>
          </div>
        </div>

        <div className="space-y-4">
          {filtered.length === 0 ? (
            <div className="text-slate-600">No jobs match your search.</div>
          ) : (
            filtered.map((j) => (
              <JobCard
                key={j.id}
                id={j.id}
                title={j.title}
                company={j.company}
                salary={j.salaryRange}
                location={j.location}
                imageUrl={j.imageUrl}
                type={j.roleType}
                onApply={() => alert(`Apply flow placeholder for ${j.title}`)}
              />
            ))
          )}
        </div>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <header>
          <h3 className="text-xl font-semibold">Post a new job request</h3>
          <p className="mt-2 text-sm text-slate-600">Share your hiring brief with the GlobalBridge community.</p>
        </header>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          {successMessage && <div className="rounded-xl bg-emerald-50 p-3 text-sm text-emerald-700">{successMessage}</div>}

          <div className="grid gap-4 sm:grid-cols-2">
            <label htmlFor="job-title" className="block text-sm font-medium text-slate-700">
              Role title
            </label>
            <input
              id="job-title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900"
            />
            <label htmlFor="job-company" className="block text-sm font-medium text-slate-700">
              Company
            </label>
            <input
              id="job-company"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              required
              className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900"
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <label htmlFor="job-location" className="block text-sm font-medium text-slate-700">
              Location
            </label>
            <input
              id="job-location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
              className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900"
            />
            <label htmlFor="job-salary" className="block text-sm font-medium text-slate-700">
              Salary range
            </label>
            <input
              id="job-salary"
              value={salaryRange}
              onChange={(e) => setSalaryRange(e.target.value)}
              required
              className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900"
            />
            <label htmlFor="job-role-type" className="block text-sm font-medium text-slate-700">
              Role type
            </label>
            <select
              id="job-role-type"
              value={roleType}
              onChange={(e) => setRoleType(e.target.value as Job['roleType'])}
              className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900"
            >
              <option value="Full-time">Full-time</option>
              <option value="Gig">Gig</option>
              <option value="Contract">Contract</option>
            </select>
          </div>

          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-2xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700"
          >
            Post job request
          </button>
        </form>
      </section>

      {postedJobs.length > 0 && (
        <section className="space-y-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <header>
            <h3 className="text-xl font-semibold">Your recent job requests</h3>
            <p className="mt-1 text-sm text-slate-600">These requests are stored locally for your launch workflow.</p>
          </header>
          <div className="grid gap-4">
            {postedJobs.map((job) => (
              <article key={job.id} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{job.title}</p>
                    <p className="text-sm text-slate-600">{job.company}</p>
                  </div>
                  <span className="rounded-full bg-slate-200 px-3 py-1 text-xs font-medium text-slate-700">{job.roleType}</span>
                </div>
                <div className="mt-3 flex flex-wrap gap-4 text-sm text-slate-600">
                  <span>{job.location}</span>
                  <span>{job.salaryRange}</span>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
