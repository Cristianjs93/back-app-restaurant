import { Request, NextFunction } from 'express';
import { ResponsePaginator, PaginationQueryParams } from './pagination.types';
import { getAllRestaurants } from '../api/restaurants/restaurants.services';
import { filteredData, filteredByObject } from '../utils/filters';
import { paginationGenerator } from '../utils/paginationGenerator';
import { RestaurantsFiltered } from '../api/restaurants/restaurants.types';

export const pagination = () => {
  return async (req: Request, res: ResponsePaginator, next: NextFunction) => {
    const { filter, page, limit, cuisine, star, delivery } =
      req.query as PaginationQueryParams;

    const pageData = parseInt(page);

    const limitData = parseInt(limit);

    const allRestaurants = await getAllRestaurants();

    if (cuisine && !star && !delivery) {
      const filteredByCuisine = allRestaurants.filter(
        (item: RestaurantsFiltered) => item.cuisines.includes(cuisine) && item,
      );
      const results = paginationGenerator(
        filteredByCuisine,
        pageData,
        limitData,
      );

      res.paginatedResults = results;
      next();
    }

    if (!cuisine && star && !delivery) {
      const filteredByStar = allRestaurants.filter(
        (item: RestaurantsFiltered) => item.rating >= parseInt(star) && item,
      );
      const results = paginationGenerator(filteredByStar, pageData, limitData);

      res.paginatedResults = results;
      next();
    }

    if (!cuisine && !star && delivery) {
      const filteredByDelivery = allRestaurants.filter(
        (item: RestaurantsFiltered) =>
          item.delivery_time <= parseInt(delivery) && item,
      );

      const results = paginationGenerator(
        filteredByDelivery,
        pageData,
        limitData,
      );

      res.paginatedResults = results;
      next();
    }

    if (cuisine && star && delivery) {
      const filtered = filteredData(allRestaurants, filter);

      const filteredRestaurants = filteredByObject(
        filtered as RestaurantsFiltered[],
        cuisine,
        star,
        delivery,
      );

      const results = paginationGenerator(
        filteredRestaurants,
        pageData,
        limitData,
      );

      res.paginatedResults = results;
      next();
    } else {
      const filteredRestaurants = filteredData(allRestaurants, filter);
      if (filteredRestaurants) {
        const results = paginationGenerator(
          filteredRestaurants,
          pageData,
          limitData,
        );

        res.paginatedResults = results;
        next();
      }
    }
  };
};
