'use client'

import NextImage, { ImageProps } from 'next/image'
import { useFallbackImage } from '@/application/controllers'

export const Image = ({ src, alt = '', ...props }: ImageProps) => {
  const { imgSrc, handleImageFallback } = useFallbackImage(String(src))

  return (
    <NextImage
      {...props}
      alt={alt}
      src={imgSrc}
      onError={handleImageFallback}
    />
  )
}
