import { Reviews as ReviewModel } from '@prisma/client';

export type Reviews = ReviewModel;

export type ReviewsSeeder = Omit<Reviews, 'id' | 'updatedAt' | 'createdAt'>;
