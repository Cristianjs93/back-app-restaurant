import { Router } from "express";
import { getAllReviewsHandler } from "./reviews.controller";

const router = Router();

router.get("/", getAllReviewsHandler);

export default router;
