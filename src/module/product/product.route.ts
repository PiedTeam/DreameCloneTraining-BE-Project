import { Router } from 'express';

const productRouter = Router();

productRouter.get('/product/en/error', (req, res) => {
  return res.status(400).json({
    data: [],
  });
});

export default productRouter;
