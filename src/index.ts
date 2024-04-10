import { config } from 'dotenv'
import databaseService from './module/database/database.service'
import express from 'express'
import cors from 'cors'

config()
const app = express()
const PORT = process.env.PORT || 4000
//cors
const corsOptions = {
  origin: `http://localhost:${PORT}`,
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200
}
//import express

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
