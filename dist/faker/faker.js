"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fakerRestaurants = exports.fakerUsers = void 0;
const faker_1 = require("@faker-js/faker");
const bycript_1 = require("../auth/utils/bycript");
const roles_seeder_1 = require("../api/roles/roles.seeder");
const cuisines_1 = require("../utils/data/cuisines");
const services_1 = require("../utils/data/services");
const [_, client] = roles_seeder_1.rolesSeeder;
exports.fakerUsers = Array.from({ length: 5 }).map(() => {
    return {
        id: faker_1.faker.string.uuid(),
        firstName: faker_1.faker.internet.userName(),
        lastName: faker_1.faker.internet.userName(),
        address: faker_1.faker.location.streetAddress(),
        phone: faker_1.faker.phone.number(),
        email: faker_1.faker.internet.email(),
        age: faker_1.faker.string.numeric(),
        password: (0, bycript_1.hashPasswordSync)(faker_1.faker.internet.password()),
        isActive: true,
        roleId: client.id,
    };
});
exports.fakerRestaurants = Array.from({ length: 100 }).map((_, index) => {
    return {
        id: faker_1.faker.string.uuid(),
        nit: faker_1.faker.string.numeric({ length: 9 }),
        businessName: faker_1.faker.company.name(),
        title: faker_1.faker.company.name(),
        phone: faker_1.faker.phone.number(),
        address: [faker_1.faker.location.streetAddress(), faker_1.faker.location.streetAddress()],
        about: faker_1.faker.company.buzzPhrase(),
        latitude: faker_1.faker.location.latitude({
            max: 40.9176,
            min: 40.4774,
            precision: 4,
        }),
        longitude: faker_1.faker.location.longitude({
            max: -73.7004,
            min: -74.2591,
            precision: 4,
        }),
        image: index <= 9
            ? `https://picsum.photos/50${index}/300`
            : `https://picsum.photos/5${index}/300`,
        cuisines: [
            cuisines_1.cuisines[faker_1.faker.number.int({ min: 0, max: 5 })],
            cuisines_1.cuisines[faker_1.faker.number.int({ min: 6, max: 10 })],
        ],
        opening_hour: faker_1.faker.number.int({ min: 2, max: 5 }),
        closing_hour: faker_1.faker.number.int({ min: 9, max: 11 }),
        opening_first_day: faker_1.faker.date.weekday({ abbreviated: true }),
        opening_last_day: faker_1.faker.date.weekday({ abbreviated: true }),
        cost_two: faker_1.faker.number.int({ min: 10, max: 100 }),
        rating: faker_1.faker.number.float({ min: 1, max: 5, precision: 0.1 }),
        trending: faker_1.faker.datatype.boolean(0.4),
        delivery_time: faker_1.faker.number.int({ min: 10, max: 80 }),
        logo: `https://img.logoipsum.com/${faker_1.faker.number.int({
            min: 211,
            max: 299,
        })}.svg`,
        services: [
            services_1.services[faker_1.faker.number.int({ min: 0, max: 1 })],
            services_1.services[faker_1.faker.number.int({ min: 2, max: 3 })],
            services_1.services[faker_1.faker.number.int({ min: 4, max: 5 })],
            services_1.services[faker_1.faker.number.int({ min: 6, max: 7 })],
        ],
    };
});
