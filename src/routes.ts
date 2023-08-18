import { Application } from "express";
import healthcheckRouter from "./api/healthcheck";
import RestaurantsRouter from "./api/restaurants";

const routes = (app: Application) => {
   app.use("/api/healthcheck", healthcheckRouter);
   app.use("/api/restaurants", RestaurantsRouter);
};

export default routes;
