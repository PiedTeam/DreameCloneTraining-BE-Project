import express from 'express'
import { FileNameList } from './file.model'

const fileRouter = express.Router()

const fileNameList = new FileNameList([
  'Products Dreame vi.xlsx',
  'Products Dreame en.xls',
  'Products Dreame vi.csv',
  'Orders Dreame vi.xlsx',
  'Dreame en.csv',
  'Dreame en.ppt',
  'Dreame en.doc'
])

fileRouter.get('/name', (req, res) => {
  res.json(fileNameList.validateFileNames())
})

export default fileRouter
