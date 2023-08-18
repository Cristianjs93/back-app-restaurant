import { Router } from "express";
import {
   getAllRestaurantsHandler,
   getRestaurantByIdHandler,
   createRestaurantHandler,
   updateRestaurantHandler,
   deleteRestaurantHandler
} from "./restaurants.controller";

const router = Router();

router.get("/", getAllRestaurantsHandler);
router.get("/:id", getRestaurantByIdHandler);
router.post("/", createRestaurantHandler);
router.put("/", updateRestaurantHandler);
router.delete("/", deleteRestaurantHandler);

export default router;
