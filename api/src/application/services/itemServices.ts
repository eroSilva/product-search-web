import { ItemEntity, ItemsEntity } from '@product-search-web/shared'
import { getData } from '@/infrastructure'
import {
  ItemsRepository,
  ItemRepository,
  CategoryRepository,
  createItems,
  createItem,
  extractCategoryId,
} from '@/domain'
import { getCategory } from '@/application/services'

export const getItems = async (query: string): Promise<ItemsEntity> => {
  const items = await getData<ItemsRepository>(`/sites/MLB/search?q=${query}`)

  const categoryId = extractCategoryId(items)
  if (!categoryId) return createItems({ items })

  const category = await getData<CategoryRepository>(
    `/categories/${categoryId}`,
  )
  return createItems({ items, category })
}

export const getItem = async (id: string): Promise<ItemEntity | undefined> => {
  const item = await getData<ItemRepository>(`/items/${id}`)
  const categoryId = item?.category_id || ''
  const category = await getCategory(categoryId)

  return createItem({ item, category })
}
