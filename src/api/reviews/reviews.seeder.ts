import { faker } from '@faker-js/faker';
import { ReviewsSeeder } from './reviews.types';
import { usersSeeder } from '../users/users.seeder';
import { restaurantsSeeder } from '../restaurants/restaurants.seeder';

function getRandomNumber(min: number, max: number) {
  const randomDecimal = Math.random();
  const randomNumberInRange = min + randomDecimal * (max - min + 1);
  return Math.floor(randomNumberInRange);
}
const fakerReviews = Array.from({ length: 100 }).map(() => {
  return {
    userId: usersSeeder[getRandomNumber(0, usersSeeder.length - 1)].id,
    restaurantId:
      restaurantsSeeder[getRandomNumber(0, restaurantsSeeder.length - 1)].id,
    title: faker.company.catchPhraseNoun(),
    rating: faker.number.int({ min: 1, max: 5 }),
    message: faker.company.buzzPhrase(),
  };
});
export const reviewsSeeder: ReviewsSeeder[] = [...fakerReviews];
