import { Router } from 'express';

import { loginHandler } from './local.controller.ts';

const route = Router();

route.post('/login', loginHandler);

export default route;
