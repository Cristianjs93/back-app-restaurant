import { Request, Response } from 'express';
import { AuthRequestFacilities } from '../../auth/auth.types.ts';
import ErrorHandler from '../../utils/errorsHandlers.ts';
import {
  getAllFacilities,
  getFacilityById,
  createFacility,
  updateFacility,
  deleteFacility,
} from './facilities.services.ts';

export async function getAllFacilitiesHandler(req: Request, res: Response) {
  try {
    const facilities = await getAllFacilities();
    return res.status(200).json(facilities);
  } catch (e) {
    return res.status(400).send(ErrorHandler);
  }
}

export async function getFacilityByIdHandler(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const facility = await getFacilityById(id);
    if (!facility) {
      return res.status(404).json({
        message: 'Facility not found',
      });
    }
    return res.status(200).json(facility);
  } catch (e) {
    return res.status(400).send(ErrorHandler);
  }
}

export async function createFacilityHandler(req: Request, res: Response) {
  try {
    const data = req.body;
    const facility = await createFacility(data);
    return res.status(201).json(facility);
  } catch (e) {
    return res.status(400).send(ErrorHandler);
  }
}

export async function updateFacilityHandler(req: Request, res: Response) {
  try {
    const data = req.body;

    const facility = await updateFacility(data);

    if (!facility) {
      return res.status(404).json({ message: 'Facility not found' });
    }

    return res.status(200).json(facility);
  } catch (e) {
    return res.status(400).send(ErrorHandler);
  }
}

export async function deleteFacilityHandler(
  req: AuthRequestFacilities,
  res: Response,
) {
  try {
    const { id } = req.body;
    const facility = await getFacilityById(id);

    if (!facility) {
      return res.status(404).json({
        message: 'Facility not found',
      });
    }

    return await deleteFacility(id);

    res.status(200).json(facility);
  } catch (e) {
    return res.status(400).send(ErrorHandler);
  }
}
