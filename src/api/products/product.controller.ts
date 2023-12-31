import { Request, Response } from 'express';
import errorHandler from '../../utils/errorHandler';
import { AuthRequestProducts } from '../../auth/auth.types';

import {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from './product.service';

export async function getAllProductsHandler(req: Request, res: Response) {
  try {
    const products = await getAllProducts();
    res.status(200).json(products);
  } catch (exception: unknown) {
    const message = errorHandler(exception);
    res.status(400).json({ message });
  }
}

export async function getProductByIdHandler(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const product = await getProductById(id);
    if (!product) {
      return res.status(404).json({
        message: 'Product not found',
      });
    }

    res.status(200).json(product);
  } catch (exception: unknown) {
    const message = errorHandler(exception);
    res.status(400).json({ message });
  }
}

export async function createProductHandler(req: Request, res: Response) {
  try {
    const data = req.body;
    const product = await createProduct(data);

    res.status(201).json(product);
  } catch (exception: unknown) {
    const message = errorHandler(exception);
    res.status(400).json({ message });
  }
}

export async function updateProductHandler(req: Request, res: Response) {
  try {
    const data = req.body;
    const product = await updateProduct(data);

    if (!product) {
      return res.status(404).json({
        message: 'Product not found',
      });
    }

    res.status(200).json(product);
  } catch (exception: unknown) {
    const message = errorHandler(exception);
    res.status(400).json({ message });
  }
}

export async function deleteProductHandler(
  req: AuthRequestProducts,
  res: Response,
) {
  try {
    const { id } = req.body;
    const product = await deleteProduct(id);

    if (!product) {
      return res.status(404).json({
        message: 'Product not found',
      });
    }

    res.status(200).json(product);
  } catch (exception: unknown) {
    const message = errorHandler(exception);
    res.status(400).json({ message });
  }
}
