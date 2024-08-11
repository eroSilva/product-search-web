import { mockedInstance } from '../../../infrastructure'
import { getItems, getItem } from '../../../application/services/itemServices'
import {
  itemsRepositoryFixture,
  itemRepositoryFixture,
  itemsEntityFixture,
  itemEntityFixture,
} from '../../../__fixtures__'

describe('application/services/itemServices', () => {
  it('should return correctly data when getItems called with a query', async () => {
    mockedInstance
      .onGet('/sites/MLB/search?q=SOME_QUERY')
      .reply(200, itemsRepositoryFixture)

    expect(await getItems('SOME_QUERY')).toStrictEqual(itemsEntityFixture)
  })

  it('should return an error message when getItems request fail', async () => {
    mockedInstance.onGet('/sites/MLB/search?q=SOME_QUERY').reply(500)

    await expect(getItems('SOME_QUERY')).rejects.toThrow(
      'Error fetching in getItems',
    )
  })

  it('should return correctly data when getItem called with a id', async () => {
    mockedInstance.onGet('/items/SOME_ID').reply(200, itemRepositoryFixture)

    expect(await getItem('SOME_ID')).toStrictEqual(itemEntityFixture)
  })

  it('should return an error message when getItem request fail', async () => {
    mockedInstance.onGet('/items/SOME_ID').reply(500)

    await expect(getItem('SOME_ID')).rejects.toThrow(
      'Error fetching in getItem',
    )
  })
})
