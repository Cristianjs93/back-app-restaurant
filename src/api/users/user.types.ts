import { Users as UserModel } from '@prisma/client';

export type Users = UserModel;

export type UsersSeeders = Omit<
  Users,
  'Review' | 'createdAt' | 'updatedAt' | 'Order' | 'createdAt' | 'updatedAt'
>;
