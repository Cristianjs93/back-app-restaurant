import { Router } from 'express';
import {
   getAllServicesHandler,
   getServiceByIdHandler,
   createServiceHandler,
} from './services.controllers';

const router = Router();

router.get('/', getAllServicesHandler);
router.get('/:id', getServiceByIdHandler);
router.post('/', createServiceHandler);

export default router;
