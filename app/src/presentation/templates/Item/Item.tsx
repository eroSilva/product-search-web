import { ReactNode } from 'react'
import styles from './item.module.scss'

interface ItemProps {
  children: ReactNode
}

export const Item = ({ children }: ItemProps) => {
  return (
    <section className={styles.section}>
      <div className={styles.area}>{children}</div>
    </section>
  )
}
