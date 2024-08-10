export interface Price {
  currency: string
  amount: number
  decimals: number
}

export interface Item {
  id: string
  title: string
  price: Price
  picture_url: string
  condition: string
  free_shipping: boolean
}

export interface ItemDetailed extends Item {
  sold_qty: number
  description: string
}

export interface ItemsResponse {
  query: string
  categories: string[]
  items: Item[]
}

export interface ItemResponse {
  categories: string[]
  item: ItemDetailed
}
