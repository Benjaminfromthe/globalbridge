import type { MouseEventHandler } from 'react'

type Props = {
  id: string
  title: string
  company: string
  salary: string
  location: string
  imageUrl?: string
  type?: string
  onApply?: MouseEventHandler<HTMLButtonElement>
}

export default function JobCard({ id, title, company, salary, location, imageUrl, type = 'Full-time', onApply }: Props) {
  return (
    <div className="flex w-full flex-col gap-3 rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
      {imageUrl ? (
        <img src={imageUrl} alt={title} className="h-48 w-full rounded-xl object-cover" />
      ) : (
        <div className="h-48 w-full rounded-xl bg-slate-100" />
      )}

      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
          <div className="mt-1 text-sm text-slate-600">{company} · <span className="font-medium text-slate-800">{type}</span></div>
        </div>
        <div className="text-right">
          <div className="text-sm text-slate-600">{location}</div>
          <div className="mt-1 text-sm font-medium text-slate-900">{salary}</div>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="text-sm text-slate-600">ID: {id}</div>
        <button
          onClick={onApply}
          className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
        >
          Apply Now
        </button>
      </div>
    </div>
  )
}
