import { Router } from 'express';
import { getAllOrdersHandler } from './orders.controller';

const router = Router();

router.get('/', getAllOrdersHandler);

export default router;
