import { Router } from 'express';
import { healthcheckHandler } from './healthcheck.controller.ts';

const router = Router();

router.get('/', healthcheckHandler);

export default router;
