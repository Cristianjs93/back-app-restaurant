import { Router } from 'express';
import {
  getAllUsersHandler,
  getUserByIdHandler,
  getUserByEmailHandler,
  createUserHandler,
  updateUserHandler,
  deleteUserHandler,
} from './user.controller';

const router = Router();

router.get('/', getAllUsersHandler);
router.get('/:id', getUserByIdHandler);
router.get('/user', getUserByEmailHandler);
router.post('/', createUserHandler);
router.put('/', updateUserHandler);
router.delete('/', deleteUserHandler);

export default router;
