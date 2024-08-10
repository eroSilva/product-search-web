import express, { Response, Application } from 'express'

const app: Application = express()

export const itemsRouter = app.get('/items', (_, res: Response) => {
  res.send('Items route')
})
