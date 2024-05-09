import { Request, Response } from 'express';
import HTTP_STATUS from '../message/httpStatus';
import { validateFile } from './file.controller';
import File from './schema/file.schema';

export function uploadValidator(req: Request, res: Response): void {
  const file = req.file;
  if (!file) {
    res.status(HTTP_STATUS.BAD_REQUEST).send({
      message: 'File is required',
    });
  } else {
    const fileInstance = new File(file);
    const validateResult = validateFile(fileInstance);
    if (validateResult.isValid) {
      res.status(HTTP_STATUS.OK).send({
        message: 'File is valid',
        file: fileInstance.getFile,
      });
    } else {
      res.status(HTTP_STATUS.BAD_REQUEST).json(validateResult.result);
    }
  }
}

export function exportValidator(req: Request, res: Response): void {
  const file = req.file;
  if (!file) {
    res.status(HTTP_STATUS.BAD_REQUEST).send({
      message: 'File is required',
    });
  } else {
    res.status(HTTP_STATUS.OK).send({
      message: 'Export file success',
    });
  }
}
