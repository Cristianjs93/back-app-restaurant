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
exports.getAllRoles = void 0;
const errorHandler_1 = __importDefault(require("../../utils/errorHandler"));
const roles_services_1 = require("./roles.services");
function getAllRoles(_, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const roles = yield (0, roles_services_1.getRoles)();
            res.status(200).send(roles);
        }
        catch (exception) {
            const message = (0, errorHandler_1.default)(exception);
            res.status(400).json({ message });
        }
    });
}
exports.getAllRoles = getAllRoles;
