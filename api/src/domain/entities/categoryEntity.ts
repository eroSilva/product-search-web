import { ItemsRepository, CategoryRepository } from '@/domain'

export const extractCategoryId = (itemsRepository: ItemsRepository): string => {
  const firstResult = itemsRepository.results?.[0]
  const categoryId = firstResult?.category_id

  return categoryId || ''
}

export const createCategoryPathFromRoot = (
  categoryRepository?: CategoryRepository,
): string[] => {
  const { path_from_root } = categoryRepository || {}
  const categories = path_from_root
    ?.map(({ name }) => name)
    ?.filter(name => name !== null && name !== undefined)

  return categories || []
}
