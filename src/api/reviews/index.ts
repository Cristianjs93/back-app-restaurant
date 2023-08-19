import { Router } from "express";
import {
   getAllReviewsHandler,
   getReviewByIdHandler,
   createReviewHandler,
   updateReviewHandler,
   deleteReviewHandler
} from "./reviews.controller";

const router = Router();

router.get("/", getAllReviewsHandler);
router.get("/:id", getReviewByIdHandler);
router.post("/", createReviewHandler);
router.put("/", updateReviewHandler);
router.delete("/", deleteReviewHandler);

export default router;
