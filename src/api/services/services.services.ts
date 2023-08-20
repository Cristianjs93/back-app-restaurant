import { PrismaClient } from '@prisma/client';
import { Services } from './services.types';

const primsa = new PrismaClient();

export async function getAllServices() {
   const services = await primsa.services.findMany({
      select: {
         type: true,
      },
   });
   return services;
}
