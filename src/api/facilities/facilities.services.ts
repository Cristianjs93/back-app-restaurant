import { PrismaClient } from "@prisma/client";
import { Facilities } from "./facilities.types";

const prisma = new PrismaClient();

export async function getAllFacilities() {
   const facilities = await prisma.facilities.findMany({
      select: {
         restaurantId: true,
         phone: true,
         address: true
      }
   });
   return facilities;
}

export async function getFacilityById(id: string) {
   const facility = await prisma.facilities.findUnique({
      where: {
         id
      }
   });
   return facility;
}

export async function createFacility(input: Facilities) {
   const data = {
      ...input
   };

   const facility = await prisma.facilities.create({
      data
   });

   return facility;
}
