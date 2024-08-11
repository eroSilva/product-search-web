import express, { Request, Response, Application } from 'express'
import { getItems, getItem } from '../services/itemServices'

const app: Application = express()

export const itemsRouter = app.get(
  '/items',
  async (req: Request, res: Response) => {
    const query = req.query.search

    if (!query) {
      return res.status(400).send('Missing required query parameter: search')
    }

    try {
      const data = await getItems(String(query))
      res.json(data)
    } catch (error) {
      const message = error instanceof Error ? error.message : ''
      res.status(500).send(message)
    }
  },
)

export const itemRouter = app.get(
  '/item/:id',
  async (req: Request, res: Response) => {
    const id = req.params.id

    try {
      const data = await getItem(id)
      res.json(data)
    } catch (error) {
      const message = error instanceof Error ? error.message : ''
      res.status(500).send(message)
    }
  },
)
