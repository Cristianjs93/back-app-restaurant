import { PrismaClient } from "@prisma/client";
import { Restaurants } from "./restaurants.types";

const prisma = new PrismaClient();

export async function getAllRestaurants() {
   const restaurants = await prisma.restaurants.findMany({
      select: {
         id: false,
         title: true,
         phone: true,
         address: true,
         about: true,
         location: true,
         reviews: true
      }
   });
   return restaurants;
}

export async function getRestaurantById(id: string) {
   const restaurants = await prisma.restaurants.findUnique({
      where: {
         id
      }
   });

   return restaurants;
}

export async function createRestaurant(input: Restaurants) {
   // const hashedPassword = await hashPassword(input.password);

   const data = {
      ...input
      //   password: hashedPassword
   };

   const restaurant = await prisma.restaurants.create({
      data
   });

   return restaurant;
}

export async function updateRestaurant(data: Restaurants) {
   const restaurants = await prisma.restaurants.update({
      where: {
         id: data.id
      },
      data
   });

   return restaurants;
}

export async function deleteRestaurant(id: string) {
   const restaurant = await prisma.restaurants.delete({
      where: {
         id
      }
   });

   return restaurant;
}
