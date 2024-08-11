import {
  ItemsRepository,
  ItemRepository,
} from '../repositories/itemRepository.model'
import { ItemEntity, ItemsEntity } from './itemEntity.model'
import { extractDecimalDigits } from '../../utils'

export const createItem = (itemsRepository: ItemRepository): ItemEntity => {
  return {
    id: itemsRepository.id || null,
    title: itemsRepository.title || null,
    category: itemsRepository.category_id || null,
    description: itemsRepository.descriptions?.join(' ') || null,
    price: {
      currency: itemsRepository.currency_id || null,
      amount: Math.trunc(itemsRepository?.price || 0) || null,
      decimals: extractDecimalDigits(itemsRepository?.price || 0) || null,
    },
    picture_url: itemsRepository.thumbnail || null,
    condition: itemsRepository.condition || null,
    free_shipping: itemsRepository.shipping?.free_shipping || null,
  }
}

export const createItems = (itemsRepository: ItemsRepository): ItemsEntity => {
  const { results, query } = itemsRepository
  const categories = results?.map(({ category_id }) => category_id || '')
  const items = results?.map(createItem)

  return {
    query: query || '',
    categories: categories || [],
    items: items || [],
  }
}
