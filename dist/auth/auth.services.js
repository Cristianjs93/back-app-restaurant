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
exports.getRoleById = exports.signToken = exports.verifyToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const SECRET = process.env.JWT_SECRET;
const verifyToken = (token) => {
    const decoded = jsonwebtoken_1.default.verify(token, SECRET);
    return decoded;
};
exports.verifyToken = verifyToken;
const signToken = (payload) => {
    const token = jsonwebtoken_1.default.sign(payload, SECRET, {
        expiresIn: `${1000 * 60 * 60 * 24}`,
    });
    return token;
};
exports.signToken = signToken;
function getRoleById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const role = yield prisma.roles.findUnique({
            where: {
                id,
            },
        });
        return role;
    });
}
exports.getRoleById = getRoleById;
