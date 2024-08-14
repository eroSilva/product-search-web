interface Price {
  currency?: string | null
  amount?: number | null
  decimals?: number | null
}

interface Attribute {
  name?: string | null
  value?: string | null
}

export interface ItemEntity {
  id?: string | null
  title?: string | null
  categories?: string[] | null
  price?: Price | null
  picture_url?: string | null
  condition?: string | null
  free_shipping?: boolean | null
  sold_qty?: number | null
  description?: string | null
  seller?: string | null
  attributes?: Attribute[] | null
  permalink?: string | null
}

export interface ItemsEntity {
  query: string
  categories: string[]
  items: ItemEntity[]
}
