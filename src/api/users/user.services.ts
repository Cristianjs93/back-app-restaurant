import { PrismaClient } from '@prisma/client';

import { hashPassword } from '../../auth/utils/bycript.ts';
import { Users } from './user.types.ts';

const prisma = new PrismaClient();

export async function getAllUsers() {
  const users = await prisma.users.findMany();
  return users;
}

export async function createUser(input: Users) {
  const hashedPassword = await hashPassword(input.password);

  const data = {
    ...input,
  };

  const user = await prisma.users.create({
    data,
  });

  return user;
}

export async function getUserById(id: string) {
  const user = await prisma.users.findUnique({
    where: {
      id,
    },
  });

  return user;
}

export async function getUserByEmail(email: string) {
  const user = await prisma.users.findUnique({
    where: {
      email,
    },
  });

  return user;
}

export async function deleteUser(id: string) {
  const user = await prisma.users.delete({
    where: {
      id,
    },
  });

  return user;
}

export async function updateUser(data: Users) {
  const user = await prisma.users.update({
    where: {
      id: data.id,
    },
    data,
  });

  return user;
}
