import { NextFunction, Request, Response } from 'express'
import HTTP_STATUS from '../message/httpStatus'
import { validateFile } from './file.controller'
import File from './file.schema'

export function fileValidator(req: Request, res: Response, next: NextFunction) {
  const file = req.file
  if (file) {
    const fileInstance = new File(file)
    const validateResult = validateFile(fileInstance)
    if (validateResult.isValid) {
      return res.status(HTTP_STATUS.OK).send({
        message: 'File is valid',
        file: fileInstance.getFile
      })
    } else {
      return res.status(HTTP_STATUS.BAD_REQUEST).json(validateResult.result)
    }
  }
  return res.status(HTTP_STATUS.BAD_REQUEST).send({
    message: 'File is required'
  })
}
