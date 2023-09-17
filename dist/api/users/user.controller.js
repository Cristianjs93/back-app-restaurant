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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUserHandler = exports.updateUserHandler = exports.createUserHandler = exports.getUserByEmailHandler = exports.getUserByIdHandler = exports.getAllUsersHandler = void 0;
const errorHandler_1 = __importDefault(require("../../utils/errorHandler"));
const user_services_1 = require("./user.services");
const sendGrid_1 = require("../../config/sendGrid");
function getAllUsersHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const users = yield (0, user_services_1.getAllUsers)();
            const usersResponse = users;
            usersResponse.forEach((user) => delete user.id);
            res.status(200).send(usersResponse);
        }
        catch (exception) {
            const message = (0, errorHandler_1.default)(exception);
            res.status(400).send({ message });
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
                    message: 'User not found',
                });
            }
            res.status(200).send(user);
        }
        catch (exception) {
            const message = (0, errorHandler_1.default)(exception);
            res.status(400).send({ message });
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
                    message: 'User not found',
                });
            }
            res.status(200).json(user);
        }
        catch (exception) {
            const message = (0, errorHandler_1.default)(exception);
            res.status(400).send({ message });
        }
    });
}
exports.getUserByEmailHandler = getUserByEmailHandler;
function createUserHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = req.body;
            const user = yield (0, user_services_1.createUser)(data);
            const emailData = {
                from: 'AdminRicaApp <proyect.restaurant@gmail.com>',
                to: user.email,
                subjet: 'Welcome to Rica App',
                templateId: 'd-3db2b553b737446a8f0d7e80e706e6fe',
                dynamic_template_data: {
                    firstname: user.firstName,
                    lastname: user.lastName,
                },
            };
            (0, sendGrid_1.sendMailSenGrid)(emailData);
            res.status(201).json(user);
        }
        catch (exception) {
            const message = (0, errorHandler_1.default)(exception);
            res.status(400).send({ message });
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
                    message: 'User not found',
                });
            }
            res.status(200).json(user);
        }
        catch (exception) {
            const message = (0, errorHandler_1.default)(exception);
            res.status(400).send({ message });
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
                    message: 'User not found',
                });
            }
            yield (0, user_services_1.deleteUser)(id);
            res.status(200).send(user);
        }
        catch (exception) {
            const message = (0, errorHandler_1.default)(exception);
            res.status(400).send({ message });
        }
    });
}
exports.deleteUserHandler = deleteUserHandler;
