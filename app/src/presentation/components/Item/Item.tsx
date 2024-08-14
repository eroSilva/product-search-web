'use client'

import Link from 'next/link'
import { useFallbackImage } from '@/application/controllers'
import { currencyFormatter } from '@/utils'
import { Image } from '@/presentation/components'
import styles from './item.module.scss'

interface ImageProps {
  src?: string
  alt?: string
}

interface ItemProps {
  title?: string
  seller?: string
  image?: ImageProps
  href?: string
  amount?: number
  currency?: string
  isFreeShipping?: boolean
}

export const Item = ({
  title,
  seller,
  image,
  href,
  amount,
  currency,
  isFreeShipping,
}: ItemProps) => {
  const { imgSrc, handleImageFallback } = useFallbackImage(image?.src)

  return (
    <div className={styles.wrapper}>
      {image && image.src && (
        <Image
          src={imgSrc}
          alt={image.alt || ''}
          width={180}
          height={180}
          className={styles.picture}
          onError={handleImageFallback}
        />
      )}
      <div className={styles['infos']}>
        <div>
          <span className={styles['header']}>
            {currency && amount && (
              <span className={styles['currency']}>
                {currencyFormatter({ currency, value: amount })}
              </span>
            )}
            {isFreeShipping && (
              <Image
                src="/icon-shipping.png"
                alt="Ícone de um caminhão, dentro de um circulo verde, para representar o frete grátis"
                width={28}
                height={28}
              />
            )}
          </span>
          {title && href && (
            <span className={styles['title']}>
              <Link href={href}>{title}</Link>
            </span>
          )}
        </div>
        {seller && <p className={styles['seller']}>{seller}</p>}
      </div>
    </div>
  )
}
