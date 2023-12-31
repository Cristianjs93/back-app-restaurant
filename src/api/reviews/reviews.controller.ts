import { Request, Response } from 'express';
import { AuthRequestReviews } from '../../auth/auth.types';
import errorHandler from '../../utils/errorHandler';
import {
  getAllReviews,
  getReviewById,
  getReviewsByRestaurantId,
  createReview,
  updateReview,
  deleteReview,
} from './reviews.services';
import { getAllUsers } from '../users/user.services';
import { getReviewsWithUser } from '../../utils/reviewsWithUser';

export async function getAllReviewsHandler(req: Request, res: Response) {
  try {
    const reviews = await getAllReviews();

    res.status(200).json(reviews);
  } catch (exception: unknown) {
    const message = errorHandler(exception);
    res.status(400).send({ message });
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

    res.status(200).json(review);
  } catch (exception: unknown) {
    const message = errorHandler(exception);
    res.status(400).send({ message });
  }
}

export async function getReviewsByRestaurantIdHandler(
  req: Request,
  res: Response,
) {
  try {
    const { id } = req.params;
    const reviews = await getReviewsByRestaurantId(id);
    const users = await getAllUsers();

    if (!reviews) {
      return res.status(404).json({
        message: 'Review not found',
      });
    }

    const reviewsWithUser = getReviewsWithUser(reviews, users);
    res.status(200).json(reviewsWithUser);
  } catch (exception: unknown) {
    const message = errorHandler(exception);
    res.status(400).send({ message });
  }
}

export async function createReviewHandler(req: Request, res: Response) {
  try {
    const data = req.body;
    const review = await createReview(data);
    res.status(201).json(review);
  } catch (exception: unknown) {
    const message = errorHandler(exception);
    res.status(400).send({ message });
  }
}

export async function updateReviewHandler(req: Request, res: Response) {
  try {
    const data = req.body;

    const review = await updateReview(data);

    if (!review) {
      return res.status(404).json({ message: 'Review not found' });
    }

    res.status(200).json(review);
  } catch (exception: unknown) {
    const message = errorHandler(exception);
    res.status(400).send({ message });
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

    await deleteReview(id);
  } catch (exception: unknown) {
    const message = errorHandler(exception);
    res.status(400).send({ message });
  }
}
