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
