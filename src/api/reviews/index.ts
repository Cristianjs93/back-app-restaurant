import { Router } from 'express';
import { hasRole, isAuthenticated } from '../../auth/auth.controller';
import {
  getAllReviewsHandler,
  getReviewByIdHandler,
  getReviewsByRestaurantIdHandler,
  createReviewHandler,
  updateReviewHandler,
  deleteReviewHandler,
} from './reviews.controller';

const router = Router();

router.get('/', isAuthenticated, hasRole(['ADMIN']), getAllReviewsHandler);
router.get('/:id', getReviewByIdHandler);
router.get('/restaurant/:id', getReviewsByRestaurantIdHandler);
router.post(
  '/',
  isAuthenticated,
  hasRole(['ADMIN', 'CLIENT']),
  createReviewHandler,
);
router.put('/', isAuthenticated, hasRole(['ADMIN']), updateReviewHandler);
router.delete('/', isAuthenticated, hasRole(['ADMIN']), deleteReviewHandler);

export default router;
