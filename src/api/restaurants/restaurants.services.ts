import { PrismaClient } from '@prisma/client';
import { Restaurants } from './restaurants.types.ts';

const prisma = new PrismaClient();

export async function getAllRestaurants() {
  const restaurants = await prisma.restaurants.findMany({
    select: {
      id: true,
      title: true,
      phone: true,
      address: true,
      about: true,
      latitude: true,
      longitude: true,
      image: true,
      cuisines: true,
      opening_hour: true,
      closing_hour: true,
      opening_first_day: true,
      opening_last_day: true,
      cost_two: true,
      rating: true,
      trending: true,
      reviews: true,
      createdAt: true,
      delivery_time: true,
      logo: true,
    },
  });
  return restaurants;
}

export async function getRestaurantById(id: string) {
  const restaurants = await prisma.restaurants.findUnique({
    where: {
      id,
    },
  });

  return restaurants;
}

export async function createRestaurant(input: Restaurants) {
  const data = {
    ...input,
  };

  const restaurant = await prisma.restaurants.create({
    data,
  });

  return restaurant;
}

export async function updateRestaurant(data: Restaurants) {
  const restaurants = await prisma.restaurants.update({
    where: {
      id: data.id,
    },
    data,
  });

  return restaurants;
}

export async function deleteRestaurant(id: string) {
  const restaurant = await prisma.restaurants.delete({
    where: {
      id,
    },
  });

  return restaurant;
}
