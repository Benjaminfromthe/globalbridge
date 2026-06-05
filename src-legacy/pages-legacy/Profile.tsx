import { useAuth } from '../context/AuthContext'

export default function Profile() {
  const { user, role, signOut } = useAuth()

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-semibold">Profile</h1>
        <p className="text-slate-600">Your account details and access role.</p>
      </header>

      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="space-y-3 text-slate-800">
          <div>
            <h2 className="text-sm font-semibold text-slate-500">Email</h2>
            <p>{user?.email ?? 'Unknown'}</p>
          </div>
          <div>
            <h2 className="text-sm font-semibold text-slate-500">Role</h2>
            <p>{role}</p>
          </div>
        </div>
        <button
          type="button"
          onClick={() => void signOut()}
          className="mt-6 rounded-2xl bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800"
        >
          Sign out
        </button>
      </div>
    </div>
  )
}
