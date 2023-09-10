import { Request, Response } from 'express';
import { AuthRequestRestaurants } from '../../auth/auth.types';
import errorHandler from '../../utils/errorHandler';
import {
  getRestaurantById,
  createRestaurant,
  updateRestaurant,
  deleteRestaurant,
} from './restaurants.services';

import { ResponsePaginator } from '../../pagination/pagination.types';
import { menuGenerator } from '../../utils/menuGenerator';

export async function getAllRestaurantsHandler(
  _: Request,
  res: ResponsePaginator,
) {
  try {
    const { paginatedResults } = res;
    return res.status(200).json(paginatedResults);
  } catch (exception: unknown) {
    const message = errorHandler(exception);
    return res.status(400).send({ message });
  }
}

export async function getRestaurantByIdHandler(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const restaurant = await getRestaurantById(id);

    if (!restaurant) {
      return res.status(404).json({
        message: 'Restaurant not found',
      });
    }

    const restaurantWithMenu = menuGenerator(restaurant);

    return res.status(200).json(restaurantWithMenu);
  } catch (exception: unknown) {
    const message = errorHandler(exception);
    return res.status(400).send({ message });
  }
}

export async function createRestaurantHandler(req: Request, res: Response) {
  try {
    const data = req.body;

    const restaurant = await createRestaurant(data);

    return res.status(201).json(restaurant);
  } catch (exception: unknown) {
    const message = errorHandler(exception);
    return res.status(400).send({ message });
  }
}

export async function updateRestaurantHandler(req: Request, res: Response) {
  try {
    const data = req.body;

    const restaurant = await updateRestaurant(data);

    if (!restaurant) {
      return res.status(404).json({
        message: 'User not found',
      });
    }

    return res.status(200).json(restaurant);
  } catch (exception: unknown) {
    const message = errorHandler(exception);
    return res.status(400).send({ message });
  }
}

export async function deleteRestaurantHandler(
  req: AuthRequestRestaurants,
  res: Response,
) {
  try {
    const { id } = req.body;
    const restaurant = await getRestaurantById(id);

    if (!restaurant) {
      return res.status(404).json({
        message: 'Restaurant not found',
      });
    }

    await deleteRestaurant(id);

    return res.status(200).json({ message: 'Restaurant deleted succesfully' });
  } catch (exception: unknown) {
    const message = errorHandler(exception);
    return res.status(400).send({ message });
  }
}
