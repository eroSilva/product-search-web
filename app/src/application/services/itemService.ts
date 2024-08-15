import { ItemEntity, ItemsEntity } from '@product-search-web/shared'

export const getItem = async (id: string): Promise<ItemEntity | Response> => {
  const res = await fetch(`${process.env.API_ENDPOINT}/item/${id}`, {
    next: { revalidate: 1800 },
  })

  return res.ok ? res.json() : res
}

export const getItems = async (
  term: string,
): Promise<ItemsEntity | Response> => {
  const res = await fetch(`${process.env.API_ENDPOINT}/items?search=${term}`, {
    next: { revalidate: 1800 },
  })

  return res.ok ? res.json() : res
}
