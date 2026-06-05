import { Link, Outlet, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

export default function DashboardLayout() {
  const { signOut } = useAuth()
  const navigate = useNavigate()

  async function handleSignOut() {
    await signOut()
    navigate('/')
  }

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      <div className="flex">
        <aside className="w-64 border-r border-slate-800 p-6">
          <div className="mb-6 flex items-center justify-between gap-2 text-lg font-semibold">
            <span>Intelligence</span>
            <button
              type="button"
              onClick={handleSignOut}
              className="rounded-md bg-slate-700 px-2 py-1 text-sm hover:bg-slate-600"
            >
              Sign out
            </button>
          </div>
          <nav className="flex flex-col gap-2">
            <Link to="/dashboard" className="rounded-md px-3 py-2 hover:bg-slate-800">Overview</Link>
            <Link to="/dashboard/users" className="rounded-md px-3 py-2 hover:bg-slate-800">Users</Link>
            <Link to="/dashboard/trade" className="rounded-md px-3 py-2 hover:bg-slate-800">Trade</Link>
            <Link to="/dashboard/tourism" className="rounded-md px-3 py-2 hover:bg-slate-800">Tourism</Link>
            <Link to="/" className="mt-6 rounded-md bg-blue-600 px-3 py-2 text-center font-medium">Return to Platform</Link>
          </nav>
        </aside>

        <main className="flex-1 p-8">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
