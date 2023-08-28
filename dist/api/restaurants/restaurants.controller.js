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
exports.deleteRestaurantHandler = exports.updateRestaurantHandler = exports.createRestaurantHandler = exports.getRestaurantByIdHandler = exports.getAllRestaurantsHandler = void 0;
const errorHandler_1 = __importDefault(require("../../utils/errorHandler"));
const restaurants_services_1 = require("./restaurants.services");
function getAllRestaurantsHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const restaurants = yield (0, restaurants_services_1.getAllRestaurants)();
            return res.status(200).json(restaurants);
        }
        catch (exception) {
            const message = (0, errorHandler_1.default)(exception);
            return res.status(400).send({ message });
        }
    });
}
exports.getAllRestaurantsHandler = getAllRestaurantsHandler;
function getRestaurantByIdHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const restaurant = yield (0, restaurants_services_1.getRestaurantById)(id);
            if (!restaurant) {
                return res.status(404).json({
                    message: 'Restaurant not found',
                });
            }
            return res.status(200).json(restaurant);
        }
        catch (exception) {
            const message = (0, errorHandler_1.default)(exception);
            return res.status(400).send({ message });
        }
    });
}
exports.getRestaurantByIdHandler = getRestaurantByIdHandler;
function createRestaurantHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = req.body;
            const restaurant = yield (0, restaurants_services_1.createRestaurant)(data);
            return res.status(201).json(restaurant);
        }
        catch (exception) {
            const message = (0, errorHandler_1.default)(exception);
            return res.status(400).send({ message });
        }
    });
}
exports.createRestaurantHandler = createRestaurantHandler;
function updateRestaurantHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = req.body;
            const restaurant = yield (0, restaurants_services_1.updateRestaurant)(data);
            if (!restaurant) {
                return res.status(404).json({
                    message: 'User not found',
                });
            }
            return res.status(200).json(restaurant);
        }
        catch (exception) {
            const message = (0, errorHandler_1.default)(exception);
            return res.status(400).send({ message });
        }
    });
}
exports.updateRestaurantHandler = updateRestaurantHandler;
function deleteRestaurantHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.body;
            const restaurant = yield (0, restaurants_services_1.getRestaurantById)(id);
            if (!restaurant) {
                return res.status(404).json({
                    message: 'Restaurant not found',
                });
            }
            yield (0, restaurants_services_1.deleteRestaurant)(id);
            return res.status(200).json({ message: 'Restaurant deleted succesfully' });
        }
        catch (exception) {
            const message = (0, errorHandler_1.default)(exception);
            return res.status(400).send({ message });
        }
    });
}
exports.deleteRestaurantHandler = deleteRestaurantHandler;
