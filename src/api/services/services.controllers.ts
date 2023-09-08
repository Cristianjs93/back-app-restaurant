import { Request, Response } from 'express';
import errorHandler from '../../utils/errorHandler';
import {
  getAllServices,
  getServiceById,
  createService,
  updateService,
  deleteService,
} from './services.services';

export async function getAllServicesHandler(req: Request, res: Response) {
  try {
    const services = await getAllServices();
    res.status(200).json(services);
  } catch (exception: unknown) {
    const message = errorHandler(exception);
    res.status(400).json({ message });
  }
}

export async function getServiceByIdHandler(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const service = await getServiceById(id);

    if (!service) {
      return res.status(404).json({ message: 'service not found' });
    }

    res.status(200).json(service);
  } catch (exception: unknown) {
    const message = errorHandler(exception);
    res.status(400).json({ message });
  }
}

export async function createServiceHandler(req: Request, res: Response) {
  try {
    const data = req.body;

    const service = await createService(data);

    res.status(201).json(service);
  } catch (exception: unknown) {
    const message = errorHandler(exception);
    res.status(400).json({ message });
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

    res.status(200).json(service);
  } catch (exception: unknown) {
    const message = errorHandler(exception);
    res.status(400).json({ message });
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

    res.status(200).json({ message: 'Service deleted succesfully' });
  } catch (exception: unknown) {
    const message = errorHandler(exception);
    res.status(400).json({ message });
  }
}
