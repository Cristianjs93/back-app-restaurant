import { Application } from 'express';
import healthcheckRouter from './api/healthcheck/index.ts';
import authLocalRouter from './auth/local/index.ts';
import userRouter from './api/users/index.ts';

const routes = (app: Application) => {
  app.use('/api/healthcheck', healthcheckRouter);
  app.use('/auth/local', authLocalRouter);
  app.use('/createUser', userRouter);
};

export default routes;
