import { Application } from "express";
import healthcheckRouter from "./api/healthcheck";
import RestaurantsRouter from "./api/restaurants";
import FacilitiesRouter from "./api/facilities";

const routes = (app: Application) => {
   app.use("/api/healthcheck", healthcheckRouter);
   app.use("/api/restaurants", RestaurantsRouter);
   app.use("/api/facilities", FacilitiesRouter);
};

export default routes;
