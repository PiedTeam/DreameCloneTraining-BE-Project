import { NextFunction, Request, Response } from 'express'
import HTTP_STATUS from '../message/httpStatus'
import File from './file.schema'

export function fileValidator(req: Request, res: Response, next: NextFunction) {
  const file = req.file
  if (file) {
    const fileInstance = new File(file)
    if (!fileInstance.validateName()) {
      const result = {
        message: 'Invalid file name',
        describe: 'File name must follow by <Category Dreame.vi/en.xls/xlsx/cvs>'
      }
      return res.status(HTTP_STATUS.BAD_REQUEST).json(result)
    }
    if (!fileInstance.validateSize()) {
      const result = {
        message: 'Invalid file size',
        describe: 'File size must be smaller or equal than 10MB'
      }
      return res.status(HTTP_STATUS.BAD_REQUEST).json(result)
    }
    //check file is open or corrupted
    if (!fileInstance.validateOpenFile()) {
      const result = {
        message: 'Invalid file',
        describe: 'File is corrupted'
      }
      return res.status(HTTP_STATUS.BAD_REQUEST).json(result)
    }
    return res.status(HTTP_STATUS.OK).send({
      message: 'File is valid',
      file: fileInstance.getFile
    })
  }
  return res.status(HTTP_STATUS.BAD_REQUEST).send({
    message: 'File is required'
  })
}
