import { Response, NextFunction } from 'express';

import { getUserByEmail } from '../api/users/user.services';
import { AuthRequest } from './auth.types';
import { Users } from '../api/users/user.types';
import { verifyToken } from './auth.services';

export const isAuthenticated = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction,
) => {
  const token = req.headers?.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  const decoded = verifyToken(token);

  if (!decoded) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  const user = (await getUserByEmail(decoded.email)) as Users;

  req.user = user;

  return next();
};

export const hasRole = (rolesAllowed: string[]) => {
  return (req: AuthRequest, res: Response, next: NextFunction) => {
    const { roleId } = req.user as Users;
    const hasPermission = rolesAllowed.includes(roleId);

    if (!hasPermission) {
      return res.status(403).json({ message: 'Forbidden' });
    }

    return next();
  };
};
