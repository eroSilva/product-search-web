import Link from 'next/link'
import Image from 'next/image'
import { currencyFormatter } from '@/utils'
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
  return (
    <div className={styles.wrapper}>
      {image && image.src && (
        <Image
          src={image.src}
          alt={image.alt || ''}
          width={180}
          height={180}
          className={styles.picture}
        />
      )}

      <div className={styles['infos']}>
        <div className={styles['infos__main']}>
          <span className={styles['infos__header']}>
            {currency && amount && (
              <span className={styles['infos__currency']}>
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
            <span className={styles['infos__title']}>
              <Link href={href}>{title}</Link>
            </span>
          )}
        </div>

        {seller && <p className={styles['infos__seller']}>{seller}</p>}
      </div>
    </div>
  )
}
