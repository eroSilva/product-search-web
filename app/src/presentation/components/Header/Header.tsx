import { Suspense } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { SearchBar } from '@/presentation/components'
import styles from './header.module.scss'

export const Header = () => {
  return (
    <header className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.area}>
          <Link href="/">
            <Image
              src="/logo-ml.png"
              alt="Logo Mercado Livre"
              width={79}
              height={54}
              priority
            />
          </Link>
          <Suspense>
            <SearchBar />
          </Suspense>
        </div>
      </div>
    </header>
  )
}
