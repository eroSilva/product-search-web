export interface Price {
  currency?: string
  amount?: number
  decimals?: number
}

export interface ItemEntity {
  id?: string
  title?: string
  category?: string
  price?: Price
  picture_url?: string
  condition?: string
  free_shipping?: boolean
  sold_qty?: number
  description?: string
}

export interface ItemsEntity {
  query: string
  categories: string[]
  items: ItemEntity[]
}
