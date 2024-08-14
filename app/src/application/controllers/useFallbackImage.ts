import { useState, useCallback } from 'react'

export const useFallbackImage = (src?: string) => {
  const FALLBACK_IMAGE_SRC = '/no-image-180.jpg'
  const [imgSrc, setImgSrc] = useState(src ?? FALLBACK_IMAGE_SRC)

  const handleImageFallback = useCallback(
    () => setImgSrc(FALLBACK_IMAGE_SRC),
    [],
  )

  return { imgSrc, handleImageFallback }
}
