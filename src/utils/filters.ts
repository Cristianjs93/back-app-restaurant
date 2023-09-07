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
  let filteredByCuisine = [];
  let filteredByDelivery = [];
  let filteredByStar = [];

  cuisine
    ? (filteredByCuisine = data.filter(
        (item: RestaurantsFiltered) => item.cuisines.includes(cuisine) && item,
      ))
    : (filteredByCuisine = data);

  delivery
    ? (filteredByDelivery = data.filter(
        (item: RestaurantsFiltered) =>
          item.delivery_time <= parseInt(delivery) && item,
      ))
    : (filteredByDelivery = data);

  star
    ? (filteredByStar = data.filter(
        (item: RestaurantsFiltered) => item.rating >= parseInt(star) && item,
      ))
    : (filteredByStar = data);

  result = commonRestaurants(
    filteredByCuisine,
    filteredByDelivery,
    filteredByStar,
  );

  return result;
};

const commonRestaurants = (array1: any, array2: any, array3: any) => {
  return array1.filter((restaurant1: any) => {
    const presentInArray2 = array2.some(
      (restaurant2: any) => restaurant2.id === restaurant1.id,
    );
    const presentInArray3 = array3.some(
      (restaurant3: any) => restaurant3.id === restaurant1.id,
    );

    return presentInArray2 && presentInArray3;
  });
};
