import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useAuth } from '../../context/AuthContext'

type RegisterFormValues = {
  email: string
  password: string
  confirmPassword: string
}

const registerSchema = z
  .object({
    email: z.string().email('Enter a valid email'),
    password: z
      .string()
      .min(8, 'Password must be at least 8 characters')
      .regex(/[A-Z]/, 'Use at least one uppercase letter')
      .regex(/[a-z]/, 'Use at least one lowercase letter')
      .regex(/[0-9]/, 'Use at least one number'),
    confirmPassword: z.string(),
  })
  .superRefine((values, ctx) => {
    if (values.password !== values.confirmPassword) {
      ctx.addIssue({
        code: 'custom',
        path: ['confirmPassword'],
        message: 'Passwords must match',
      })
    }
  })

export default function Register() {
  const { signUp } = useAuth()
  const navigate = useNavigate()
  const [serverError, setServerError] = useState<string | null>(null)

  const { register, handleSubmit, formState } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
  })

  async function onSubmit(values: RegisterFormValues) {
    setServerError(null)
    const { error } = await signUp({ email: values.email, password: values.password })
    if (error) {
      setServerError(error)
      return
    }
    navigate('/dashboard')
  }

  return (
    <div className="mx-auto max-w-md px-4 py-12 sm:px-6">
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg sm:p-10">
        <h1 className="text-2xl font-semibold text-slate-900">Create your account</h1>
        <p className="mt-2 text-sm text-slate-600">Start building the GlobalBridge network.</p>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-5">
          {serverError && <div className="rounded-xl bg-red-50 p-3 text-sm text-red-700">{serverError}</div>}

          <label htmlFor="register-email" className="block text-sm font-medium text-slate-700">
            Email
          </label>
          <input
            id="register-email"
            type="email"
            {...register('email')}
            className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 focus:border-blue-500 focus:outline-none"
            aria-invalid={!!formState.errors.email}
          />
          {formState.errors.email && <p className="mt-1 text-sm text-red-600">{formState.errors.email.message}</p>}

          <label htmlFor="register-password" className="block text-sm font-medium text-slate-700">
            Password
          </label>
          <input
            id="register-password"
            type="password"
            {...register('password')}
            className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 focus:border-blue-500 focus:outline-none"
            aria-invalid={!!formState.errors.password}
          />
          {formState.errors.password && <p className="mt-1 text-sm text-red-600">{formState.errors.password.message}</p>}

          <label htmlFor="register-confirm-password" className="block text-sm font-medium text-slate-700">
            Confirm Password
          </label>
          <input
            id="register-confirm-password"
            type="password"
            {...register('confirmPassword')}
            className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 focus:border-blue-500 focus:outline-none"
            aria-invalid={!!formState.errors.confirmPassword}
          />
          {formState.errors.confirmPassword && <p className="mt-1 text-sm text-red-600">{formState.errors.confirmPassword.message}</p>}

          <button
            type="submit"
            className="w-full rounded-2xl bg-blue-600 px-4 py-3 text-sm font-medium text-white transition hover:bg-blue-700"
          >
            Create account
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-600">
          Already have an account?{' '}
          <Link to="/login" className="font-semibold text-blue-600 hover:text-blue-700">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  )
}
