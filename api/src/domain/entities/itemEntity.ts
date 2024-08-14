import { ItemEntity, ItemsEntity } from '@product-search-web/shared'
import {
  ItemsRepository,
  ItemRepository,
  CategoryRepository,
  createCategoryPathFromRoot,
} from '@/domain'
import { extractDecimalDigits } from '@/utils'

interface CreateItem {
  item: ItemRepository
  category?: CategoryRepository
}

interface CreateItems {
  items: ItemsRepository
  category?: CategoryRepository
}

export const createItem = ({ item, category }: CreateItem): ItemEntity => {
  const picture_url = item.pictures?.[0]?.url ?? item.thumbnail ?? null

  return {
    id: item.id || null,
    title: item.title || null,
    categories: createCategoryPathFromRoot(category) || [],
    description: item.descriptions?.join(' ') || null,
    price: {
      currency: item.currency_id || null,
      amount: Math.trunc(item?.price || 0) || null,
      decimals: extractDecimalDigits(item?.price || 0) || null,
    },
    picture_url,
    condition: item.condition || null,
    free_shipping: item.shipping?.free_shipping || null,
    seller: item.seller?.nickname || null,
  }
}

export const createItems = ({ items, category }: CreateItems): ItemsEntity => {
  const { results, query } = items
  const parsedItems = results?.map(result =>
    createItem({ item: result, category }),
  )
  const categories = createCategoryPathFromRoot(category)

  return {
    query: query || '',
    categories,
    items: parsedItems || [],
  }
}
