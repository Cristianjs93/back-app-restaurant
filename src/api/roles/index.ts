import { Router } from 'express';
import { getAllRoles } from './roles.controller.ts';

const router = Router();

router.get('/', getAllRoles);

export default router;
