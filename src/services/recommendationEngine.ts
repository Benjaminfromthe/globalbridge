import { products } from '../data/products'
import { posts } from '../data/posts'
import { jobs as mockJobs } from '../data/jobs'

export type RecommendationItem = {
  id: string
  title: string
  type: 'product' | 'post' | 'job'
  score: number
  image?: string
  snippet?: string
  href: string
}

function scoreTextMatch(text = '', interests: string[]) {
  const t = text.toLowerCase()
  return interests.reduce((acc, tag) => (t.includes(tag.toLowerCase()) ? acc + 1 : acc), 0)
}

export function recommendForUser(interests: string[] = [], limit = 6): RecommendationItem[] {
  // If no interests, return a simple 'Trending in Rwanda' mix (recent posts + top products)
  if (!interests || interests.length === 0) {
    const trendingPosts = posts.filter((p) => p.country === 'Rwanda').slice(0, 3)
    const trendingProducts = products.slice(0, 3)
    const items: RecommendationItem[] = [
      ...trendingPosts.map((p) => ({ id: p.id, title: p.content.split('.')[0], type: 'post' as const, score: 1, image: p.mediaUrl, snippet: p.content, href: '/social' })),
      ...trendingProducts.map((p) => ({ id: p.id, title: p.name, type: 'product' as const, score: 1, image: p.imageUrl, snippet: p.category, href: '/marketplace' })),
    ]
    return items.slice(0, limit)
  }

  const scored: RecommendationItem[] = []

  // Products
  products.forEach((p) => {
    const score = scoreTextMatch(p.name + ' ' + p.category, interests)
    if (score > 0) {
      scored.push({ id: p.id, title: p.name, type: 'product', score, image: p.imageUrl, snippet: p.category, href: '/marketplace' })
    }
  })

  // Jobs
  mockJobs.forEach((j) => {
    const score = scoreTextMatch(j.title + ' ' + j.company + ' ' + j.roleType, interests)
    if (score > 0) {
      scored.push({ id: j.id, title: j.title, type: 'job', score, snippet: j.company, href: '/jobs' })
    }
  })

  // Posts
  posts.forEach((po) => {
    const score = scoreTextMatch(po.content + ' ' + (po.country ?? ''), interests)
    if (score > 0) {
      scored.push({ id: po.id, title: po.content.split('.')[0], type: 'post', score, image: po.mediaUrl, snippet: po.author, href: '/social' })
    }
  })

  // Sort by score and return top N
  return scored.sort((a, b) => b.score - a.score).slice(0, limit)
}

export default { recommendForUser }
