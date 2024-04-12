import bodyParser from 'body-parser'
import cors from 'cors'
import { config } from 'dotenv'
import express from 'express'
import fileRouter from './module/file/file.route'

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

// server can handle the req.body
app.use(bodyParser.urlencoded({ extended: true }))

//app handler
app.use(express.json())
//route
app.use('/file', fileRouter)

app.use('/', (_, res) => {
  res.send('This is home page')
})
//database connect

//Port
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
