"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("./api/healthcheck/index"));
const index_2 = __importDefault(require("./api/restaurants/index"));
const index_3 = __importDefault(require("./api/facilities/index"));
const index_4 = __importDefault(require("./api/reviews/index"));
const index_5 = __importDefault(require("./api/services/index"));
const index_6 = __importDefault(require("./api/orders/index"));
const index_7 = __importDefault(require("./auth/local/index"));
const index_8 = __importDefault(require("./api/users/index"));
const index_9 = __importDefault(require("./api/products/index"));
const index_10 = __importDefault(require("./api/roles/index"));
const routes = (app) => {
    app.use('/api/healthcheck', index_1.default);
    app.use('/api/restaurants', index_2.default);
    app.use('/api/facilities', index_3.default);
    app.use('/api/reviews', index_4.default);
    app.use('/api/services', index_5.default);
    app.use('/api/orders', index_6.default);
    app.use('/api/auth/local', index_7.default);
    app.use('/api/createUser', index_8.default);
    app.use('/api/products', index_9.default);
    app.use('/api/roles', index_10.default);
};
exports.default = routes;
