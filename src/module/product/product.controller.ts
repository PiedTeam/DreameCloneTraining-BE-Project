import { config } from 'dotenv';
import { Request, Response } from 'express';
import databaseService from '~/service/database.service';
config();

export async function getAllController(req: Request, res: Response): Promise<Response> {
  try {
    const products = await databaseService.getAllProducts();
    return res.status(200).send(products);
  } catch (err) {
    console.log(err);
    return res.status(500).send({
      message: 'Internal Server Error',
    });
  }
}

export async function getByIdController(req: Request, res: Response): Promise<Response> {
  try {
    const id = req.params.id;
    const product = await databaseService.getProductById(id);
    if (product) {
      return res.status(200).send(product);
    } else {
      return res.status(404).send({
        message: 'Product not found',
      });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).send({
      message: 'Internal Server Error',
    });
  }
}
