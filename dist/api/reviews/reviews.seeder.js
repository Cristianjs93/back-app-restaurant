"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reviewsSeeder = void 0;
const faker_1 = require("@faker-js/faker");
const users_seeder_1 = require("../users/users.seeder");
const restaurants_seeder_1 = require("../restaurants/restaurants.seeder");
const fakerReviews = Array.from({ length: 800 }).map(() => {
    return {
        userId: users_seeder_1.usersSeeder[faker_1.faker.number.int({ min: 0, max: users_seeder_1.usersSeeder.length - 1 })].id,
        restaurantId: restaurants_seeder_1.restaurantsSeeder[faker_1.faker.number.int({ min: 0, max: restaurants_seeder_1.restaurantsSeeder.length - 1 })].id,
        title: faker_1.faker.company.catchPhraseNoun(),
        rating: faker_1.faker.number.int({ min: 1, max: 5 }),
        message: faker_1.faker.company.buzzPhrase(),
    };
});
exports.reviewsSeeder = [...fakerReviews];
