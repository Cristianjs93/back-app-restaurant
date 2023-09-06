import { RestaurantsFiltered } from '../api/restaurants/restaurants.types';

export const filteredData = (data: RestaurantsFiltered[], filter: string) => {
  if (filter == 'all') {
    return data;
  } else if (filter == 'popular') {
    const popularRestaurants = data.filter(
      (restaurant: RestaurantsFiltered) => restaurant.rating >= 4,
    );

    return popularRestaurants;
  } else if (filter == 'trend') {
    const trendingRestaurants = data.filter(
      (restaurant: RestaurantsFiltered) => restaurant.trending,
    );

    return trendingRestaurants;
  } else if (filter == 'latest') {
    const currentTime: Date = new Date();
    const oneWeekAgo = new Date(
      currentTime.getTime() - 1000 * 60 * 60 * 24 * 7,
    );

    const recentRestaurants = data.filter((restaurant: RestaurantsFiltered) => {
      const createdAtTime = new Date(restaurant.createdAt);
      return createdAtTime > oneWeekAgo;
    });
    return recentRestaurants;
  }
};

export const filteredByObject = (
  data: RestaurantsFiltered[],
  cuisine: string,
  star: string,
  delivery: string,
) => {
  let result = [];

  const filteredByCuisine = data.filter(
    (item: RestaurantsFiltered) => item.cuisines.includes(cuisine) && item,
  );
  const filteredByDelivery = filteredByCuisine.filter(
    (subItem: RestaurantsFiltered) =>
      subItem.delivery_time <= parseInt(delivery) && subItem,
  );

  const filteredByStar = filteredByDelivery.filter(
    (lastItem: RestaurantsFiltered) =>
      lastItem.rating >= parseInt(star) && lastItem,
  );

  result = filteredByStar;

  return result;
};
