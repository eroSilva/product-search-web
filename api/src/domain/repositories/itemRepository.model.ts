interface Paging {
  total?: number
  offset?: number
  limit?: number
  primary_results?: number
}

interface Installments {
  quantity?: number
  amount?: number
  rate?: number
  currency_id?: string
}

interface Shipping {
  free_shipping?: boolean
  mode?: string
  tags?: string[]
  logistic_type?: string
  store_pick_up?: boolean
}

interface Value {
  id?: string
  name?: string
  source?: number
  struct?: unknown
}

interface Attribute {
  name?: string
  values?: Value[]
  value_id?: string
  value_name?: string
  value_struct?: null
  attribute_group_id?: string
  attribute_group_name?: string
  source?: number
  id?: string
}

interface DifferentialPricing {
  id?: number
}

interface Seller {
  id?: number
  nickname?: string
  power_seller_status?: string | null
  car_dealer?: boolean
  real_estate_agency?: boolean
  tags?: string[]
}

interface State {
  id?: string
  name?: string
}

interface City {
  id?: string | null
  name?: string
}

export interface ItemRepository {
  id?: string
  site_id?: string
  title?: string
  price?: number
  currency_id?: string
  available_quantity?: number
  buying_mode?: string
  listing_type_id?: string
  stop_time?: string
  condition?: string
  permalink?: string
  thumbnail?: string
  accepts_mercadopago?: boolean
  installments?: Installments
  shipping?: Shipping
  attributes?: Attribute[]
  differential_pricing?: DifferentialPricing
  original_price?: null
  category_id?: string
  official_store_id?: number | null
  catalog_product_id?: string
  catalog_listing?: boolean
  seller?: Seller
  state?: State
  city?: City
  latitude?: string
  longitude?: string
  descriptions?: string[]
}

export interface ItemsRepository {
  site_id?: string
  paging?: Paging
  results?: ItemRepository[]
}
