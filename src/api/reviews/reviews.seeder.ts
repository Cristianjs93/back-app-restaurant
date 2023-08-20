import { ReviewsSeeder } from "./reviews.types";
import { usersSeeder } from "../users/users.seeder";
import { restaurantsSeeder } from "../restaurants/restaurants.seeder";
import { faker } from "@faker-js/faker";

const fakerReviews = Array.from({ length: 20 }).map(() => ({
  id: faker.string.uuid(),
  userId: usersSeeder[getRandomNumber(0, usersSeeder.length - 1)].id,
  restaurantId:
    restaurantsSeeder[getRandomNumber(0, restaurantsSeeder.length - 1)].id,
  title: faker.company.catchPhraseNoun(),
  rating: faker.number.int({ min: 1, max: 5 }),
  message: faker.company.buzzPhrase(),
}));

function getRandomNumber(min: number, max: number) {
  const randomDecimal = Math.random();

  const randomNumberInRange = min + randomDecimal * (max - min + 1);

  return Math.floor(randomNumberInRange);
}

export const reviewsSeeder: ReviewsSeeder[] = [
  {
    id: "cllimfndy0001wrtocfq3m45u",
    userId: usersSeeder[3].id,
    restaurantId: restaurantsSeeder[0].id,
    title: "delicious food",
    rating: 5,
    message: "best pizza in town",
  },

  {
    id: "cllimfndy0002wrtocfq3m45u",
    userId: usersSeeder[4].id,
    restaurantId: restaurantsSeeder[2].id,
    title: "poorfood",
    rating: 1,
    message: "dont come here",
  },
  {
    id: "cllimfndy0003wrtocfq3m45u",
    userId: usersSeeder[5].id,
    restaurantId: restaurantsSeeder[3].id,
    title: "im happy",
    rating: 5,
    message: "best mediterranean food",
  },
  {
    id: "cllimfndy0004wrtocfq3m45u",
    userId: usersSeeder[4].id,
    restaurantId: restaurantsSeeder[1].id,
    title: "tasty food",
    rating: 4,
    message: "delicious sushi",
  },
  {
    id: "cllimfndy0005wrtocfq3m45u",
    userId: usersSeeder[3].id,
    restaurantId: restaurantsSeeder[2].id,
    title: "tasty burritos",
    rating: 4,
    message: "i like burritos",
  },
  ...fakerReviews,
];
