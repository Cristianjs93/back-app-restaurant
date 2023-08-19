import { Request, Response } from "express";
import { Reviews } from "./reviews.types";
import { AuthRequestReviews } from "../../auth/auth.types";
import { getAllReviews } from "./reviews.services";

export async function getAllReviewsHandler(req: Request, res: Response) {
   try {
      const reviews = await getAllReviews();
      res.status(200).json(reviews);
   } catch ({ message }: any) {
      res.status(400).json({ message });
   }
}
