import express, { Request, Response, Application } from 'express'
import { getItems, getItem } from '@application/services/itemServices'

const app: Application = express()

export const itemsRouter = app.get(
  '/items',
  async (req: Request, res: Response) => {
    const query = req.query.search

    if (!query) {
      return res.status(400).send('Missing required query parameter: search')
    }

    if (typeof query !== 'string') {
      return res.status(400).send('Invalid value in query parameter: search')
    }

    try {
      const data = await getItems(query)
      res.json(data)
    } catch (messages) {
      res.status(500).send(messages as string)
    }
  },
)

export const itemRouter = app.get(
  '/item/:id',
  async (req: Request, res: Response) => {
    const id = req.params.id

    if (!id) {
      return res.status(400).send('Missing required param: id')
    }

    try {
      const data = await getItem(id)
      res.json(data)
    } catch (messages) {
      res.status(500).send(messages as string)
    }
  },
)
