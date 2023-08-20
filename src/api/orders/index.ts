import { Router } from 'express';
import { getAllOrdersHandler, getOrderByIdHandler } from './orders.controller';

const router = Router();

router.get('/', getAllOrdersHandler);
router.get('/:id', getOrderByIdHandler);

export default router;
