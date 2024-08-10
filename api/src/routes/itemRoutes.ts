import express, { Request, Response, Application } from 'express'
import { getItems } from '@controllers/ItemController'

const app: Application = express()

export const itemsRouter = app.get('/items', getItems)

export const itemRouter = app.get(
  '/item/:id',
  (req: Request, res: Response) => {
    res.send(`Item route with id ${req.params.id}`)
  },
)
