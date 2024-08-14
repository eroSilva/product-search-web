import { createItem, createItems } from '../../../domain/entities'
import { ItemsRepository } from '../../../domain/repositories'
import {
  itemRepositoryFixture,
  itemsRepositoryFixture,
  itemsEntityEmptyFixture,
  itemEntityNullableFixture,
  itemEntityFixture,
  itemsEntityFixture,
  categoryRepositoryFixture,
} from '../../../__fixtures__'

describe('domain/entities/itemEntity', () => {
  it('should create an nullable entity when no itemRepository is provided', () => {
    expect(createItem({ item: {} })).toStrictEqual(itemEntityNullableFixture)
  })

  it('should create a entity when itemRepository is provided', () => {
    expect(
      createItem({
        item: itemRepositoryFixture,
        category: categoryRepositoryFixture,
      }),
    ).toStrictEqual(itemEntityFixture)
  })

  it('should create an list of entity when itemsRepository is provided', () => {
    expect(createItems({ items: [] as ItemsRepository })).toStrictEqual(
      itemsEntityEmptyFixture,
    )
  })

  it('should create an list of entity when itemsRepository is provided', () => {
    expect(
      createItems({
        items: itemsRepositoryFixture,
        category: categoryRepositoryFixture,
      }),
    ).toStrictEqual(itemsEntityFixture)
  })
})
