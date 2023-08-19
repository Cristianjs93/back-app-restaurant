import { Router } from "express";

import {
   getAllFacilitiesHandler,
   getFacilityByIdHandler
} from "./facilities.controller";

const router = Router();

router.get("/", getAllFacilitiesHandler);
router.get("/:id", getFacilityByIdHandler);

export default router;
