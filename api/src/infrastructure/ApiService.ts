import axios from 'axios'

export const instance = axios.create({
  baseURL: 'https://api.mercadolibre.com',
})

export const getData = async <T>(endpoint: string): Promise<T> => {
  const response = await instance.get<T>(endpoint)
  return response.data
}
