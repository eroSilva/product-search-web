import { ItemsEntity } from '@product-search-web/shared'
import { Breadcrumbs } from '@/presentation/components'
import { Product } from './Product'
import styles from './product-list.module.scss'

export const ProductList = ({ query, categories, items }: ItemsEntity) => {
  return (
    <>
      <section className={styles['content-wrapper']}>
        <div className={styles['breadcrumbs-area']}>
          <Breadcrumbs items={categories} />
        </div>
        <div className={styles['content-area']}>
          {items.length > 0 && (
            <ul>
              {items.map(item => (
                <li className={styles.product} key={item.id}>
                  <Product
                    title={item.title ?? undefined}
                    image={{
                      src: item.picture_url ?? undefined,
                      alt: item.title ?? '',
                    }}
                    currency={item.price?.currency ?? undefined}
                    amount={item.price?.amount ?? undefined}
                    isFreeShipping={item.free_shipping ?? undefined}
                    seller={item.seller ?? undefined}
                    href={`/item/${item.id}`}
                  />
                </li>
              ))}
            </ul>
          )}
          {!items.length && (
            <p>Nenhum resultado encontrado para o termo: {query}</p>
          )}
        </div>
      </section>
    </>
  )
}
