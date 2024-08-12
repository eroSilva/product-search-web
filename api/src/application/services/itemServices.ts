import { ItemEntity, ItemsEntity } from '@product-search-web/shared'
import { getData, serviceErrorInstance } from '@/infrastructure'
import {
  ItemsRepository,
  ItemRepository,
  createItems,
  createItem,
} from '../../domain'

export const getItems = async (
  query: string,
): Promise<ItemsEntity | undefined> => {
  try {
    const data = await getData<ItemsRepository>(`/sites/MLB/search?q=${query}`)
    return createItems(data)
  } catch (error) {
    serviceErrorInstance('Error fetching in getItems', error)
  }
}

export const getItem = async (id: string): Promise<ItemEntity | undefined> => {
  try {
    const data = await getData<ItemRepository>(`/items/${id}`)
    return createItem(data)
  } catch (error) {
    serviceErrorInstance('Error fetching in getItem', error)
  }
}
