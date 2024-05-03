import { Router } from 'express';
import { getAllController, getByIdController } from './product.controller';
import { getByIdValidator } from './product.middleware';

const productRouter = Router();

// eslint-disable-next-line @typescript-eslint/no-misused-promises
productRouter.get('/all', getAllController);

// eslint-disable-next-line @typescript-eslint/no-misused-promises
productRouter.get('/:id', getByIdValidator, getByIdController);

export default productRouter;
