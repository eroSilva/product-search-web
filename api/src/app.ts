import express, { Application } from 'express'
import cookieParser from 'cookie-parser'
import { itemsRouter, itemRouter } from '@routes'

const app: Application = express()
const port = process.env.PORT || 8000

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.use('/api/', itemsRouter)
app.use('/api/', itemRouter)

app.listen(port, () => {
  console.log(`API server started at http://localhost:${port}`)
})

module.exports = app
