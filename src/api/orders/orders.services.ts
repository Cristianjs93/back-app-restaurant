import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

export async function getAllOrders() {
  const orders = await prisma.orders.findMany({
    select: {
      id: true,
      restaurantId: true,
      userId: true,
      type: true,
      delivery_payment: true,
      delivery_address: true,
      delivery_products: true,
      booking_firstName: true,
      booking_lastName: true,
      booking_email: true,
      booking_phone: true,
      booking_date: true,
      booking_persons: true,
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

export async function createOrder(input: Prisma.OrdersCreateInput) {
  const data = {
    ...input,
  };

  const order = await prisma.orders.create({
    data,
  });

  return order;
}

export async function updateOrder(data: Prisma.OrdersCreateInput) {
  const order = await prisma.orders.update({
    where: {
      id: data.id,
    },
    data,
  });
  return order;
}

export async function deleteOrder(id: string) {
  const order = await prisma.orders.delete({
    where: {
      id,
    },
  });

  return order;
}
