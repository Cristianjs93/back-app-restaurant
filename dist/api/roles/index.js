"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const roles_controller_1 = require("./roles.controller");
const router = (0, express_1.Router)();
router.get('/', roles_controller_1.getAllRoles);
exports.default = router;
