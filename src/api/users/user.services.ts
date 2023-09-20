import { PrismaClient } from '@prisma/client';

import { hashPassword, createHashToken } from '../../auth/utils/bycript';
import { Users } from './user.types';

const prisma = new PrismaClient();

export async function getAllUsers() {
  const users = await prisma.users.findMany({
    where: {
      isActive: true,
    },
    select: {
      id: true,
      firstName: true,
      lastName: true,
      address: true,
      phone: true,
      age: true,
      isActive: true,
      email: true,
      role: {
        select: {
          id: true,
          name: true,
        },
      },
    },
  });

  return users;
}

export async function createUser(input: Users) {
  const hashedPassword = await hashPassword(input.password);

  const data = {
    ...input,
    password: hashedPassword,
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
  const user = await prisma.users.update({
    where: {
      id: id,
    },
    data: { isActive: false },
  });

  return user;
}

export async function updateUser(id: string, data: Users) {
  const user = await prisma.users.update({
    where: {
      id: id,
    },
    data,
  });

  return user;
}
