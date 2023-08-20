import { Router } from "express";
import {
  getAllProductsHandler,
  getProductByIdHandler,
  createProductHandler,
  updateProductHandler,
  deleteProductHandler
} from "./checkout.controller";

const router = Router()

router.get('/', getAllProductsHandler)
router.get('/:id', getProductByIdHandler)
router.post('/', createProductHandler)
router.put('/', updateProductHandler)
router.delete('/', deleteProductHandler)

export default router