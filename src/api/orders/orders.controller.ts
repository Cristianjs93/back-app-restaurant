import { Request, Response } from 'express';
import { AuthRequestOrders } from '../../auth/auth.types.ts';
import errorHandler from '../../utils/errorHandler.ts';

import { getAllOrders } from './orders.services';

export async function getAllOrdersHandler(request: Request, res: Response) {
   try {
      const orders = await getAllOrders();
      return res.status(200).json(orders);
   } catch (exception: unknown) {
      const message = errorHandler(exception);
      return res.status(400).send({ message });
   }
}
