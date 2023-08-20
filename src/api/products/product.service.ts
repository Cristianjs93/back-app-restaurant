import { PrismaClient } from '@prisma/client';
import { Products } from './product.types';

const prisma = new PrismaClient();

export async function getAllProducts() {
  const products = await prisma.products.findMany({
    select: {
      id: false,
      productName: true,
      price: true,
      description: true,
      image: true
    }
  });
  return products;
}

export async function getProductById(id: string) {
  const products = await prisma.products.findMany({
    where: {
      id
    }
  });
  return products;
}

export async function createProduct(input: Products) {
  const data = {
    ...input
  };

  const product = await prisma.products.create({
    data
  });
  return product;
}

export async function updateProduct(data: Products) {
  const products = await prisma.products.update({
    where: {
      id: data.id,
    },
    data
  });
  return products
}

export async function deleteProduct(id: string) {
  const product = await prisma.products.delete({
    where: {
      id
    }
  });
  return product;
}