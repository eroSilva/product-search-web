'use client'

import { useSearchItems } from '@/application/controllers/useSearchItems'

export const Header = () => {
  const { search, handleSearchSubmit } = useSearchItems()

  return (
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
  )
}
