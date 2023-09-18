import { Reviews as ReviewModel } from '@prisma/client';

export type Reviews = ReviewModel;

export type ReviewsSeeder = Omit<Reviews, 'id' | 'updatedAt' | 'createdAt'>;

export type ReviewsWithUser = {
  id: string;
  title: string;
  rating: number;
  message: string;
  restaurantId: string;
  createdAt: Date;
  updatedAt: Date;
  user: string;
  userId?: string;
};
