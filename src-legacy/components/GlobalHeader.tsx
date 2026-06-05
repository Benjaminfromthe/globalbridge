export function GlobalHeader() {
  return (
    <header className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Super Platform</p>
        <h1 className="mt-2 text-3xl font-semibold text-slate-900 sm:text-4xl">GlobalBridge</h1>
      </div>
      <nav className="flex flex-wrap gap-3 text-sm text-slate-600">
        <span className="rounded-full border border-slate-200 px-3 py-1 hover:bg-slate-100">Marketplace</span>
        <span className="rounded-full border border-slate-200 px-3 py-1 hover:bg-slate-100">Tourism</span>
        <span className="rounded-full border border-slate-200 px-3 py-1 hover:bg-slate-100">Jobs</span>
        <span className="rounded-full border border-slate-200 px-3 py-1 hover:bg-slate-100">Social</span>
      </nav>
    </header>
  )
}
