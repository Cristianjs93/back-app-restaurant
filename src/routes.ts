import { Application } from "express";
import healthcheckRouter from "./api/healthcheck";
import RestaurantsRouter from "./api/restaurants";
import FacilitiesRouter from "./api/facilities";
import ReviewsRouter from "./api/reviews";


const routes = (app: Application) => {
   app.use("/api/healthcheck", healthcheckRouter);
   app.use("/api/restaurants", RestaurantsRouter);
   app.use("/api/facilities", FacilitiesRouter);
   app.use("/api/reviews", ReviewsRouter);
};

export default routes;
