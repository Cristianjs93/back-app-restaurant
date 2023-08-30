import { Request, NextFunction } from 'express';
import {
  ResponsePaginator,
  PaginationQueryParams,
  PaginationResult,
} from './pagination.types';
import { getAllRestaurants } from '../api/restaurants/restaurants.services';

export const pagination = () => {
  return async (req: Request, res: ResponsePaginator, next: NextFunction) => {
    const { page, limit } = req.query as PaginationQueryParams;

    const allRestaurants = await getAllRestaurants();

    const pageData = parseInt(page);

    const limitData = parseInt(limit);

    const startIndex = (pageData - 1) * limitData;
    const endIndex = pageData * limitData;

    const results = {} as PaginationResult;

    if (endIndex < allRestaurants.length) {
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

    results.data = allRestaurants.slice(startIndex, endIndex);

    res.paginatedResults = results.data;
    next();
  };
};
