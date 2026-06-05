import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { supabase } from '../lib/supabase'

export default function Register() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const navigate = useNavigate()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    if (!email || password.length < 6) {
      setError('Provide a valid email and password (min 6 chars)')
      return
    }
    setLoading(true)
    try {
      if (!supabase) {
        setError('Authentication is not configured.')
        return
      }
      const res = await supabase.auth.signUp({ email, password })
      if (res.error) {
        setError(res.error.message)
      } else {
        navigate('/dashboard')
      }
    } catch (err) {
      setError('Unexpected error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="mx-auto max-w-md">
      <h2 className="mb-4 text-2xl font-semibold">Create account</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {error && <div className="rounded-md bg-red-50 p-2 text-red-700">{error}</div>}
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" className="w-full rounded-md border border-slate-200 px-3 py-2" />
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password (min 6 chars)" className="w-full rounded-md border border-slate-200 px-3 py-2" />
        <div className="flex items-center justify-between">
          <button type="submit" disabled={loading} className="rounded-md bg-blue-600 px-4 py-2 text-white">
            {loading ? 'Creating...' : 'Create account'}
          </button>
          <Link to="/login" className="text-sm text-slate-600 hover:underline">Sign in</Link>
        </div>
      </form>
    </div>
  )
}
