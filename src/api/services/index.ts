import { Router } from 'express';
import { getAllServicesHandler } from './services.controllers';

const router = Router();

router.get('/', getAllServicesHandler);

export default router;
