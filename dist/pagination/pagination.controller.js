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
exports.pagination = void 0;
const restaurants_services_1 = require("../api/restaurants/restaurants.services");
const filters_1 = require("../utils/filters");
const pagination = () => {
    return (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        const { filter, page, limit } = req.query;
        const pageData = parseInt(page);
        const limitData = parseInt(limit);
        const allRestaurants = yield (0, restaurants_services_1.getAllRestaurants)();
        const filteredRestaurants = (0, filters_1.filteredData)(allRestaurants, filter);
        const startIndex = (pageData - 1) * limitData;
        const endIndex = pageData * limitData;
        const results = {};
        if (filteredRestaurants) {
            if (endIndex < filteredRestaurants.length) {
                results.next = {
                    page: pageData + 1,
                    limit: limitData,
                };
            }
            if (startIndex) {
                results.previous = {
                    page: pageData - 1,
                    limit: limitData,
                };
            }
            results.length = filteredRestaurants.length;
            results.data = filteredRestaurants.slice(startIndex, endIndex);
            res.paginatedResults = results;
            next();
        }
    });
};
exports.pagination = pagination;
