import { Router } from "express";

import {
   getAllFacilitiesHandler,
   getFacilityByIdHandler,
   createFacilityHandler
} from "./facilities.controller";

const router = Router();

router.get("/", getAllFacilitiesHandler);
router.get("/:id", getFacilityByIdHandler);
router.post("/", createFacilityHandler);

export default router;
