import { Router } from 'express';
import {
  getAllFacilitiesHandler,
  getFacilityByIdHandler,
  createFacilityHandler,
  updateFacilityHandler,
  deleteFacilityHandler,
} from './facilities.controller.ts';

const router = Router();

router.get('/', getAllFacilitiesHandler);
router.get('/:id', getFacilityByIdHandler);
router.post('/', createFacilityHandler);
router.put('/', updateFacilityHandler);
router.delete('/', deleteFacilityHandler);

export default router;
