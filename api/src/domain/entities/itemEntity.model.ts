export interface Price {
  currency?: string | null
  amount?: number | null
  decimals?: number | null
}

export interface ItemEntity {
  id?: string | null
  title?: string | null
  category?: string | null
  price?: Price | null
  picture_url?: string | null
  condition?: string | null
  free_shipping?: boolean | null
  sold_qty?: number | null
  description?: string | null
}

export interface ItemsEntity {
  query: string
  categories: string[]
  items: ItemEntity[]
}
