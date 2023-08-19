import { Router } from "express";
import {
   getAllReviewsHandler,
   getReviewByIdHandler,
   createReviewHandler,
   updateReviewHandler
} from "./reviews.controller";

const router = Router();

router.get("/", getAllReviewsHandler);
router.get("/:id", getReviewByIdHandler);
router.post("/", createReviewHandler);
router.put("/", updateReviewHandler);

export default router;
