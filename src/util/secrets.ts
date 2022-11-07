import dotenv from 'dotenv-flow'

dotenv.config()

export const PORT = process.env.PORT || 2500;

export const MONGO_ID = process.env.MONGO_ID;
export const MONGO_PASS = process.env.MONGO_PASS;