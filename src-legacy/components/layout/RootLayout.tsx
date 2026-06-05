import { Link, Outlet } from 'react-router-dom'
import { Home as HomeIcon, ShoppingCart, MapPin, Briefcase } from 'lucide-react'

export default function RootLayout() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-900 dark:text-slate-100">
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/75 backdrop-blur-sm dark:bg-slate-900/75 dark:border-slate-800">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
          <Link to="/" className="flex items-center gap-3">
            <div className="rounded-md bg-blue-600 p-2 text-white">
              <HomeIcon size={18} />
            </div>
            <span className="font-semibold">GlobalBridge</span>
          </Link>

          <nav className="flex flex-wrap items-center gap-2">
            <Link to="/" className="flex items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-800">
              <HomeIcon size={16} />
              <span>Home</span>
            </Link>
            <Link to="/marketplace" className="flex items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-800">
              <ShoppingCart size={16} />
              <span>Marketplace</span>
            </Link>
            <Link to="/tourism" className="flex items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-800">
              <MapPin size={16} />
              <span>Tourism</span>
            </Link>
            <Link to="/jobs" className="flex items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-800">
              <Briefcase size={16} />
              <span>Jobs</span>
            </Link>
            <Link to="/login" className="ml-auto rounded-md border border-slate-200 px-3 py-2 text-sm hover:bg-slate-100 dark:border-slate-800 dark:hover:bg-slate-800">
              Sign in
            </Link>
            <Link to="/register" className="rounded-md bg-blue-600 px-3 py-2 text-sm text-white hover:bg-blue-700">
              Register
            </Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-8">
        <Outlet />
      </main>

      <footer className="border-t border-slate-200 bg-white/50 dark:bg-slate-900/50 dark:border-slate-800">
        <div className="mx-auto max-w-6xl px-4 py-6 text-sm text-slate-600 dark:text-slate-300 flex flex-wrap justify-between">
          <div>© {new Date().getFullYear()} GlobalBridge</div>
          <div className="flex gap-4">
            <a href="#" className="hover:underline">About</a>
            <a href="#" className="hover:underline">Partners</a>
            <a href="#" className="hover:underline">Careers</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
