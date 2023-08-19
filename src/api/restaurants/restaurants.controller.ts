import { Request, Response } from 'express';
import { AuthRequestRestaurants } from '../../auth/auth.types.ts';
import ErrorHandler from '../../utils/errorsHandlers.ts';
import {
  getAllRestaurants,
  getRestaurantById,
  createRestaurant,
  updateRestaurant,
  deleteRestaurant,
} from './restaurants.services.ts';

export async function getAllRestaurantsHandler(req: Request, res: Response) {
  try {
    const restaurants = await getAllRestaurants();
    return res.status(200).json(restaurants);
  } catch (e) {
    return res.status(400).send(ErrorHandler);
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

    return res.status(200).json(restaurant);
  } catch (e) {
    return res.status(400).send(ErrorHandler);
  }
}

export async function createRestaurantHandler(req: Request, res: Response) {
  try {
    const data = req.body;

    const restaurant = await createRestaurant(data);

    return res.status(201).json(restaurant);
  } catch (e) {
    return res.status(400).send(ErrorHandler);
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
  } catch (e) {
    return res.status(400).send(ErrorHandler);
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
        message: 'User not found',
      });
    }

    return await deleteRestaurant(id);
  } catch (e) {
    return res.status(400).send(ErrorHandler);
  }
}
