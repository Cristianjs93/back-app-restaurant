"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.healthcheckHandler = void 0;
const healthcheckHandler = (req, res) => {
    res.status(200).json({ message: "Server ok" });
};
exports.healthcheckHandler = healthcheckHandler;
