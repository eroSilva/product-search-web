import { getData } from '../../infrastructure/ApiService'
import {
  ItemsRepository,
  ItemRepository,
  ItemsEntity,
  ItemEntity,
  createItems,
  createItem,
} from '../../domain'

export const getItems = async (
  query: string,
): Promise<ItemsEntity | string> => {
  try {
    const data = await getData<ItemsRepository>(`/sites/MLB/search?q=${query}`)
    return createItems(query, data)
  } catch {
    return 'Error fetching data from API'
  }
}

export const getItem = async (id: string): Promise<ItemEntity | string> => {
  try {
    const data = await getData<ItemRepository>(`/items/${id}`)
    return createItem(data)
  } catch {
    return 'Error fetching data from API'
  }
}
