type Props = {
  title: string
  value: string | number
  subtitle?: string
}

export default function MetricCard({ title, value, subtitle }: Props) {
  return (
    <div className="rounded-lg bg-slate-800 p-4 text-white shadow-sm">
      <div className="text-xs font-medium text-slate-300">{title}</div>
      <div className="mt-2 text-2xl font-semibold">{value}</div>
      {subtitle && <div className="mt-1 text-sm text-slate-400">{subtitle}</div>}
    </div>
  )
}
