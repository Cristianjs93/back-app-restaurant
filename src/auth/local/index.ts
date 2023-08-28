import { Router } from 'express';

import loginHandler from './local.controller';

const route = Router();

route.post('/login', loginHandler.loginHandler);

export default route;
