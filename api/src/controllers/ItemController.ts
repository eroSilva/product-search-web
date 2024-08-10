import { getData } from '@infrastructure/ApiService'
import { ItemsResponse, ItemResponse, SearchResponse } from '@models'

const extractDecimals = (value: number): number => {
  const patter = /\.(.*)/
  const [, decimals] = String(value).match(patter) || []
  const result = decimals?.padEnd(2, '0') || '0'

  return parseInt(result)
}

export const getItems = async (
  query: string,
): Promise<ItemsResponse | string> => {
  try {
    const { results } = await getData<SearchResponse>(
      `/sites/MLB/search?q=${query}`,
    )

    const categories = results?.map(({ category_id }) => category_id || '')
    const items = results?.map(result => ({
      id: result.id,
      title: result.title,
      price: {
        currency: result.currency_id,
        amount: Math.trunc(result?.price || 0),
        decimals: extractDecimals(result?.price || 0),
      },
      picture_url: result.thumbnail,
      condition: result.condition,
      free_shipping: result.shipping?.free_shipping,
    }))

    return {
      query,
      categories: categories || [],
      items: items || [],
    }
  } catch {
    return 'Error fetching data from API'
  }
}

export const getItem = async (id: string) => {
  try {
    const data = await getData<SearchResponse>(`/items/${id}`)

    return data
  } catch {
    return 'Error fetching data from API'
  }
}
