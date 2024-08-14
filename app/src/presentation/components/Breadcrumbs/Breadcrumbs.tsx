import Link from 'next/link'

import styles from './breadcrumbs.module.scss'

interface BreadcrumbsProps {
  items?: string[] | null
}

export const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
  return (
    <nav aria-label="Breadcrumb" className={styles.wrapper}>
      <ol className={styles.list}>
        {items?.map((item, index) => (
          <li key={`breadcrumbs-item-${index}`} className={styles.item}>
            <Link href={`/items?search=${item}`} className={styles.link}>
              {item}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  )
}
