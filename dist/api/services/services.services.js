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
exports.deleteService = exports.updateService = exports.createService = exports.getServiceById = exports.getAllServices = void 0;
const client_1 = require("@prisma/client");
const primsa = new client_1.PrismaClient();
function getAllServices() {
    return __awaiter(this, void 0, void 0, function* () {
        const services = yield primsa.services.findMany({
            select: {
                type: true,
            },
        });
        return services;
    });
}
exports.getAllServices = getAllServices;
function getServiceById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const service = yield primsa.services.findUnique({
            where: {
                id,
            },
        });
        return service;
    });
}
exports.getServiceById = getServiceById;
function createService(input) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = Object.assign({}, input);
        const service = yield primsa.services.create({
            data,
        });
        return service;
    });
}
exports.createService = createService;
function updateService(data) {
    return __awaiter(this, void 0, void 0, function* () {
        const service = yield primsa.services.update({
            where: {
                id: data.id,
            },
            data,
        });
        return service;
    });
}
exports.updateService = updateService;
function deleteService(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const service = yield primsa.services.delete({
            where: {
                id,
            },
        });
        return service;
    });
}
exports.deleteService = deleteService;
