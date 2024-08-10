import express, { Request, Response, Application } from 'express'

const app: Application = express()

export const itemRouter = app.get(
  '/item/:id',
  (req: Request, res: Response) => {
    res.send(`Item route with id ${req.params.id}`)
  },
)
