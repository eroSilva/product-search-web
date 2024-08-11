import { createItem, createItems } from '../../../domain/entities'
import { ItemsRepository } from '../../../domain/repositories'
import {
  itemRepositoryFixture,
  itemsRepositoryFixture,
  itemsEntityEmptyFixture,
  itemEntityNullableFixture,
  itemEntityFixture,
  itemsEntityFixture,
} from '../../../__fixtures__'

describe('domain/entities/itemEntity', () => {
  it('should create an nullable entity when no itemRepository is provided', () => {
    expect(createItem({})).toStrictEqual(itemEntityNullableFixture)
  })

  it('should create a entity when itemRepository is provided', () => {
    expect(createItem(itemRepositoryFixture)).toStrictEqual(itemEntityFixture)
  })

  it('should create an list of entity when itemsRepository is provided', () => {
    expect(createItems([] as ItemsRepository)).toStrictEqual(
      itemsEntityEmptyFixture,
    )
  })

  it('should create an list of entity when itemsRepository is provided', () => {
    expect(createItems(itemsRepositoryFixture)).toStrictEqual(
      itemsEntityFixture,
    )
  })
})
