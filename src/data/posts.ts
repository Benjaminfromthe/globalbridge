export type Post = {
  id: string
  author: string
  avatarUrl?: string
  imageUrl?: string
  content: string
  likes: number
  country?: string
  timestamp?: string
}

export const posts: Post[] = [
  {
    id: 'post-001',
    author: 'Aimee N.',
    avatarUrl: 'https://i.pravatar.cc/48?img=12',
    imageUrl: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80',
    content: 'Visiting Nyungwe Forest was a dream — canopy walks and primate encounters. Highly recommend!',
    likes: 124,
    country: 'Rwanda',
    timestamp: '2026-06-01T10:24:00Z',
  },
  {
    id: 'post-002',
    author: 'Jean P.',
    avatarUrl: 'https://i.pravatar.cc/48?img=8',
    imageUrl: 'https://images.unsplash.com/photo-1559056199-641a0ac8b8d5?w=800&q=80',
    content: 'Tasted the Best Rwandan Coffee of the Year at a local cupping—notes of citrus and chocolate.',
    likes: 87,
    country: 'Rwanda',
    timestamp: '2026-05-28T08:12:00Z',
  },
  {
    id: 'post-003',
    author: 'Mariam K.',
    avatarUrl: 'https://i.pravatar.cc/48?img=5',
    imageUrl: 'https://images.unsplash.com/photo-1488970684297-34337b0e3ba8?w=800&q=80',
    content: 'Local artisans at the market have incredible craftsmanship — loved the handwoven baskets!',
    likes: 42,
    country: 'Rwanda',
    timestamp: '2026-05-20T14:40:00Z',
  },
]
