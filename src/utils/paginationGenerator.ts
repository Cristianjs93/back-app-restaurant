import { RestaurantsFiltered } from '../api/restaurants/restaurants.types';
import { PaginationResult } from '../pagination/pagination.types';

export const paginationGenerator = (
  data: RestaurantsFiltered[],
  page: number,
  limit: number,
) => {
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  const results = {} as PaginationResult;

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
};
