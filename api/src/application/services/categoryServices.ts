import { getData } from '@/infrastructure'
import { CategoryRepository } from '@/domain'

export const getCategory = async (id: string): Promise<CategoryRepository> => {
  const data = await getData<CategoryRepository>(`/categories/${id}`)

  return data
}
