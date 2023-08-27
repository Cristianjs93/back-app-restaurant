import { Request, Response } from 'express';
import errorHandler from '../../utils/errorHandler.ts';
import { AuthRequestProducts } from '../../auth/auth.types.ts';

import {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from './product.service.ts';

export async function getAllProductsHandler(req: Request, res: Response) {
  try {
    const products = await getAllProducts();
    return res.status(200).json(products);
  } catch (exception: unknown) {
    const message = errorHandler(exception);
    return res.status(400).json({ message });
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

    return res.status(200).json(product);
  } catch (exception: unknown) {
    const message = errorHandler(exception);
    return res.status(400).json({ message });
  }
}

export async function createProductHandler(req: Request, res: Response) {
  try {
    const data = req.body;
    const product = await createProduct(data);

    return res.status(201).json(product);
  } catch (exception: unknown) {
    const message = errorHandler(exception);
    return res.status(400).json({ message });
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

    return res.status(200).json(product);
  } catch (exception: unknown) {
    const message = errorHandler(exception);
    return res.status(400).json({ message });
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

    return res.status(200).json(product);
  } catch (exception: unknown) {
    const message = errorHandler(exception);
    return res.status(400).json({ message });
  }
}
