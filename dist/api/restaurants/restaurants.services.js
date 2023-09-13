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
exports.deleteRestaurant = exports.updateRestaurant = exports.createRestaurant = exports.getRestaurantById = exports.getAllRestaurants = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function getAllRestaurants() {
    return __awaiter(this, void 0, void 0, function* () {
        const restaurants = yield prisma.restaurants.findMany({
            select: {
                id: true,
                title: true,
                phone: true,
                address: true,
                about: true,
                latitude: true,
                longitude: true,
                image: true,
                cuisines: true,
                opening_hour: true,
                closing_hour: true,
                opening_first_day: true,
                opening_last_day: true,
                cost_two: true,
                rating: true,
                trending: true,
                reviews: true,
                createdAt: true,
                delivery_time: true,
                logo: true,
                services: true,
                products: true,
            },
        });
        return restaurants;
    });
}
exports.getAllRestaurants = getAllRestaurants;
function getRestaurantById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const restaurants = yield prisma.restaurants.findUnique({
            where: {
                id,
            },
            select: {
                id: true,
                title: true,
                phone: true,
                address: true,
                about: true,
                latitude: true,
                longitude: true,
                image: true,
                cuisines: true,
                opening_hour: true,
                closing_hour: true,
                opening_first_day: true,
                opening_last_day: true,
                cost_two: true,
                rating: true,
                trending: true,
                reviews: true,
                createdAt: true,
                delivery_time: true,
                logo: true,
                services: true,
                products: true,
            },
        });
        return restaurants;
    });
}
exports.getRestaurantById = getRestaurantById;
function createRestaurant(input) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = Object.assign({}, input);
        const restaurant = yield prisma.restaurants.create({
            data,
        });
        return restaurant;
    });
}
exports.createRestaurant = createRestaurant;
function updateRestaurant(data) {
    return __awaiter(this, void 0, void 0, function* () {
        const restaurants = yield prisma.restaurants.update({
            where: {
                id: data.id,
            },
            data,
        });
        return restaurants;
    });
}
exports.updateRestaurant = updateRestaurant;
function deleteRestaurant(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const restaurant = yield prisma.restaurants.delete({
            where: {
                id,
            },
        });
        return restaurant;
    });
}
exports.deleteRestaurant = deleteRestaurant;
