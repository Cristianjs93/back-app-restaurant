import { Request, Response } from 'express';
import errorHandler from '../../utils/errorHandler';
import { getRoles } from './roles.services';

export async function getAllRoles(req: Request, res: Response) {
  try {
    const roles = await getRoles();
    return res.status(200).send(roles);
  } catch (exception: unknown) {
    const message = errorHandler(exception);
    return res.status(400).send({ message });
  }
}
