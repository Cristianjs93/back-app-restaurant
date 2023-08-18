import { Application } from "express";
import healthcheckRouter from "./api/healthcheck";
import authLocalRouter from "./auth/local";
import usersRouter from "./api/users"

const routes = (app: Application) => {
   app.use("/api/healthcheck", healthcheckRouter);
   app.use('/auth/local', authLocalRouter);
   app.use("/createUser", usersRouter);
};

export default routes;
