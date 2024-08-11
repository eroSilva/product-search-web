import {
  ItemsRepository,
  ItemRepository,
} from '../repositories/itemRepository.model'
import { ItemEntity, ItemsEntity } from './itemEntity.model'

const extractDecimals = (value: number): number => {
  const patter = /\.(.*)/
  const [, decimals] = String(value).match(patter) || []
  const result = decimals?.padEnd(2, '0') || '0'

  return parseInt(result)
}

export const createItem = (itemsRepository: ItemRepository): ItemEntity => {
  return {
    id: itemsRepository.id,
    title: itemsRepository.title,
    category: itemsRepository.category_id,
    description: itemsRepository.descriptions?.join(' '),
    price: {
      currency: itemsRepository.currency_id,
      amount: Math.trunc(itemsRepository?.price || 0),
      decimals: extractDecimals(itemsRepository?.price || 0),
    },
    picture_url: itemsRepository.thumbnail,
    condition: itemsRepository.condition,
    free_shipping: itemsRepository.shipping?.free_shipping,
  }
}

export const createItems = (
  query: string,
  itemsRepository: ItemsRepository,
): ItemsEntity => {
  const { results } = itemsRepository
  const categories = results?.map(({ category_id }) => category_id || '')
  const items = results?.map(createItem)

  return {
    query,
    categories: categories || [],
    items: items || [],
  }
}
