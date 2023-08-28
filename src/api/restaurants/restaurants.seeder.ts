import { RestaurantsSeeder } from './restaurants.types';
import { fakerRestaurants } from '../../faker/faker';

export const restaurantsSeeder: RestaurantsSeeder[] = [...fakerRestaurants];
