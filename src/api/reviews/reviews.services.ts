import { PrismaClient } from "@prisma/client";
import { Reviews } from "./reviews.types";

const prisma = new PrismaClient();

export async function getAllReviews() {
   const reviews = await prisma.review.findMany({
      select: {
         userId: true,
         restaurantsId: true,
         id: false,
         title: true,
         rating: true,
         comment: true
      }
   });
   return reviews;
}

export async function getReviewById(id: string) {
   const review = await prisma.review.findUnique({
      where: {
         id
      }
   });

   return review;
}

export async function createReview(input: Reviews) {
   const data = {
      ...input
   };
   const review = await prisma.review.create({ data });

   return review;
}

export async function updateReview(data: Reviews) {
   const review = await prisma.review.update({
      where: {
         id: data.id
      },
      data
   });
   return review;
}

export async function deleteReview(id: string) {
   const restaurant = await prisma.review.delete({
      where: {
         id
      }
   });

   return restaurant;
}
