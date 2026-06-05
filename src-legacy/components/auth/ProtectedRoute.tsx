import { useAuth } from '../../context/AuthContext'
import type { PropsWithChildren } from 'react'
import { Navigate } from 'react-router-dom'

export default function ProtectedRoute({ children }: PropsWithChildren) {
  const { loading, user } = useAuth()

  if (loading) {
    return <div className="flex items-center justify-center p-8">Loading...</div>
  }

  if (!user) {
    return <Navigate to="/login" replace />
  }

  return <>{children}</>
}
