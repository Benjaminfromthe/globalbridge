import { useEffect, useState } from 'react'
import MetricCard from '../components/dashboard/MetricCard'
import { generateMonthlyData } from '../data/analytics'
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import type { Job } from '../data/jobs'
import RecommendedSection from '../components/home/RecommendedSection'

export default function Dashboard() {
  const [postedJobs, setPostedJobs] = useState<Job[]>([])
  const metrics = {
    users: '12,430',
    gmv: '$1,240,300',
    trade: '€890,120',
    jobs: '1,230',
  }

  const data = generateMonthlyData(12)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const stored = window.localStorage.getItem('postedJobs')
    if (stored) {
      setPostedJobs(JSON.parse(stored) as Job[])
    }
  }, [])

  return (
    <div className="space-y-6">
      <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-white">Intelligence Dashboard</h1>
          <p className="mt-2 text-sm text-slate-300">Performance, demand, and launch activity in one view.</p>
        </div>
        <div className="text-sm text-slate-300">Last updated: {new Date().toLocaleString()}</div>
      </header>

      <RecommendedSection />

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard title="Total Active Users" value={metrics.users} />
        <MetricCard title="Tourism Revenue (GMV)" value={metrics.gmv} />
        <MetricCard title="Trade Volume" value={metrics.trade} />
        <MetricCard title="Job Opportunities Posted" value={metrics.jobs} />
      </section>

      <section className="rounded-lg bg-slate-800 p-4">
        <h3 className="mb-2 text-white">Growth Trends</h3>
        <div style={{ width: '100%', height: 320 }}>
          <ResponsiveContainer>
            <LineChart data={data}>
              <XAxis dataKey="month" stroke="#9CA3AF" />
              <YAxis stroke="#9CA3AF" />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="tourism" stroke="#38BDF8" strokeWidth={2} />
              <Line type="monotone" dataKey="trade" stroke="#60A5FA" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-700 bg-slate-950 p-6">
        <h3 className="text-xl font-semibold text-white">Activity Summary</h3>
        <p className="mt-2 text-sm text-slate-400">Your recent job requests and platform activity are displayed here for launch readiness.</p>

        {postedJobs.length === 0 ? (
          <div className="mt-4 rounded-2xl bg-slate-900 p-4 text-slate-300">No job requests have been posted yet.</div>
        ) : (
          <div className="mt-4 space-y-3">
            <div className="text-sm text-slate-400">You have posted {postedJobs.length} job request{postedJobs.length > 1 ? 's' : ''}.</div>
            {postedJobs.map((job) => (
              <div key={job.id} className="rounded-2xl border border-slate-700 bg-slate-900 p-4">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="font-semibold text-white">{job.title}</p>
                    <p className="text-sm text-slate-400">{job.company} · {job.location}</p>
                  </div>
                  <span className="rounded-full bg-slate-700 px-3 py-1 text-xs uppercase tracking-[0.08em] text-slate-300">{job.roleType}</span>
                </div>
                <p className="mt-3 text-sm text-slate-400">Salary range: {job.salaryRange}</p>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  )
}
