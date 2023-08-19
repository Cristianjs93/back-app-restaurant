import { Router } from "express";
import {
   getAllReviewsHandler,
   createReviewHandler
} from "./reviews.controller";

const router = Router();

router.get("/", getAllReviewsHandler);
router.post("/", createReviewHandler);

export default router;
