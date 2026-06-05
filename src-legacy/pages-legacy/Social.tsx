import { useQuery } from '@tanstack/react-query'
import SocialPost from '../components/social/SocialPost'
import CountryDiscovery from '../components/social/CountryDiscovery'
import { posts as mockPosts } from '../data/posts'

function fetchPosts() {
  return new Promise<typeof mockPosts>((resolve) => setTimeout(() => resolve(mockPosts), 450))
}

export default function Social() {
  const { data, isLoading, isError } = useQuery({ queryKey: ['posts'], queryFn: fetchPosts })

  if (isLoading) {
    return <div className="space-y-4">{Array.from({ length: 3 }).map((_, i) => (
      <div key={i} className="h-60 animate-pulse rounded-2xl bg-slate-100" />
    ))}</div>
  }

  if (isError) {
    return <div className="text-red-600">Failed to load feed.</div>
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr,320px]">
      <section className="space-y-6">
        {data && data.map((p) => <SocialPost key={p.id} {...p} />)}
      </section>

      <div>
        <CountryDiscovery />
      </div>
    </div>
  )
}
