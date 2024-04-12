import express from 'express'
import { fileValidator } from './file.middleware'

const fileRouter = express.Router()

fileRouter.post('/name', fileValidator)

export default fileRouter
