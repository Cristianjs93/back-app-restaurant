import { Request, Response } from "express";
import { Reviews } from "./reviews.types";
import { AuthRequestReviews } from "../../auth/auth.types";
import {
   getAllReviews,
   getReviewById,
   createReview,
   updateReview
} from "./reviews.services";

export async function getAllReviewsHandler(req: Request, res: Response) {
   try {
      const reviews = await getAllReviews();
      res.status(200).json(reviews);
   } catch ({ message }: any) {
      res.status(400).json({ message });
   }
}

export async function getReviewByIdHandler(req: Request, res: Response) {
   try {
      const { id } = req.params;
      const review = await getReviewById(id);

      if (!review) {
         return res.status(404).json({
            message: "Review not found"
         });
      }

      res.status(200).json(review);
   } catch ({ message }: any) {
      res.status(400).json({ message });
   }
}

export async function createReviewHandler(req: Request, res: Response) {
   try {
      const data = req.body;
      const review = await createReview(data);
      res.status(201).json(review);
   } catch ({ message }: any) {
      res.status(400).json({ message });
   }
}

export async function updateReviewHandler(req: Request, res: Response) {
   try {
      const data = req.body;

      const review = await updateReview(data);

      if (!review) {
         res.status(404).json({ message: "Review not found" });
      }

      res.status(200).json(review);
   } catch ({ message }: any) {
      res.status(400).json({ message });
   }
}
