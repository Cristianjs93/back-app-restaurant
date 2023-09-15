import { Router } from 'express';
import {
  getAllOrdersHandler,
  getOrderByIdHandler,
  createOrderHandler,
  updateOrderHandler,
  deleteOrderHandler,
} from './orders.controller';
import { hasRole, isAuthenticated } from '../../auth/auth.controller';

const router = Router();

router.get('/', isAuthenticated, hasRole(['ADMIN']), getAllOrdersHandler);
router.get('/:id', getOrderByIdHandler);
router.post(
  '/',
  isAuthenticated,
  hasRole(['ADMIN', 'CLIENT']),
  createOrderHandler,
);
router.put(
  '/',
  isAuthenticated,
  hasRole(['ADMIN', 'CLIENT']),
  updateOrderHandler,
);
router.delete(
  '/',
  isAuthenticated,
  hasRole(['ADMIN', 'CLIENT']),
  deleteOrderHandler,
);

export default router;
