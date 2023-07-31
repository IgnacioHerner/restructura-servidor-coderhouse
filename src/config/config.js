import dotenv from 'dotenv'

dotenv.config()

export const CLIENT_SECRET = process.env.CLIENT_SECRET
export const CLIENT_ID = process.env.CLIENT_ID
export const MONGO_URI = process.env.MONGO_URI
export const MONGO_DB_NAME = process.env.MONGO_DB_NAME
export const PORT = process.env.PORT
