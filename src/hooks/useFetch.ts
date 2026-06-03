import { useEffect, useState } from 'react'

type FetchState<T> = {
  data: T | null
  error: string | null
  loading: boolean
}

export function useFetch<T>(url: string) {
  const [state, setState] = useState<FetchState<T>>({
    data: null,
    error: null,
    loading: true,
  })

  useEffect(() => {
    let active = true

    async function load() {
      try {
        const response = await fetch(url)
        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`)
        }
        const result = (await response.json()) as T
        if (active) {
          setState({ data: result, error: null, loading: false })
        }
      } catch (error) {
        if (active) {
          setState({ data: null, error: (error as Error).message, loading: false })
        }
      }
    }

    load()

    return () => {
      active = false
    }
  }, [url])

  return state
}
