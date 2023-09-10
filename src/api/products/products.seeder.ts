import { faker } from '@faker-js/faker';
import { ProductsSeeder } from './product.types';
import { restaurantsSeeder } from '../restaurants/restaurants.seeder';
import { categories } from '../../utils/data/category';

const fakerProducts = Array.from({ length: 1000 }).map(() => {
  return {
    productName: faker.commerce.productName(),
    price: faker.number.int({ min: 5, max: 50 }),
    category: categories[faker.number.int({ min: 0, max: 11 })],
    description: faker.commerce.productDescription(),
    restaurantId:
      restaurantsSeeder[
        faker.number.int({ min: 0, max: restaurantsSeeder.length - 1 })
      ].id,
  };
});

export const productsSeeder: ProductsSeeder[] = [...fakerProducts];
