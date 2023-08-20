import { Router } from 'express';
import {
   getAllOrdersHandler,
   getOrderByIdHandler,
   createOrderHandler,
   updateOrderHandler,
} from './orders.controller';

const router = Router();

router.get('/', getAllOrdersHandler);
router.get('/:id', getOrderByIdHandler);
router.post('/', createOrderHandler);
router.put('/', updateOrderHandler);

export default router;
