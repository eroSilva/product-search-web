import { getData } from '../../infrastructure/ApiService'
import {
  ItemsRepository,
  ItemRepository,
  ItemsEntity,
  ItemEntity,
  createItems,
  createItem,
} from '../../domain'

export const getItems = async (query: string): Promise<ItemsEntity> => {
  try {
    const data = await getData<ItemsRepository>(`/sites/MLB/search?q=${query}`)
    return createItems(data)
  } catch {
    throw new Error('Error fetching in getItems')
  }
}

export const getItem = async (id: string): Promise<ItemEntity> => {
  try {
    const data = await getData<ItemRepository>(`/items/${id}`)
    return createItem(data)
  } catch {
    throw new Error('Error fetching in getItem')
  }
}
