import Link from 'next/link'
import { ItemEntity } from '@product-search-web/shared'
import { currencyFormatter } from '@/utils'
import { Image, Breadcrumbs, ButtonAnchor } from '@/presentation/components'
import styles from './product-detail.module.scss'

export const ProductDetail = ({
  title,
  price,
  categories,
  picture_url,
  permalink,
}: ItemEntity) => {
  return (
    <>
      <section className={styles['content-wrapper']}>
        <div className={styles['breadcrumbs-area']}>
          <Breadcrumbs items={categories} />
        </div>
        <div className={styles['content-area']}>
          <div className={styles['grid-product']}>
            {picture_url && (
              <picture className={styles.picture}>
                <Image
                  src={picture_url}
                  alt={title || ''}
                  width={680}
                  height={680}
                />
              </picture>
            )}
            <div className={styles.infos}>
              <p className={styles['sold-quantity']}>Nuevo - 24 vendidos</p>
              <h1 className={styles.title}>{title}</h1>
              {price?.currency && price?.amount && (
                <p className={styles.price}>
                  {currencyFormatter({
                    currency: price?.currency,
                    value: price?.amount,
                  })}
                </p>
              )}
              {permalink && (
                <Link href={permalink} passHref legacyBehavior>
                  <ButtonAnchor size="large" isFull>
                    Comprar
                  </ButtonAnchor>
                </Link>
              )}
            </div>
            <div className={styles.description}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed
              debitis voluptates magnam possimus? Hic, alias fuga, placeat
              eligendi magnam velit error quibusdam sint recusandae impedit
              dolor nostrum quas amet ea.
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
