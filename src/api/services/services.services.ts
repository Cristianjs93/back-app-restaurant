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

export async function getServiceById(id: string) {
   const service = await primsa.services.findUnique({
      where: {
         id,
      },
   });

   return service;
}
