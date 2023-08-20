import { faker } from "@faker-js/faker";
import { hashPasswordSync } from "../auth/utils/bycript";
import { rolesSeeder } from "../api/roles/roles.seeder";

export const fakerUsers = Array.from({ length: 10 }).map(() => ({
  id: faker.string.uuid(),
  firstname: faker.internet.userName(),
  lastname: faker.internet.userName(),
  address: faker.location.streetAddress(),
  phone: faker.phone.number(),
  email: faker.internet.email(),
  age: faker.number.int({ max: 100 }),
  password: hashPasswordSync(faker.internet.password()),
  isActive: true,
  roleId: rolesSeeder[2].id,
}));

export const fakerRestaurants = Array.from({ length: 20 }).map(() => ({
  id: faker.string.uuid(),
  nit: faker.string.numeric({ length: 9 }),
  businessName: faker.company.name(),
  title: faker.company.name(),
  phone: faker.phone.number(),
  address: [faker.location.streetAddress(), faker.location.streetAddress()],
  about: faker.company.buzzPhrase(),
  location: [
    faker.string.numeric({ length: 2 }),
    faker.string.numeric({ length: 2 }),
  ],
}));
