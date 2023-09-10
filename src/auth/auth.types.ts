import { Request } from 'express';
import { Users } from '../api/users/user.types';
import { Restaurants } from '../api/restaurants/restaurants.types';
import { Facilities } from '../api/facilities/facilities.types';
import { Reviews } from '../api/reviews/reviews.types';
import { Services } from '../api/services/services.types';
import { Orders } from '../api/orders/orders.types';
import { Products } from '../api/products/product.types';

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

export interface AuthRequestFacilities extends Request {
  facilities?: Facilities;
}
export interface AuthRequestReviews extends Request {
  reviews?: Reviews;
}

export interface AuthRequestServices extends Request {
  services?: Services;
}

export interface AuthRequestOrders extends Request {
  orders?: Orders;
}

export interface AuthRequestProducts extends Request {
  products?: Products;
}
