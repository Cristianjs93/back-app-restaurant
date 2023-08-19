"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const local_controller_1 = require("./local.controller");
const route = (0, express_1.Router)();
route.post('/login', local_controller_1.loginHandler);
exports.default = route;
