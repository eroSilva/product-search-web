'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { useSearchItems } from '@/application/controllers'
import { Button } from '@/presentation/components'
import styles from './search-bar.module.scss'

export const SearchBar = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const { search, isSearching, handleSearchSubmit } = useSearchItems()

  useEffect(() => {
    if (!isSearching) inputRef.current?.focus()
  }, [isSearching])

  return (
    <form
      action="/items"
      onSubmit={handleSearchSubmit}
      className={styles.wrapper}
    >
      <input
        ref={inputRef}
        type="search"
        name="search"
        defaultValue={search}
        className={styles.input}
        aria-label="Campo de busca"
        aria-busy={isSearching}
        disabled={isSearching}
        placeholder="Buscar por um produto"
      />
      <Button
        hierarchy="secondary"
        type="submit"
        aria-label="Procurar"
        disabled={isSearching}
        aria-busy={isSearching}
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
