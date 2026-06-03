import { Component, type ErrorInfo, type ReactNode } from 'react'

type Props = { children: ReactNode }
type State = { hasError: boolean; message: string }

export default class ErrorBoundary extends Component<Props, State> {
  state = { hasError: false, message: '' }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, message: error.message || 'Something went wrong' }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('ErrorBoundary caught error:', error, info)
  }

  resetError = () => {
    this.setState({ hasError: false, message: '' })
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 p-8 text-slate-900">
          <div className="max-w-xl rounded-3xl border border-red-200 bg-white p-8 shadow-lg">
            <h1 className="text-2xl font-semibold text-red-700">Something went wrong</h1>
            <p className="mt-4 text-slate-600">A module failed to render, but the rest of GlobalBridge is still available.</p>
            <p className="mt-4 rounded-2xl bg-red-50 p-4 text-sm text-red-700">{this.state.message}</p>
            <button
              type="button"
              onClick={this.resetError}
              className="mt-6 rounded-2xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700"
            >
              Reload content
            </button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
