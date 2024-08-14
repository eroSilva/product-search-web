import styles from './items-loading.module.scss'

export const ItemsLoading = () => {
  return (
    <section className={styles.section}>
      <div className={styles.area}>
        {new Array(4).fill(0).map((_, index) => (
          <div key={`suspens-${index}`} className={styles.item}>
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
