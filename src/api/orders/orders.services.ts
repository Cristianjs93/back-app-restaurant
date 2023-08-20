import { PrismaClient } from '@prisma/client';
import { Orders } from './orders.types';

const prisma = new PrismaClient();

export async function getAllOrders() {
   const orders = await prisma.orders.findMany({
      select: {
         id: true,
         detail: true,
         payment: true,
         status: true,
         total: true,
         serviceId: true,
         userId: true,
         facilityId: true,
      },
   });
   return orders;
}

export async function getOrderById(id: string) {
   const order = await prisma.orders.findUnique({
      where: {
         id,
      },
   });
   return order;
}

export async function createOrder(input: Orders) {
   const data = {
      ...input,
   };

   const order = await prisma.orders.create({
      data,
   });

   return order;
}
