import { Application } from 'express';
import healthcheckRouter from './api/healthcheck/index';
import restaurantsRouter from './api/restaurants/index';
import facilitiesRouter from './api/facilities/index';
import reviewsRouter from './api/reviews/index';
import servicesRouter from './api/services/index';
import ordersRouter from './api/orders/index';
import authLocalRouter from './auth/local/index';
import userRouter from './api/users/index';
import productsRouter from './api/products/index';
import rolesRouter from './api/roles/index';

const routes = (app: Application) => {
  app.use('/api/healthcheck', healthcheckRouter);
  app.use('/api/restaurants', restaurantsRouter);
  app.use('/api/facilities', facilitiesRouter);
  app.use('/api/reviews', reviewsRouter);
  app.use('/api/services', servicesRouter);
  app.use('/api/orders', ordersRouter);
  app.use('/api/auth/local', authLocalRouter);
  app.use('/api/users', userRouter);
  app.use('/api/products', productsRouter);
  app.use('/api/roles', rolesRouter);
};

export default routes;
