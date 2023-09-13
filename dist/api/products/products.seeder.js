"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsSeeder = void 0;
const faker_1 = require("@faker-js/faker");
const restaurants_seeder_1 = require("../restaurants/restaurants.seeder");
const category_1 = require("../../utils/data/category");
const fakerProducts = Array.from({ length: 1000 }).map(() => {
    return {
        productName: faker_1.faker.commerce.productName(),
        price: faker_1.faker.number.int({ min: 5, max: 50 }),
        category: category_1.categories[faker_1.faker.number.int({ min: 0, max: 11 })],
        description: faker_1.faker.commerce.productDescription(),
        restaurantId: restaurants_seeder_1.restaurantsSeeder[faker_1.faker.number.int({ min: 0, max: restaurants_seeder_1.restaurantsSeeder.length - 1 })].id,
    };
});
exports.productsSeeder = [...fakerProducts];
