import { Router } from 'express';
import {
  getAllRestaurantsHandler,
  getRestaurantByIdHandler,
  createRestaurantHandler,
  updateRestaurantHandler,
  deleteRestaurantHandler,
} from './restaurants.controller';
import { pagination } from '../../pagination/pagination.controller';
import { hasRole } from '../../auth/auth.controller';

const router = Router();

router.get('/', pagination(), getAllRestaurantsHandler);
router.get('/:id', getRestaurantByIdHandler);
router.post('/', hasRole(['ADMIN']), createRestaurantHandler);
router.put('/', hasRole(['ADMIN', 'RESTAURANT']), updateRestaurantHandler);
router.delete('/', hasRole(['ADMIN', 'RESTAURANT']), deleteRestaurantHandler);

export default router;
