import express, { Application } from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import { itemsRouter, itemRouter } from '@/application/controllers'

const app: Application = express()
const port = process.env.PORT || 8000
const corsOptions = {
  origin: ['http://localhost:3000'],
}

app.use(cors(corsOptions))

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.use('/api/', itemsRouter)
app.use('/api/', itemRouter)

app.listen(port)

module.exports = app
