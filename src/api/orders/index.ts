import { Router } from 'express';
import {
   getAllOrdersHandler,
   getOrderByIdHandler,
   createOrderHandler,
} from './orders.controller';

const router = Router();

router.get('/', getAllOrdersHandler);
router.get('/:id', getOrderByIdHandler);
router.post('/', createOrderHandler);

export default router;
