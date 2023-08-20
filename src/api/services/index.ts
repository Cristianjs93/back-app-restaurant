import { Router } from 'express';
import {
   getAllServicesHandler,
   getServiceByIdHandler,
} from './services.controllers';

const router = Router();

router.get('/', getAllServicesHandler);
router.get('/:id', getServiceByIdHandler);

export default router;
