import { Router } from 'express';
import { hasRole, isAuthenticated } from '../../auth/auth.controller';
import {
  getAllUsersHandler,
  getUserByIdHandler,
  getUserByEmailHandler,
  createUserHandler,
  updateUserHandler,
  deleteUserHandler,
} from './user.controller';

const router = Router();

router.get('/', isAuthenticated, hasRole(['ADMIN']), getAllUsersHandler);
router.get('/:id', isAuthenticated, hasRole(['ADMIN']), getUserByIdHandler);
router.get('/user', isAuthenticated, hasRole(['ADMIN']), getUserByEmailHandler);
router.post('/', createUserHandler);
router.put('/', isAuthenticated, updateUserHandler);
router.delete('/', isAuthenticated, hasRole(['ADMIN']), deleteUserHandler);

export default router;
