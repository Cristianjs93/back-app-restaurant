import { Router } from 'express';
import {
  getAllOrdersHandler,
  getOrderByIdHandler,
  createOrderHandler,
  updateOrderHandler,
  deleteOrderHandler,
} from './orders.controller.ts';

const router = Router();

router.get('/', getAllOrdersHandler);
router.get('/:id', getOrderByIdHandler);
router.post('/', createOrderHandler);
router.put('/', updateOrderHandler);
router.delete('/', deleteOrderHandler);

export default router;
