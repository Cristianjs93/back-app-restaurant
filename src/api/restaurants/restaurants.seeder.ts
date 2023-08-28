import { RestaurantsSeeder } from './restaurants.types.ts';
import { fakerRestaurants } from '../../faker/faker.ts';

export const restaurantsSeeder: RestaurantsSeeder[] = [...fakerRestaurants];
