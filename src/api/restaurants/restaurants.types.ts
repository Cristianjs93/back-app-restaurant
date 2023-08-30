import { Restaurants as RestaurantsModel } from '@prisma/client';

export type Restaurants = RestaurantsModel;

export type RestaurantsSeeder = Omit<
  Restaurants,
  'reviews' | 'Gallery' | 'Facilities' | 'updatedAt' | 'createdAt'
>;

export type RestaurantsFiltered = Omit<
  Restaurants,
  'nit' | 'businessName' | 'Facilities' | 'updatedAt'
>;
