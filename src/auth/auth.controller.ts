import { Response, NextFunction } from 'express';

import { getUserByEmail } from '../api/users/user.services';
import { AuthRequest } from './auth.types';
import { Users } from '../api/users/user.types';
import { verifyToken, getRoleById } from './auth.services';

export const isAuthenticated = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction,
) => {
  const token = req.headers?.authorization?.split(' ')[1];

  if (!token) {
    return res
      .status(401)
      .json({ message: 'Unauthorized! You have to log in first.' });
  }

  const decoded = verifyToken(token);

  if (!decoded) {
    return res.status(401).json({ message: 'Token not decoded' });
  }

  const user = (await getUserByEmail(decoded.email)) as Users;

  req.users = user;

  return next();
};

export function hasRole(rolesAllowed: string[]) {
  return async (req: AuthRequest, res: Response, next: NextFunction) => {
    const { roleId } = req.users as Users;
    const role = await getRoleById(roleId);
    const hasPermission = rolesAllowed.includes(role?.name as string);

    if (!hasPermission) {
      return res.status(403).json({ message: 'Forbidden' });
    }

    return next();
  };
}
