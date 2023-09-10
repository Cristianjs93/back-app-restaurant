import { PrismaClient } from '@prisma/client';
import { restaurantsSeeder } from '../src/api/restaurants/restaurants.seeder';
import { rolesSeeder } from '../src/api/roles/roles.seeder';
import { usersSeeder } from '../src/api/users/users.seeder';
import { reviewsSeeder } from '../src/api/reviews/reviews.seeder';
import { productsSeeder } from '../src/api/products/products.seeder';

const prisma = new PrismaClient();

async function main() {
  const createRestaurants = await prisma.restaurants.createMany({
    data: restaurantsSeeder,
    skipDuplicates: true,
  });

  const createRole = await prisma.roles.createMany({
    data: rolesSeeder,
    skipDuplicates: true,
  });

  const createUser = await prisma.users.createMany({
    data: usersSeeder,
    skipDuplicates: true,
  });

  const createReviews = await prisma.reviews.createMany({
    data: reviewsSeeder,
    skipDuplicates: true,
  });
  const createProducts = await prisma.products.createMany({
    data: productsSeeder,
    skipDuplicates: true,
  });
}

main()
  .then(() => {
    console.log('Seeding complete');
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
