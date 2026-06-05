import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { supabase } from '../lib/supabase'
import type { User } from '@supabase/supabase-js'

type Credentials = {
  email: string
  password: string
}

type AuthContextValue = {
  user: User | null
  role: string
  loading: boolean
  interests: string[]
  setInterests: (next: string[]) => void
  signIn: (credentials: Credentials) => Promise<{ error: string | null }>
  signUp: (credentials: Credentials) => Promise<{ error: string | null }>
  signOut: () => Promise<void>
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [interests, setInterestsState] = useState<string[]>([])
  const [loading, setLoading] = useState(true)
  const useMockAuth = !import.meta.env.VITE_SUPABASE_URL || !import.meta.env.VITE_SUPABASE_ANON_KEY || import.meta.env.VITE_MOCK_AUTH === 'true'

  function createMockUser(email: string): User {
    return {
      id: email,
      app_metadata: { role: 'user' },
      user_metadata: {},
      aud: 'authenticated',
      created_at: new Date().toISOString(),
      email,
    } as User
  }

  useEffect(() => {
    if (useMockAuth) {
      const storedEmail = typeof window !== 'undefined' ? window.localStorage.getItem('mock_auth_email') : null
      if (storedEmail) {
        setUser(createMockUser(storedEmail))
        // load mock interests if present
        try {
          const mi = typeof window !== 'undefined' ? window.localStorage.getItem('user_interests') : null
          if (mi) setInterestsState(JSON.parse(mi))
        } catch (e) {
          /* ignore */
        }
      }
      setLoading(false)
      return
    }

    if (!supabase) {
      console.warn('Supabase is not configured. Falling back to mock auth mode.')
      setLoading(false)
      return
    }

    const authClient = supabase
    let mounted = true

    async function loadSession() {
      const { data } = await authClient.auth.getSession()
      if (!mounted) return
      const u = data.session?.user ?? null
      setUser(u)
      // hydrate interests from user metadata if present
      try {
        const meta = (u as any)?.user_metadata?.interests
        if (meta && Array.isArray(meta)) setInterestsState(meta)
        else {
          const stored = typeof window !== 'undefined' ? window.localStorage.getItem('user_interests') : null
          if (stored) setInterestsState(JSON.parse(stored))
        }
      } catch (e) {}
      setLoading(false)
    }

    loadSession()

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!mounted) return
      const u = session?.user ?? null
      setUser(u)
      try {
        const meta = (u as any)?.user_metadata?.interests
        if (meta && Array.isArray(meta)) setInterestsState(meta)
      } catch (e) {}
      setLoading(false)
    })

    return () => {
      mounted = false
      listener.subscription.unsubscribe()
    }
  }, [useMockAuth])

  const role = useMemo(() => {
    if (!user) return 'guest'
    return (user.app_metadata?.role as string) ?? (user.user_metadata?.role as string) ?? 'user'
  }, [user])

  async function signIn({ email, password }: Credentials) {
    if (useMockAuth || !supabase) {
      if (!email || !password) {
        return { error: 'Missing credentials' }
      }
      const mockUser = createMockUser(email)
      window.localStorage.setItem('mock_auth_email', email)
      setUser(mockUser)
      // ensure interests state exists for mock user
      const existing = typeof window !== 'undefined' ? window.localStorage.getItem('user_interests') : null
      if (existing) {
        try {
          setInterestsState(JSON.parse(existing))
        } catch (e) {}
      }
      return { error: null }
    }

    const authClient = supabase
    const { data, error } = await authClient.auth.signInWithPassword({ email, password })
    if (data.session?.user) {
      setUser(data.session.user)
    }
    return { error: error?.message ?? null }
  }

  async function signUp({ email, password }: Credentials) {
    if (useMockAuth || !supabase) {
      if (!email || !password) {
        return { error: 'Missing credentials' }
      }
      const mockUser = createMockUser(email)
      window.localStorage.setItem('mock_auth_email', email)
      setUser(mockUser)
      // default empty interests
      setInterestsState([])
      return { error: null }
    }

    const authClient = supabase
    const { data, error } = await authClient.auth.signUp({ email, password })
    if (data.session?.user) {
      setUser(data.session.user)
    }
    return { error: error?.message ?? null }
  }

  async function signOut() {
    if (useMockAuth || !supabase) {
      window.localStorage.removeItem('mock_auth_email')
      setUser(null)
      return
    }

    const authClient = supabase
    await authClient.auth.signOut()
    setUser(null)
    setInterestsState([])
  }

  function setInterests(next: string[]) {
    setInterestsState(next)
    try {
      if (typeof window !== 'undefined') window.localStorage.setItem('user_interests', JSON.stringify(next))
    } catch (e) {}
  }

  return (
    <AuthContext.Provider value={{ user, role, loading, interests, setInterests, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return context
}
