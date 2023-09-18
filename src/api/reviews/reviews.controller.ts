import { Request, Response } from 'express';
import { Reviews } from './reviews.types';
import { UsersResponse } from '../users/user.types';
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
import { getAllUsers, getUserByEmail } from '../users/user.services';
import { getReviewsWithUser } from '../../utils/reviewsWithUser';

export async function getAllReviewsHandler(_: Request, res: Response) {
  try {
    const reviews = await getAllReviews();

    res.status(200).json(reviews);
  } catch (exception: unknown) {
    const message = errorHandler(exception);
    res.status(400).json({ message });
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
    res.status(400).json({ message });
  }
}

export async function getReviewsByRestaurantIdHandler(
  req: Request,
  res: Response,
) {
  try {
    const { id } = req.params;
    const reviews: Reviews[] = await getReviewsByRestaurantId(id);
    const users: UsersResponse[] = await getAllUsers();

    if (!reviews) {
      return res.status(404).json({
        message: 'Review not found',
      });
    }

    const reviewsWithUser = getReviewsWithUser(reviews, users);
    res.status(200).json(reviewsWithUser);
  } catch (exception: unknown) {
    const message = errorHandler(exception);
    res.status(400).json({ message });
  }
}

export async function createReviewHandler(req: Request, res: Response) {
  try {
    const data = req.body;

    const userForReview = (await getUserByEmail(
      data.userEmail,
    )) as UsersResponse;

    const reviewwithUser = { ...data, userId: userForReview.id };

    delete reviewwithUser.userEmail;

    const review = await createReview(reviewwithUser);

    res.status(201).json(review);
  } catch (exception: unknown) {
    const message = errorHandler(exception);
    res.status(400).json({ message });
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
    res.status(400).json({ message });
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
    res.status(400).json({ message });
  }
}
