import { Request, Response } from 'express';
import { AuthRequestOrders } from '../../auth/auth.types.ts';
import errorHandler from '../../utils/errorHandler.ts';

import { getAllOrders, getOrderById } from './orders.services';

export async function getAllOrdersHandler(req: Request, res: Response) {
   try {
      const orders = await getAllOrders();
      return res.status(200).json(orders);
   } catch (exception: unknown) {
      const message = errorHandler(exception);
      return res.status(400).send({ message });
   }
}

export async function getOrderByIdHandler(req: Request, res: Response) {
   try {
      const { id } = req.params;
      const order = await getOrderById(id);

      if (!order) {
         return res.status(404).send({ message: 'Order not found' });
      }

      return res.status(200).json(order);
   } catch (exception: unknown) {
      const message = errorHandler(exception);
      return res.status(400).send({ message });
   }
}
