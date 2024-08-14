import { mockedInstance } from '../../../infrastructure/ApiServiceMockAdapter'
import { getItems, getItem } from '../../../application/services/itemServices'
import {
  categoryRepositoryFixture,
  itemEntityFixture,
  itemRepositoryFixture,
  itemsEntityEmptyFixture,
  itemsEntityFixture,
  itemsRepositoryEmptyFixture,
  itemsRepositoryFixture,
} from '../../../__fixtures__'

describe('application/services/itemServices', () => {
  it('should return correctly data when getItems called with a query', async () => {
    mockedInstance
      .onGet('/sites/MLB/search?q=SOME_QUERY')
      .reply(200, itemsRepositoryFixture)

    mockedInstance
      .onGet('/categories/SOME_CATEGORY_ID')
      .reply(200, categoryRepositoryFixture)

    expect(await getItems('SOME_QUERY')).toStrictEqual(itemsEntityFixture)
  })

  it('should return correctly data when getItems called with a query and no items found', async () => {
    mockedInstance
      .onGet('/sites/MLB/search?q=SOME_QUERY')
      .reply(200, itemsRepositoryEmptyFixture)

    mockedInstance
      .onGet('/categories/SOME_CATEGORY_ID')
      .reply(200, categoryRepositoryFixture)

    expect(await getItems('SOME_QUERY')).toStrictEqual(itemsEntityEmptyFixture)
  })

  it('should return correctly data when getItem called with a id', async () => {
    mockedInstance.onGet('/items/SOME_ID').reply(200, itemRepositoryFixture)

    expect(await getItem('SOME_ID')).toStrictEqual(itemEntityFixture)
  })
})
