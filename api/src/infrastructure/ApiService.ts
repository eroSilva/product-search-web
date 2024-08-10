import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://api.mercadolibre.com/sites/MLB',
})

export const getData = async <T>(endpoint: string): Promise<T> => {
  const response = await instance.get<T>(endpoint)
  return response.data
}
