import { faker } from '@faker-js/faker';
import { ReviewsSeeder } from './reviews.types';
import { usersSeeder } from '../users/users.seeder';
import { restaurantsSeeder } from '../restaurants/restaurants.seeder';

const fakerReviews = Array.from({ length: 800 }).map(() => {
  return {
    userId:
      usersSeeder[faker.number.int({ min: 0, max: usersSeeder.length - 1 })].id,

    restaurantId:
      restaurantsSeeder[
        faker.number.int({ min: 0, max: restaurantsSeeder.length - 1 })
      ].id,

    title: faker.company.catchPhraseNoun(),
    rating: faker.number.int({ min: 1, max: 5 }),
    message: faker.company.buzzPhrase(),
  };
});
export const reviewsSeeder: ReviewsSeeder[] = [...fakerReviews];
