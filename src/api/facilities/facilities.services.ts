import { PrismaClient } from '@prisma/client';
import { Facilities } from './facilities.types';

const prisma = new PrismaClient();

export async function getAllFacilities() {
  const facilities = await prisma.facilities.findMany({
    select: {
      restaurantId: true,
      phone: true,
      address: true,
    },
  });
  return facilities;
}

export async function getFacilityById(id: string) {
  const facility = await prisma.facilities.findUnique({
    where: {
      id,
    },
  });
  return facility;
}

export async function createFacility(input: Facilities) {
  const data = {
    ...input,
  };

  const facility = await prisma.facilities.create({
    data,
  });

  return facility;
}

export async function updateFacility(data: Facilities) {
  const facility = await prisma.facilities.update({
    where: {
      id: data.id,
    },
    data,
  });

  return facility;
}

export async function deleteFacility(id: string) {
  const facility = await prisma.facilities.delete({
    where: {
      id,
    },
  });

  return facility;
}
