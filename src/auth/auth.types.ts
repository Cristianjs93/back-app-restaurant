import { Request } from "express";
import { Users } from "../api/users/user.types";
import { Restaurants } from "../api/restaurants/restaurants.types";
import { Reviews } from "../api/reviews/reviews.types";

export type PayloadType = {
   id: string;
   email: string;
   iat?: number;
   exp?: number;
};

export interface AuthRequest extends Request {
   users?: Users;
}

export interface AuthRequestRestaurants extends Request {
   restaurants?: Restaurants;
}

export interface AuthRequestReviews extends Request {
   reviews?: Reviews;
}
