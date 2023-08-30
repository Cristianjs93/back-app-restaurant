import { Response } from 'express';

export interface ResponsePaginator extends Response {
  paginatedResults?: object;
}
export type PaginationQueryParams = {
  page: string;
  limit: string;
};

export type PaginationResult = {
  next: object;
  previous: object;
  data: object[];
};
