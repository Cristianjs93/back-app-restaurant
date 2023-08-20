import { Router } from 'express';
import {
   getAllServicesHandler,
   getServiceByIdHandler,
   createServiceHandler,
   updateServiceHandler,
   deleteServiceHandler,
} from './services.controllers';

const router = Router();

router.get('/', getAllServicesHandler);
router.get('/:id', getServiceByIdHandler);
router.post('/', createServiceHandler);
router.put('/', updateServiceHandler);
router.delete('/', deleteServiceHandler);
export default router;
