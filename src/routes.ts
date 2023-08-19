import { Application } from "express";
import healthcheckRouter from "./api/healthcheck";
import RestaurantsRouter from "./api/restaurants";
import ReviewsRouter from "./api/reviews";

const routes = (app: Application) => {
   app.use("/api/healthcheck", healthcheckRouter);
   app.use("/api/restaurants", RestaurantsRouter);
   app.use("/api/reviews", ReviewsRouter);
};

export default routes;
