import axios from 'axios';
import { Request, Response, Router } from 'express';
import { getAllController, getByIdController } from './product.controller';
import { getByIdValidator } from './product.middleware';

const productRouter = Router();

// eslint-disable-next-line @typescript-eslint/no-misused-promises
productRouter.get('/all', getAllController);

// eslint-disable-next-line @typescript-eslint/no-misused-promises
productRouter.get('/:id', getByIdValidator, getByIdController);

// eslint-disable-next-line @typescript-eslint/no-misused-promises
productRouter.get('/en/status', async (_: Request, res: Response) => {
  try {
    const response = await axios.get(
      'https://dreameclonetraining-communication-server.onrender.com/api/product_en/status',
    );
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching data from external API');
  }
});

export default productRouter;
