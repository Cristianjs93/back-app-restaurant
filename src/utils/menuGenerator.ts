import {
  RestaurantWithMenu,
  MenuProduct,
  MenuCategory,
} from '../api/products/product.types';

export const menuGenerator = (restaurant: RestaurantWithMenu) => {
  const menu: MenuCategory[] = restaurant.products.reduce(
    (result: MenuCategory[], product: MenuProduct) => {
      const existingCategory = result.find(
        (item) => item.category === product.category,
      );

      if (existingCategory) {
        existingCategory.products.push(product);
      } else {
        result.push({ category: product.category, products: [product] });
      }

      return result;
    },
    [],
  );

  restaurant.menu = menu;
  return restaurant;
};
