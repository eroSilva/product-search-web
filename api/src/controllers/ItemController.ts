import { Request, Response } from 'express'
import { getData } from '@infrastructure/ApiService'
import { ItemsResponse } from '@models'

export const getItems = async (
  req: Request,
  res: Response<ItemsResponse | string>,
) => {
  const query = req.query.search

  if (!query) {
    return res.status(400).send('Missing required query parameter: search')
  }

  try {
    const data = await getData<any>(`search?q=${query}`)

    res.json(data)
  } catch {
    res.status(500).send('Error fetching data from API')
  }
}
