"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser = exports.deleteUser = exports.getUserByEmail = exports.getUserById = exports.createUser = exports.getAllUsers = void 0;
const client_1 = require("@prisma/client");
const bycript_1 = require("../../auth/utils/bycript");
const prisma = new client_1.PrismaClient();
function getAllUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        const users = yield prisma.users.findMany();
        return users;
    });
}
exports.getAllUsers = getAllUsers;
function createUser(input) {
    return __awaiter(this, void 0, void 0, function* () {
        const hashedPassword = yield (0, bycript_1.hashPassword)(input.password);
        const data = Object.assign(Object.assign({}, input), { password: hashedPassword });
        const user = yield prisma.users.create({
            data
        });
        return user;
    });
}
exports.createUser = createUser;
function getUserById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield prisma.users.findUnique({
            where: {
                id,
            },
        });
        return user;
    });
}
exports.getUserById = getUserById;
function getUserByEmail(email) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield prisma.users.findUnique({
            where: {
                email,
            },
        });
        return user;
    });
}
exports.getUserByEmail = getUserByEmail;
function deleteUser(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield prisma.users.delete({
            where: {
                id,
            },
        });
        return user;
    });
}
exports.deleteUser = deleteUser;
function updateUser(data) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield prisma.users.update({
            where: {
                id: data.id,
            },
            data,
        });
        return user;
    });
}
exports.updateUser = updateUser;
