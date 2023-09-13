"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filteredByObject = exports.filteredData = void 0;
const filteredData = (data, filter) => {
    if (filter == 'all') {
        return data;
    }
    else if (filter == 'popular') {
        const popularRestaurants = data.filter((restaurant) => restaurant.rating >= 4);
        return popularRestaurants;
    }
    else if (filter == 'trend') {
        const trendingRestaurants = data.filter((restaurant) => restaurant.trending);
        return trendingRestaurants;
    }
    else if (filter == 'latest') {
        const currentTime = new Date();
        const oneWeekAgo = new Date(currentTime.getTime() - 1000 * 60 * 60 * 24 * 7);
        const recentRestaurants = data.filter((restaurant) => {
            const createdAtTime = new Date(restaurant.createdAt);
            return createdAtTime > oneWeekAgo;
        });
        return recentRestaurants;
    }
};
exports.filteredData = filteredData;
const filteredByObject = (data, cuisine, star, cost, delivery) => {
    let result = [];
    let filteredByCuisine = [];
    let filteredByStar = [];
    let filteredByCost = [];
    let filteredByDelivery = [];
    cuisine
        ? (filteredByCuisine = data.filter((item) => item.cuisines.includes(cuisine) && item))
        : (filteredByCuisine = data);
    star
        ? (filteredByStar = data.filter((item) => item.rating >= parseInt(star) && item))
        : (filteredByStar = data);
    cost
        ? (filteredByCost = data.filter((item) => item.cost_two <= parseInt(cost) && item))
        : (filteredByCost = data);
    delivery
        ? (filteredByDelivery = data.filter((item) => item.delivery_time <= parseInt(delivery) && item))
        : (filteredByDelivery = data);
    result = commonRestaurants(filteredByCuisine, filteredByStar, filteredByCost, filteredByDelivery);
    return result;
};
exports.filteredByObject = filteredByObject;
const commonRestaurants = (array1, array2, array3, array4) => {
    return array1.filter((restaurant1) => {
        const presentInArray2 = array2.some((restaurant2) => restaurant2.id === restaurant1.id);
        const presentInArray3 = array3.some((restaurant3) => restaurant3.id === restaurant1.id);
        const presentInArray4 = array4.some((restaurant4) => restaurant4.id === restaurant1.id);
        return presentInArray2 && presentInArray3 && presentInArray4;
    });
};
