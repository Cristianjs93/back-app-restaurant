import { Request, Response } from "express";
import { Restaurants } from "./restaurants.types";
import {
   getAllRestaurants,
   getRestaurantById,
   createRestaurant,
   updateRestaurant,
   deleteRestaurant
} from "./restaurants.services";

export async function getAllRestaurantsHandler(req: Request, res: Response) {
   try {
      const restaurants = await getAllRestaurants();
      res.status(200).json(restaurants);
   } catch ({ message }: any) {
      res.status(400).json({ message });
   }
}

export async function getRestaurantByIdHandler(req: Request, res: Response) {
   try {
      const { id } = req.params;
      const restaurant = await getRestaurantById(id);

      if (!restaurant) {
         return res.status(404).json({
            message: "Restaurant not found"
         });
      }

      res.status(200).json(restaurant);
   } catch ({ message }: any) {
      res.status(400).json({ message });
   }
}

export async function createRestaurantHandler(req: Request, res: Response) {
   try {
      const data = req.body;

      const restaurant = await createRestaurant(data);

      res.status(201).json(restaurant);
   } catch ({ message }: any) {
      res.status(400).json({ message });
   }
}

export async function updateRestaurantHandler(req: Request, res: Response) {
   try {
      const { data } = req.body;

      const user = await updateRestaurant(data);

      if (!user) {
         return res.status(404).json({
            message: "User not found"
         });
      }

      res.status(200).json(user);
   } catch ({ message }: any) {
      res.status(400).json({ message });
   }
}

export async function deleteRestaurantHandler(req: Request, res: Response) {
   try {
      const { id } = req.params;
      const restaurant = await getRestaurantById(id);

      if (!restaurant) {
         return res.status(404).json({
            message: "User not found"
         });
      }

      await deleteRestaurant(id);
   } catch ({ message }: any) {
      res.status(400).json({ message });
   }
}
