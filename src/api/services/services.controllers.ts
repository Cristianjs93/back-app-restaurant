import { Request, Response } from 'express';
import { AuthRequestServices } from '../../auth/auth.types';
import errorHandler from '../../utils/errorHandler.ts';
import { getAllServices } from './services.services.ts';

export async function getAllServicesHandler(req: Request, res: Response) {
   try {
      const services = await getAllServices();
      return res.status(200).json(services);
   } catch (exception: unknown) {
      const message = errorHandler(exception);
      return res.status(400).json({ message });
   }
}
