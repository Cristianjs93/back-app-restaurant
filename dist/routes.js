"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const healthcheck_1 = __importDefault(require("./api/healthcheck"));
const local_1 = __importDefault(require("./auth/local"));
const users_1 = __importDefault(require("./api/users"));
const routes = (app) => {
    app.use("/api/healthcheck", healthcheck_1.default);
    app.use('/auth/local', local_1.default);
    app.use("/createUser", users_1.default);
};
exports.default = routes;
