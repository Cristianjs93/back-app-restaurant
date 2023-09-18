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
exports.deleteOrderHandler = exports.updateOrderHandler = exports.createOrderHandler = exports.getOrderByIdHandler = exports.getAllOrdersHandler = void 0;
const errorHandler_1 = __importDefault(require("../../utils/errorHandler"));
const orders_services_1 = require("./orders.services");
const sendGrid_1 = require("../../config/sendGrid");
const user_services_1 = require("../users/user.services");
function getAllOrdersHandler(_, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const orders = yield (0, orders_services_1.getAllOrders)();
            res.status(200).json(orders);
        }
        catch (exception) {
            const message = (0, errorHandler_1.default)(exception);
            res.status(400).json({ message });
        }
    });
}
exports.getAllOrdersHandler = getAllOrdersHandler;
function getOrderByIdHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const order = yield (0, orders_services_1.getOrderById)(id);
            if (!order) {
                return res.status(404).json({ message: 'Order not found' });
            }
            res.status(200).json(order);
        }
        catch (exception) {
            const message = (0, errorHandler_1.default)(exception);
            res.status(400).json({ message });
        }
    });
}
exports.getOrderByIdHandler = getOrderByIdHandler;
function createOrderHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = req.body;
            const user = (yield (0, user_services_1.getUserByEmail)(data.userEmail));
            delete data.userEmail;
            if (user) {
                data.userId = user.id;
            }
            const order = yield (0, orders_services_1.createOrder)(data);
            const emailData = {
                from: 'AdminRicaApp <proyect.restaurant@gmail.com>',
                to: user.email,
                subjet: 'Order created successfully',
                templateId: 'd-5970a713b8994a4caf27f89cead51aa1',
                dynamic_template_data: {
                    firstname: user.firstName,
                    lastname: user.lastName,
                    orderId: order.id,
                },
            };
            (0, sendGrid_1.sendMailSenGrid)(emailData);
            res.status(201).json(order);
        }
        catch (exception) {
            const message = (0, errorHandler_1.default)(exception);
            res.status(400).json({ message });
        }
    });
}
exports.createOrderHandler = createOrderHandler;
function updateOrderHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = req.body;
            const order = yield (0, orders_services_1.updateOrder)(data);
            if (!order) {
                return res.status(404).json({ message: 'Order not found' });
            }
            res.status(200).json(order);
        }
        catch (exception) {
            const message = (0, errorHandler_1.default)(exception);
            res.status(400).json({ message });
        }
    });
}
exports.updateOrderHandler = updateOrderHandler;
function deleteOrderHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.body;
            const order = yield (0, orders_services_1.getOrderById)(id);
            if (!order) {
                return res.status(404).json({ message: 'Order not found' });
            }
            yield (0, orders_services_1.deleteOrder)(id);
            res.status(200).json({ message: 'Order deleted succesfully' });
        }
        catch (exception) {
            const message = (0, errorHandler_1.default)(exception);
            res.status(400).json({ message });
        }
    });
}
exports.deleteOrderHandler = deleteOrderHandler;
