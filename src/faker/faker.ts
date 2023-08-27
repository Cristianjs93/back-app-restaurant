import { faker } from '@faker-js/faker';
import { hashPasswordSync } from '../auth/utils/bycript';
import { rolesSeeder } from '../api/roles/roles.seeder';

const [_, client] = rolesSeeder;

export const fakerUsers = Array.from({ length: 20 }).map(() => ({
  id: faker.string.uuid(),
  firstname: faker.internet.userName(),
  lastname: faker.internet.userName(),
  address: faker.location.streetAddress(),
  phone: faker.phone.number(),
  email: faker.internet.email(),
  age: faker.number.int({ max: 100 }),
  password: hashPasswordSync(faker.internet.password()),
  isActive: true,
  roleId: client.id,
}));

export const fakerRestaurants = Array.from({ length: 60 }).map(() => ({
  id: faker.string.uuid(),
  nit: faker.string.numeric({ length: 9 }),
  businessName: faker.company.name(),
  title: faker.company.name(),
  phone: faker.phone.number(),
  address: [faker.location.streetAddress(), faker.location.streetAddress()],
  about: faker.company.buzzPhrase(),
  latitude: faker.location.latitude({ max: 80, min: -80, precision: 5 }),
  longitude: faker.location.longitude({ max: 80, min: -80, precision: 5 }),
  image: 'https://picsum.photos/500/300',
  cuisines: [faker.location.country(), faker.location.country()],
  opening_hour: faker.number.int({ min: 2, max: 5 }),
  closing_hour: faker.number.int({ min: 9, max: 11 }),
  opening_first_day: faker.date.weekday({ abbreviated: true }),
  opening_last_day: faker.date.weekday({ abbreviated: true }),
  cost_two: faker.number.int({ min: 10, max: 100 }),
  rating: faker.number.float({ min: 1, max: 5, precision: 0.1 }),
  trending: faker.datatype.boolean(0.4),
  delivery_time: faker.number.int({ min: 10, max: 60 }),
  logo: `https://img.logoipsum.com/${faker.number.int({
    min: 211,
    max: 299,
  })}.svg`,
  services: [
    'Card Accepted',
    'Parking Avaliable',
    'Banquet Area',
    'Home Delivery',
    'Table Booking',
    'Avaliable For Events',
    'Game Zone',
  ],
}));
