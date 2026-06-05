import { useEffect, useState } from 'react'
import type { ImgHTMLAttributes } from 'react'

type ImageWithFallbackProps = Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'alt'> & {
  src?: string
  alt: string
  fallbackSrc?: string
}

export default function ImageWithFallback({
  src,
  alt,
  fallbackSrc = '/assets/placeholder-image.jpg',
  onError,
  ...props
}: ImageWithFallbackProps) {
  const [currentSrc, setCurrentSrc] = useState(src ?? fallbackSrc)

  useEffect(() => {
    setCurrentSrc(src ?? fallbackSrc)
  }, [src, fallbackSrc])

  function handleError(event: React.SyntheticEvent<HTMLImageElement, Event>) {
    if (currentSrc !== fallbackSrc) {
      setCurrentSrc(fallbackSrc)
    }

    if (onError) {
      onError(event)
    }
  }

  return <img src={currentSrc} alt={alt} onError={handleError} {...props} />
}
