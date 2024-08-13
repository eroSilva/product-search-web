import { ItemEntity, ItemsEntity } from '@product-search-web/shared'

export const getItem = async (id: string): Promise<ItemEntity> => {
  const res = await fetch(`http://localhost:8000/api/item/${id}`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export const getItems = async (term: string): Promise<ItemsEntity> => {
  const res = await fetch(`http://localhost:8000/api/items?search=${term}`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}
