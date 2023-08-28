import { UsersSeeders } from './user.types';
import { rolesSeeder } from '../roles/roles.seeder';
import { hashPasswordSync } from '../../auth/utils/bycript';
import { fakerUsers } from '../../faker/faker';

const [admin] = rolesSeeder;

export const usersSeeder: UsersSeeders[] = [
  {
    id: 'cllimozdc0001wr3swh067x93',
    firstName: 'cristian',
    lastName: 'jimenez',
    address: 'cra 118b',
    phone: '5234',
    email: 'cj@test.com',
    age: '29',
    password: hashPasswordSync('1234'),
    isActive: true,
    roleId: admin.id,
  },
  {
    id: 'cllimozdc0002wr3swh067x93',
    firstName: 'rodrigo',
    lastName: 'bonilla',
    address: 'cll 100',
    phone: '9876',
    email: 'rb@test.com',
    age: '22',
    password: hashPasswordSync('1234'),
    isActive: true,
    roleId: admin.id,
  },
  {
    id: 'cllimozdc0003wr3swh067x93',
    firstName: 'jesus',
    lastName: 'bravo',
    address: 'cll 200',
    phone: '6543',
    email: 'jb@test.com',
    age: '30',
    password: hashPasswordSync('1234'),
    isActive: true,
    roleId: admin.id,
  },

  ...fakerUsers,
];
