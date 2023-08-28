import { Request, Response } from 'express';
import errorHandler from '../../utils/errorHandler.ts';
import {
  getAllServices,
  getServiceById,
  createService,
  updateService,
  deleteService,
} from './services.services.ts';

export async function getAllServicesHandler(req: Request, res: Response) {
  try {
    const services = await getAllServices();
    return res.status(200).json(services);
  } catch (exception: unknown) {
    const message = errorHandler(exception);
    return res.status(400).json({ message });
  }
}

export async function getServiceByIdHandler(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const service = await getServiceById(id);

    if (!service) {
      return res.status(404).json({ message: 'service not found' });
    }

    return res.status(200).json(service);
  } catch (exception: unknown) {
    const message = errorHandler(exception);
    return res.status(400).json({ message });
  }
}

export async function createServiceHandler(req: Request, res: Response) {
  try {
    const data = req.body;

    const service = await createService(data);

    return res.status(201).json(service);
  } catch (exception: unknown) {
    const message = errorHandler(exception);
    return res.status(400).json({ message });
  }
}

export async function updateServiceHandler(req: Request, res: Response) {
  try {
    const data = req.body;

    const service = await updateService(data);

    if (!service) {
      return res.status(404).json({
        message: 'Service not found',
      });
    }

    return res.status(200).json(service);
  } catch (exception: unknown) {
    const message = errorHandler(exception);
    return res.status(400).json({ message });
  }
}

export async function deleteServiceHandler(req: Request, res: Response) {
  try {
    const { id } = req.body;
    const service = await getServiceById(id);

    if (!service) {
      return res.status(404).json({
        message: 'Service not found',
      });
    }
    await deleteService(id);

    return res.status(200).json({ message: 'Service deleted succesfully' });
  } catch (exception: unknown) {
    const message = errorHandler(exception);
    return res.status(400).json({ message });
  }
}
