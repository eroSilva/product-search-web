'use client'

import { useSearchItems } from '@/application/controllers/useSearchItems'
import styles from '@/presentation/components/Header/header.module.scss'

interface HeaderProps {
  logo: React.ReactNode
}

export const Header = ({ logo }: HeaderProps) => {
  const { search, handleSearchSubmit } = useSearchItems()

  return (
    <header className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.area}>
          {logo}

          <form action="/items" onSubmit={handleSearchSubmit}>
            <label htmlFor="input-search">Buscar produto</label>
            <input
              id="input-search"
              type="search"
              name="search"
              defaultValue={search}
            />
            <button type="submit">Procurar</button>
          </form>
        </div>
      </div>
    </header>
  )
}
