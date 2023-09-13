import { Users as UserModel } from '@prisma/client';

export type Users = UserModel;

export type UsersResponse = Pick<
  Users,
  'firstName' | 'lastName' | 'email' | 'isActive'
> & { id?: string };

export type UsersSeeders = Omit<
  Users,
  'Review' | 'createdAt' | 'updatedAt' | 'Order'
>;
