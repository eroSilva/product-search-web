import styles from './product-detail-loading.module.scss'

export const ProductDetailLoading = () => {
  return (
    <section className={styles.section}>
      <div className={styles.area}>
        <div className={styles.product}>
          <div className={styles.image} />
          <div className={styles.infos}>
            <div className={styles['sold-quantity']} />
            <div className={styles.title} />
            <div className={styles.price} />
            <div className={styles.button} />
          </div>
          <div className={styles.description} />
        </div>
      </div>
    </section>
  )
}
