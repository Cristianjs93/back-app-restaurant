import { RestaurantsFiltered } from '../api/restaurants/restaurants.types';
import { PaginationResult } from '../pagination/pagination.types';

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
  console.log(cuisine, star, delivery);

  let result = [];

  if (cuisine && !star && !delivery) {
    const filteredByCuisine = data.filter(
      (item: RestaurantsFiltered) => item.cuisines.includes(cuisine) && item,
    );
    result = filteredByCuisine;
    return result;
  }

  if (!cuisine && star && !delivery) {
    result = data.filter(
      (item: RestaurantsFiltered) => item.rating >= parseInt(star) && item,
    );
    console.log('solo  star');
    // result = filteredByStar;
    return result;
  }

  if (!cuisine && !star && delivery) {
    const filteredByDelivery = data.filter(
      (item: RestaurantsFiltered) =>
        item.delivery_time <= parseInt(delivery) && item,
    );
    result = filteredByDelivery;
    return result;
  }

  const filteredByCuisine = data.filter(
    (item: RestaurantsFiltered) => item.cuisines.includes(cuisine) && item,
  );
  // console.log('cuisinesFiltered', filteredByCuisine.length);
  const filteredByDelivery = filteredByCuisine.filter(
    (subItem: RestaurantsFiltered) =>
      subItem.delivery_time <= parseInt(delivery) && subItem,
  );

  // console.log('deliveryFiltered', filteredByDelivery.length);

  const filteredByStar = filteredByDelivery.filter(
    (lastItem: RestaurantsFiltered) =>
      lastItem.rating >= parseInt(star) && lastItem,
  );

  // console.log('starFiltered', filteredByStar.length);

  result = filteredByStar;
  // console.log(result);

  return result;
};

export const generator = (
  data: RestaurantsFiltered[],
  page: number,
  limit: number,
) => {
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  const results = {} as PaginationResult;

  // if (data) {
  if (endIndex < data.length) {
    results.next = {
      page: page + 1,
      limit: limit,
    };
  }

  if (startIndex) {
    results.previous = {
      page: page - 1,
      limit: limit,
    };
  }

  results.length = data.length;

  results.data = data.slice(startIndex, endIndex);

  return results;
  // }
};
