import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { lazy, Suspense } from 'react'
import { AuthProvider } from './context/AuthContext'
import ErrorBoundary from './components/ErrorBoundary'
import ProtectedRoute from './components/auth/ProtectedRoute'

const RootLayout = lazy(() => import('./components/layout/RootLayout'))
const Home = lazy(() => import('./pages/Home'))
const Marketplace = lazy(() => import('./pages/Marketplace'))
const Tourism = lazy(() => import('./pages/Tourism'))
const Jobs = lazy(() => import('./pages/Jobs'))
const Social = lazy(() => import('./pages/Social'))
const DashboardLayout = lazy(() => import('./components/dashboard/DashboardLayout'))
const Dashboard = lazy(() => import('./pages/Dashboard'))
const Profile = lazy(() => import('./pages/Profile'))
const Login = lazy(() => import('./pages/auth/Login'))
const Register = lazy(() => import('./pages/auth/Register'))

export default function App() {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <BrowserRouter>
          <ErrorBoundary>
            <Suspense fallback={<div className="min-h-screen flex items-center justify-center p-8">Loading...</div>}>
              <Routes>
                <Route path="/" element={<RootLayout />}>
                  <Route index element={<Home />} />
                  <Route path="marketplace" element={<Marketplace />} />
                  <Route path="tourism" element={<Tourism />} />
                  <Route path="jobs" element={<Jobs />} />
                  <Route path="social" element={<Social />} />
                </Route>

                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />

                <Route path="/profile" element={<ProtectedRoute><RootLayout /></ProtectedRoute>}>
                  <Route index element={<Profile />} />
                </Route>

                <Route path="/dashboard" element={<ProtectedRoute><DashboardLayout /></ProtectedRoute>}>
                  <Route index element={<Dashboard />} />
                </Route>
              </Routes>
            </Suspense>
          </ErrorBoundary>
        </BrowserRouter>
      </AuthProvider>
    </QueryClientProvider>
  )
}

