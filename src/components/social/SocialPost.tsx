import { useState } from 'react'
import { Heart, MessageCircle, Share2, User } from 'lucide-react'
import type { Post } from '../../data/posts'

type Props = Post & {
  onComment?: () => void
}

export default function SocialPost({ author, avatarUrl, mediaUrl, content, likes: initialLikes }: Props) {
  const [likes, setLikes] = useState(initialLikes ?? 0)
  const [liked, setLiked] = useState(false)

  function toggleLike() {
    setLiked((v) => {
      const next = !v
      setLikes((prev) => (next ? prev + 1 : Math.max(0, prev - 1)))
      return next
    })
  }

  return (
    <article className="rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="flex items-center gap-3 p-4">
        <div className="h-10 w-10 flex-none overflow-hidden rounded-full bg-slate-100">
          {avatarUrl ? <img src={avatarUrl} alt={author} className="h-full w-full object-cover" /> : <User />}
        </div>
        <div>
          <div className="text-sm font-semibold text-slate-900">{author}</div>
          <div className="text-xs text-slate-500">{new Date().toLocaleDateString()}</div>
        </div>
      </div>

      {mediaUrl && <img src={mediaUrl} alt="post media" className="w-full object-cover" style={{ maxHeight: 420 }} />}

      <div className="p-4">
        <p className="text-slate-700">{content}</p>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button onClick={toggleLike} className="flex items-center gap-2 text-sm text-slate-600">
              <Heart className={`${liked ? 'text-red-600' : 'text-slate-600'}`} size={16} />
              <span>{likes}</span>
            </button>

            <button className="flex items-center gap-2 text-sm text-slate-600">
              <MessageCircle size={16} />
              <span>Comment</span>
            </button>
          </div>

          <button className="flex items-center gap-2 text-sm text-slate-600">
            <Share2 size={16} />
            <span>Share</span>
          </button>
        </div>
      </div>
    </article>
  )
}
