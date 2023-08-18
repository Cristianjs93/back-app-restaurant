import { Response, NextFunction } from 'express';

import { getUserByEmail } from '../api/users/user.services';
import { AuthRequest } from './auth.types';
import { Users } from '../api/users/user.types';
import { verifyToken } from './auth.services';

export const isAuthenticated = async (
  req: AuthRequest, 
  res: Response, 
  next: NextFunction
) => {

  const token = req.headers?.authorization?.split(' ')[1];
  
  if(!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  const decoded = verifyToken(token)

  if(!decoded){
    return res.status(401).json({ message: 'Unauthorized' });
  }

  const user = await getUserByEmail(decoded.email) as Users

  req.users = user

  return next();
}

export const hasRole = (allowRoles: string[]) => {
  return (
      req: AuthRequest, 
      res: Response, 
      next: NextFunction
  ) => {
    const { roles } = req.users as any
    const userRoles = roles.map(({ Role }: any) => Role.name)
    const hasPermission = allowRoles.some((role) => userRoles.includes(role))

    if(!hasPermission) {
      return res.status(403).json({ message: 'Forbidden' })
    }

    next()
  }
}