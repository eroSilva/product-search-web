import Link from 'next/link'
import { ItemEntity } from '@product-search-web/shared'
import { currencyFormatter } from '@/utils'
import {
  Image,
  Breadcrumbs,
  ButtonAnchor,
  Table,
} from '@/presentation/components'
import styles from './product-detail.module.scss'

export const ProductDetail = ({
  title,
  price,
  categories,
  picture_url,
  permalink,
  attributes,
  condition,
  available_quantity,
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
                  priority
                />
              </picture>
            )}
            <div className={styles.infos}>
              <p className={styles['sold-quantity']}>
                {condition === 'new' && 'Novo'}
                {condition === 'used' && 'Usado'}
                {condition && available_quantity && ' - '}
                {available_quantity && `${available_quantity} disponíveis`}
              </p>
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
            <div className={styles.attributes}>
              {attributes && (
                <Table heading={['Atributo', 'Valor']} data={attributes} />
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
