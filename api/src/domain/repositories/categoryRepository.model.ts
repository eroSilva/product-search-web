interface PathFromRoot {
  id?: string | null
  name?: string | null
}

export interface CategoryRepository {
  id?: string | null
  name?: string | null
  picture?: string | null
  permalink?: string | null
  total_items_in_this_category?: number | null
  path_from_root?: PathFromRoot[] | null
}
