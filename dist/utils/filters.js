"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filteredData = void 0;
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
