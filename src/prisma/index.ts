import { PrismaClient } from '@prisma/client'
import * as dotenv from 'dotenv'

dotenv.config()

const datasource = { db: { url: process.env.DATABASE_URL }}

const prisma = new PrismaClient({
  datasources: datasource,
})

export default prisma
