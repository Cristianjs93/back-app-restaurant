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

export async function createService(input: Services) {
  const data = {
    ...input,
  };

  const service = await primsa.services.create({
    data,
  });

  return service;
}
export async function updateService(data: Services) {
  const service = await primsa.services.update({
    where: {
      id: data.id,
    },
    data,
  });
  return service;
}

export async function deleteService(id: string) {
  const service = await primsa.services.delete({
    where: {
      id,
    },
  });
  return service;
}
