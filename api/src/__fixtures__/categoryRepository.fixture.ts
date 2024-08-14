import { CategoryRepository } from '../domain'

export const categoryRepositoryFixture: CategoryRepository = {
  id: 'SOME_CATEGORY_ID',
  name: 'Celulares e Smartphones',
  picture:
    'https://http2.mlstatic.com/storage/categories-api/images/96e18c5d-ed2b-46b5-979b-8e66465a5db1.png',
  permalink: null,
  total_items_in_this_category: 91824,
  path_from_root: [
    {
      id: 'SOME_CATEGORY_ID',
      name: 'Celulares e Telefones',
    },
    {
      id: 'SOME_CATEGORY_ID',
      name: 'Celulares e Smartphones',
    },
  ],
}
