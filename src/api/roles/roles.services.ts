import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getRoles() {
  const roles = await prisma.roles.findMany();
  return roles;
}
