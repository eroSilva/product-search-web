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
  benefits?: string | null
  promise?: string | null
  shipping_score?: number | null
  logistic_type?: string
  store_pick_up?: boolean
}

interface Value {
  id?: string | null
  name?: string
  source?: number
  struct?: unknown
}

interface ValueStruct {
  number?: number
  unit?: string
}

interface Attribute {
  name?: string
  values?: Value[]
  value_id?: string | null
  value_name?: string
  value_struct?: ValueStruct | null
  value_type?: string
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

interface Conditions {
  eligible?: boolean
  context_restrictions?: string[]
  start_time?: string
  end_time?: string
}

interface Metadata {
  promotion_id?: string
  promotion_type?: string
}

interface SalePrice {
  price_id?: string
  amount?: number
  conditions?: Conditions
  currency_id?: string
  exchange_rate?: null
  payment_method_prices?: string[]
  payment_method_type?: string
  regular_amount?: number
  type?: string
  metadata?: Metadata
}

interface Sort {
  id?: string
  name?: string
}

interface FilterValue {
  id?: string
  name?: string
  results?: number
}

interface Filter {
  id?: string
  name?: string
  type?: string
  values?: FilterValue[]
}

interface ProductInfo {
  id?: string
  score?: number
  status?: string
}

interface PDPTracking {
  group?: boolean
  product_info: ProductInfo[]
}

interface Picture {
  id: string
  url: string
  secure_url: string
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
  thumbnail_id?: string
  pictures?: Picture[]
  domain_id?: string
  order_backend?: number
  sanitized_title?: string
  sale_price?: SalePrice | null
  official_store_name?: string
  winner_item_id?: string | null
  discounts?: string | null
  promotions?: string[]
  inventory_id?: string | null
  use_thumbnail_id?: boolean
  accepts_mercadopago?: boolean
  installments?: Installments
  shipping?: Shipping
  attributes?: Attribute[]
  differential_pricing?: DifferentialPricing
  original_price?: number | null
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
  query?: string
  country_default_time_zone?: string
  paging?: Paging
  results?: ItemRepository[]
  sort?: Sort | null
  available_sorts?: Sort[]
  filters?: unknown[]
  available_filters?: Filter[]
  pdp_tracking?: PDPTracking
  user_context?: unknown
}
