"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersSeeder = void 0;
const roles_seeder_1 = require("../roles/roles.seeder");
const bycript_1 = require("../../auth/utils/bycript");
const faker_1 = require("../../faker/faker");
const [admin, client] = roles_seeder_1.rolesSeeder;
exports.usersSeeder = [
    {
        id: 'cllimozdc0001wr3swh067x93',
        firstName: 'cristian',
        lastName: 'jimenez',
        address: 'cra 118b',
        phone: '5234',
        email: 'cj@test.com',
        age: '29',
        password: (0, bycript_1.hashPasswordSync)('1234'),
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
        password: (0, bycript_1.hashPasswordSync)('1234'),
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
        password: (0, bycript_1.hashPasswordSync)('1234'),
        isActive: true,
        roleId: admin.id,
    },
    {
        id: 'cllimozdc0004wr3swh067x93',
        firstName: 'cristian',
        lastName: 'jimenez',
        address: 'fake street 123',
        phone: '5234',
        email: 'cjs@test.com',
        age: '29',
        password: (0, bycript_1.hashPasswordSync)('1234'),
        isActive: true,
        roleId: client.id,
    },
    ...faker_1.fakerUsers,
];
