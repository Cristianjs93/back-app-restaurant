import { Request, Response } from 'express';
import { AuthRequestReviews } from '../../auth/auth.types.ts';
import {
  getAllReviews,
  getReviewById,
  createReview,
  updateReview,
  deleteReview,
} from './reviews.services.ts';

export async function getAllReviewsHandler(req: Request, res: Response) {
  try {
    const reviews = await getAllReviews();
    return res.status(200).json(reviews);
  } catch ({ message }: any) {
    return res.status(400).json({ message });
  }
}

export async function getReviewByIdHandler(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const review = await getReviewById(id);

    if (!review) {
      return res.status(404).json({
        message: 'Review not found',
      });
    }

    return res.status(200).json(review);
  } catch ({ message }: any) {
    return res.status(400).json({ message });
  }
}

export async function createReviewHandler(req: Request, res: Response) {
  try {
    const data = req.body;
    const review = await createReview(data);
    return res.status(201).json(review);
  } catch ({ message }: any) {
    return res.status(400).json({ message });
  }
}

export async function updateReviewHandler(req: Request, res: Response) {
  try {
    const data = req.body;

    const review = await updateReview(data);

    if (!review) {
      return res.status(404).json({ message: 'Review not found' });
    }

    return res.status(200).json(review);
  } catch ({ message }: any) {
    return res.status(400).json({ message });
  }
}

export async function deleteReviewHandler(
  req: AuthRequestReviews,
  res: Response,
) {
  try {
    const { id } = req.body;
    const review = await getReviewById(id);

    if (!review) {
      return res.status(404).json({
        message: 'User not found',
      });
    }

    return await deleteReview(id);
  } catch ({ message }: any) {
    return res.status(400).json({ message });
  }
}
