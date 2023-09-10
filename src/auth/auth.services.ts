import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';

import { PayloadType } from './auth.types';

const prisma = new PrismaClient();

const SECRET = process.env.JWT_SECRET as string;

export const verifyToken = (token: string) => {
  const decoded = jwt.verify(token, SECRET) as PayloadType;

  return decoded;
};

export const signToken = (payload: PayloadType) => {
  const token = jwt.sign(payload, SECRET, {
    expiresIn: `${1000 * 60 * 60 * 24}`,
  });

  return token;
};

export async function getRoleById(id: string) {
  const role = await prisma.roles.findUnique({
    where: {
      id,
    },
  });
  return role;
}
