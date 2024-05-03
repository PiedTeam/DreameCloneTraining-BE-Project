import { NextFunction, Request, Response } from 'express';
import { IResponse } from '../response/response.schema';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type, @typescript-eslint/explicit-module-boundary-types
export function getByIdValidator(req: Request, res: Response, next: NextFunction) {
  const id = req.params.id;
  if (!id) {
    const errorResponse: IResponse = {
      message: 'id is required',
    };
    return res.status(400).send(errorResponse);
  } else {
    next();
  }
}
