"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.menuGenerator = void 0;
const menuGenerator = (restaurant) => {
    const menu = restaurant.products.reduce((result, product) => {
        const existingCategory = result.find((item) => item.category === product.category);
        if (existingCategory) {
            existingCategory.products.push(product);
        }
        else {
            result.push({ category: product.category, products: [product] });
        }
        return result;
    }, []);
    restaurant.menu = menu;
    return restaurant;
};
exports.menuGenerator = menuGenerator;
