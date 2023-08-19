import { Router } from 'express';
import healthcheckController from './healthcheck.controller.ts';

const router = Router();

router.get('/', healthcheckController.healthcheckHandler);

export default router;
