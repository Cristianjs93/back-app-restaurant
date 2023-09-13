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
exports.deleteOrder = exports.updateOrder = exports.createOrder = exports.getOrderById = exports.getAllOrders = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function getAllOrders() {
    return __awaiter(this, void 0, void 0, function* () {
        const orders = yield prisma.orders.findMany({
            select: {
                id: true,
                payment: true,
                delivery_address: true,
                type: true,
                products: true,
                userId: true,
                restaurantId: true,
            },
        });
        return orders;
    });
}
exports.getAllOrders = getAllOrders;
function getOrderById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const order = yield prisma.orders.findUnique({
            where: {
                id,
            },
        });
        return order;
    });
}
exports.getOrderById = getOrderById;
function createOrder(input) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = Object.assign({}, input);
        const order = yield prisma.orders.create({
            data,
        });
        return order;
    });
}
exports.createOrder = createOrder;
function updateOrder(data) {
    return __awaiter(this, void 0, void 0, function* () {
        const order = yield prisma.orders.update({
            where: {
                id: data.id,
            },
            data,
        });
        return order;
    });
}
exports.updateOrder = updateOrder;
function deleteOrder(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const order = yield prisma.orders.delete({
            where: {
                id,
            },
        });
        return order;
    });
}
exports.deleteOrder = deleteOrder;
