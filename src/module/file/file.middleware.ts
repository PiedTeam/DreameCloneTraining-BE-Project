import { NextFunction, Request, Response } from 'express'
import { validateFileName } from './file.controller'
import { FileName } from './file.model'

// const fileName = new FileName('Products Dreame vi.xlsx')

export function fileValidator(req: Request, res: Response, _: NextFunction) {
  const { fileName } = req.body
  const result = validateFileName(fileName)
  if (result) {
    return res.status(200).send('File name is valid')
  } else {
    res.status(400).json('Invalid file name')
  }
}
