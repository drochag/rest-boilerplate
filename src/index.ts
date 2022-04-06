import express, { Express } from 'express'
import * as dotenv from 'dotenv'
import api from './api'

dotenv.config()

const app: Express = express()
const port = process.env.PORT

app.use(api)

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`)
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`)
})
