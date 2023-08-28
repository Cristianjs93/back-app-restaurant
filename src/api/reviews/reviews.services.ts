import { PrismaClient } from '@prisma/client';
import { Reviews } from './reviews.types.ts';

const prisma = new PrismaClient();

export async function getAllReviews() {
  const reviews = await prisma.reviews.findMany({
    select: {
      userId: true,
      restaurantId: true,
      id: false,
      title: true,
      rating: true,
      message: true,
      createdAt: true,
    },
  });
  return reviews;
}

export async function getReviewById(id: string) {
  const review = await prisma.reviews.findUnique({
    where: {
      id,
    },
  });

  return review;
}

export async function createReview(input: Reviews) {
  const data = {
    ...input,
  };
  const review = await prisma.reviews.create({ data });

  return review;
}

export async function updateReview(data: Reviews) {
  const review = await prisma.reviews.update({
    where: {
      id: data.id,
    },
    data,
  });
  return review;
}

export async function deleteReview(id: string) {
  const restaurant = await prisma.reviews.delete({
    where: {
      id,
    },
  });

  return restaurant;
}
