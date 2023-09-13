import { Request, Response } from 'express';
import errorHandler from '../../utils/errorHandler';
import { getRoles } from './roles.services';

export async function getAllRoles(_: Request, res: Response) {
  try {
    const roles = await getRoles();
    res.status(200).send(roles);
  } catch (exception: unknown) {
    const message = errorHandler(exception);
    res.status(400).json({ message });
  }
}
