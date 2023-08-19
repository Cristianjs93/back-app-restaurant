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
exports.deleteUserHandler = exports.updateUserHandler = exports.createUserHandler = exports.getUserByEmailHandler = exports.getUserByIdHandler = exports.getAllUsersHandler = void 0;
const user_services_1 = require("./user.services");
function getAllUsersHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const users = yield (0, user_services_1.getAllUsers)();
            res.status(200).json(users);
        }
        catch (error) {
            res.status(400).send({ message: error.message });
        }
    });
}
exports.getAllUsersHandler = getAllUsersHandler;
function getUserByIdHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.users;
            const user = yield (0, user_services_1.getUserById)(id);
            if (!user) {
                return res.status(404).json({
                    message: "User not found"
                });
            }
            res.status(200).json(user);
        }
        catch (error) {
            res.status(400).send({ message: error.message });
        }
    });
}
exports.getUserByIdHandler = getUserByIdHandler;
function getUserByEmailHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { email } = req.users;
            const user = yield (0, user_services_1.getUserByEmail)(email);
            if (!user) {
                return res.status(404).json({
                    message: "User not found"
                });
            }
            return res.status(200).json(user);
        }
        catch (error) {
            res.status(400).send({ message: error.message });
        }
    });
}
exports.getUserByEmailHandler = getUserByEmailHandler;
function createUserHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = req.body;
            const user = yield (0, user_services_1.createUser)(data);
            res.status(201).json(user);
        }
        catch (error) {
            res.status(400).send({ message: error.message });
        }
    });
}
exports.createUserHandler = createUserHandler;
function updateUserHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = req.body;
            const user = yield (0, user_services_1.updateUser)(data);
            if (!user) {
                return res.status(404).json({
                    message: "User not found"
                });
            }
            res.status(200).json(user);
        }
        catch (error) {
            res.status(400).send({ message: error.message });
        }
    });
}
exports.updateUserHandler = updateUserHandler;
function deleteUserHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.users;
            const user = yield (0, user_services_1.getUserByEmail)(id);
            if (!user) {
                return res.status(404).json({
                    message: "User not found"
                });
            }
            yield (0, user_services_1.deleteUser)(id);
        }
        catch (error) {
            res.status(400).send({ message: error.message });
        }
    });
}
exports.deleteUserHandler = deleteUserHandler;