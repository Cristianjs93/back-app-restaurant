import { Request, NextFunction } from 'express';
import {
  ResponsePaginator,
  PaginationQueryParams,
  PaginationResult,
} from './pagination.types';
import { getAllRestaurants } from '../api/restaurants/restaurants.services';
import { filteredData, filteredByObject } from '../utils/filters';
import { RestaurantsFiltered } from '../api/restaurants/restaurants.types';

export const pagination = () => {
  return async (req: Request, res: ResponsePaginator, next: NextFunction) => {
    const { filter, page, limit, cuisine, star, delivery } =
      req.query as PaginationQueryParams;

    // console.log(filter, page, limit, cuisine, star, delivery);

    const pageData = parseInt(page);

    const limitData = parseInt(limit);

    const allRestaurants = await getAllRestaurants();

    if (cuisine && star && delivery) {
      const filtered = filteredData(allRestaurants, filter);

      const filteredRestaurants = filteredByObject(
        filtered as RestaurantsFiltered[],
        cuisine,
        star,
        delivery,
      );

      const startIndex = (pageData - 1) * limitData;
      const endIndex = pageData * limitData;

      const results = {} as PaginationResult;

      if (filteredRestaurants) {
        if (endIndex < filteredRestaurants.length) {
          results.next = {
            page: pageData + 1,
            limit: limitData,
          };
        }

        if (startIndex) {
          results.previous = {
            page: pageData - 1,
            limit: limitData,
          };
        }

        results.length = filteredRestaurants.length;

        results.data = filteredRestaurants.slice(startIndex, endIndex);

        res.paginatedResults = results;
        next();
      }
    } else {
      const filteredRestaurants = filteredData(allRestaurants, filter);

      const startIndex = (pageData - 1) * limitData;
      const endIndex = pageData * limitData;

      const results = {} as PaginationResult;

      if (filteredRestaurants) {
        if (endIndex < filteredRestaurants.length) {
          results.next = {
            page: pageData + 1,
            limit: limitData,
          };
        }

        if (startIndex) {
          results.previous = {
            page: pageData - 1,
            limit: limitData,
          };
        }

        results.length = filteredRestaurants.length;

        results.data = filteredRestaurants.slice(startIndex, endIndex);

        res.paginatedResults = results;
        next();
      }
    }
  };
};
