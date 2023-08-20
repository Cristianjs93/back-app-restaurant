import { Application } from 'express';
import healthcheckRouter from './api/healthcheck/index.ts';
import RestaurantsRouter from './api/restaurants/index.ts';
import FacilitiesRouter from './api/facilities/index.ts';
import ReviewsRouter from './api/reviews/index.ts';
import ServicesRouter from './api/services/index.ts';
import authLocalRouter from './auth/local/index.ts';
import userRouter from './api/users/index.ts';

const routes = (app: Application) => {
   app.use('/api/healthcheck', healthcheckRouter);
   app.use('/api/restaurants', RestaurantsRouter);
   app.use('/api/facilities', FacilitiesRouter);
   app.use('/api/reviews', ReviewsRouter);
   app.use('/api/services', ServicesRouter);
   app.use('/auth/local', authLocalRouter);
   app.use('/createUser', userRouter);
};

export default routes;
