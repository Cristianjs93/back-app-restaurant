import { faker } from '@faker-js/faker';
import { hashPasswordSync } from '../auth/utils/bycript';
import { rolesSeeder } from '../api/roles/roles.seeder';
import { cuisines } from '../utils/data/cuisines';
import { services } from '../utils/data/services';

const [_, client] = rolesSeeder;

export const fakerUsers = Array.from({ length: 5 }).map(() => {
  return {
    id: faker.string.uuid(),
    firstName: faker.internet.userName(),
    lastName: faker.internet.userName(),
    address: faker.location.streetAddress(),
    phone: faker.phone.number(),
    email: faker.internet.email(),
    age: faker.string.numeric(),
    password: hashPasswordSync(faker.internet.password()),
    isActive: true,
    roleId: client.id,
  };
});

export const fakerRestaurants = Array.from({ length: 100 }).map((_, index) => {
  return {
    id: faker.string.uuid(),
    nit: faker.string.numeric({ length: 9 }),
    businessName: faker.company.name(),
    title: faker.company.name(),
    phone: faker.phone.number(),
    address: [faker.location.streetAddress(), faker.location.streetAddress()],
    about: faker.company.buzzPhrase(),
    latitude: faker.location.latitude({
      max: 40.9176,
      min: 40.4774,
      precision: 4,
    }),
    longitude: faker.location.longitude({
      max: -73.7004,
      min: -74.2591,
      precision: 4,
    }),
    image:
      index <= 9
        ? `https://picsum.photos/50${index}/300`
        : `https://picsum.photos/5${index}/300`,
    cuisines: [
      cuisines[faker.number.int({ min: 0, max: 5 })],
      cuisines[faker.number.int({ min: 6, max: 10 })],
    ],
    opening_hour: faker.number.int({ min: 2, max: 5 }),
    closing_hour: faker.number.int({ min: 9, max: 11 }),
    opening_first_day: faker.date.weekday({ abbreviated: true }),
    opening_last_day: faker.date.weekday({ abbreviated: true }),
    cost_two: faker.number.int({ min: 10, max: 100 }),
    rating: faker.number.float({ min: 1, max: 5, precision: 0.1 }),
    trending: faker.datatype.boolean(0.4),
    delivery_time: faker.number.int({ min: 10, max: 80 }),
    logo: `https://img.logoipsum.com/${faker.number.int({
      min: 211,
      max: 299,
    })}.svg`,
    services: [
      services[faker.number.int({ min: 0, max: 1 })],
      services[faker.number.int({ min: 2, max: 3 })],
      services[faker.number.int({ min: 4, max: 5 })],
      services[faker.number.int({ min: 6, max: 7 })],
    ],
  };
});
