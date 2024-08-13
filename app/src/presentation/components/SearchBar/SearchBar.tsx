'use client'

import Image from 'next/image'
import { useSearchItems } from '@/application/controllers'
import { Button } from '@/presentation/components'
import styles from './search-bar.module.scss'

export const SearchBar = () => {
  const { search, handleSearchSubmit } = useSearchItems()

  return (
    <form
      action="/items"
      onSubmit={handleSearchSubmit}
      className={styles.wrapper}
    >
      <input
        type="search"
        name="search"
        defaultValue={search}
        className={styles.input}
        aria-label="Campo de busca"
        placeholder="Buscar por um produto"
      />
      <Button
        hierarchy="secondary"
        type="submit"
        aria-label="Procurar"
        className={styles.button}
      >
        <Image
          src="/icon-serach.png"
          width={27}
          height={27}
          alt=""
          aria-hidden
        />
      </Button>
    </form>
  )
}
