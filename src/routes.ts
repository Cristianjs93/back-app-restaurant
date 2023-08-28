import { Application } from 'express';
import restaurantsRouter from './api/restaurants/index.ts';
import healthcheckRouter from './api/healthcheck/index.ts';
import facilitiesRouter from './api/facilities/index.ts';
import reviewsRouter from './api/reviews/index.ts';
import servicesRouter from './api/services/index.ts';
import ordersRouter from './api/orders/index.ts';
import authLocalRouter from './auth/local/index.ts';
import userRouter from './api/users/index.ts';
import productsRouter from './api/products/index.ts';
import rolesRouter from './api/roles/index.ts';

const routes = (app: Application) => {
  app.use('/restaurants', restaurantsRouter);
  app.use('/api/healthcheck', healthcheckRouter);
  app.use('/api/facilities', facilitiesRouter);
  app.use('/api/reviews', reviewsRouter);
  app.use('/api/services', servicesRouter);
  app.use('/api/orders', ordersRouter);
  app.use('/api/auth/local', authLocalRouter);
  app.use('/api/createUser', userRouter);
  app.use('/api/products', productsRouter);
  app.use('/api/roles', rolesRouter);
};

export default routes;
