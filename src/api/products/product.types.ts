import { Products as ProductModel } from '@prisma/client';
import { RestaurantsFiltered } from '../restaurants/restaurants.types';

export type Products = ProductModel;

export type ProductsSeeder = Omit<Products, 'id' | 'updatedAt' | 'createdAt'>;

export type MenuProduct = Omit<Products, 'updatedAt' | 'createdAt'>;

export type MenuCategory = {
  category: string;
  products: MenuProduct[];
};

export interface RestaurantWithMenu extends RestaurantsFiltered {
  products: Products[];
  menu?: MenuCategory[];
}
