import { ItemEntity, ItemsEntity } from '@product-search-web/shared'

export const getItem = async (id: string): Promise<ItemEntity> => {
  const res = await fetch(`${process.env.API_ENDPOINT}/item/${id}`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export const getItems = async (term: string): Promise<ItemsEntity> => {
  const res = await fetch(`${process.env.API_ENDPOINT}/items?search=${term}`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}
