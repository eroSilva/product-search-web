import { Item, ItemDetailed } from '@models/ItemModel'

export interface ItemsResponse {
  query: string
  categories: string[]
  items: Item[]
}

export interface ItemResponse {
  categories: string[]
  item: ItemDetailed
}
