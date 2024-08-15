import styles from './product-list-loading.module.scss'

export const ProductListLoading = () => {
  return (
    <section className={styles['content-wrapper']}>
      <div className={styles['breadcrumbs-area']}>
        <div className={styles.breadcrumbs} />
      </div>
      <div className={styles['content-area']}>
        {new Array(4).fill(0).map((_, index) => (
          <div key={`product-${index}`} className={styles.product}>
            <div className={styles.image} />
            <div className={styles.infos}>
              <div className={styles.price} />
              <div className={styles.title} />
              <div className={styles.description} />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
