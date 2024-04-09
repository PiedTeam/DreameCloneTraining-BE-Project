import swaggerUi from 'swagger-ui-express'
import { config } from 'dotenv'
import databaseService from './module/database/database.service'
import express from 'express'
import cors from 'cors'
import YAML from 'yaml'
import fs from 'fs'
import path from 'path'
import swaggerJSDoc from 'swagger-jsdoc'

config()
//cors
const corsOptions = {
  origin: 'http://localhost:4000' || 'http://localhost:5173',
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200
}
//import express
const app = express()
const PORT = process.env.PORT || 4000
app.use(cors(corsOptions))

//app handler
app.use(express.json())
//route

//database connect
databaseService.connect()

//Port
app.listen(PORT, () => {
  console.log(`server này đang chạy trên port:::${PORT}`)
})
