import { Router } from "express";
import {
   getAllReviewsHandler,
   createReviewHandler,
   updateReviewHandler
} from "./reviews.controller";

const router = Router();

router.get("/", getAllReviewsHandler);
router.post("/", createReviewHandler);
router.put("/", updateReviewHandler);

export default router;
