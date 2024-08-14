import Link from 'next/link'
import { Image } from '@/presentation/components'
import { currencyFormatter } from '@/utils'
import styles from './product.module.scss'

interface ImageProps {
  src?: string
  alt?: string
}

interface ProductProps {
  title?: string
  seller?: string
  image?: ImageProps
  href?: string
  amount?: number
  currency?: string
  isFreeShipping?: boolean
}

export const Product = ({
  title,
  seller,
  image,
  href,
  amount,
  currency,
  isFreeShipping,
}: ProductProps) => {
  return (
    <div className={styles.wrapper}>
      {image && image.src && (
        <picture className={styles.picture}>
          <Image
            src={image.src}
            alt={image.alt || ''}
            width={180}
            height={180}
          />
        </picture>
      )}
      <div className={styles['infos']}>
        <div>
          <div className={styles['header']}>
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
          </div>
          {title && href && (
            <h2 className={styles['title']}>
              <Link href={href}>{title}</Link>
            </h2>
          )}
        </div>
        {seller && <p className={styles['seller']}>{seller}</p>}
      </div>
    </div>
  )
}
