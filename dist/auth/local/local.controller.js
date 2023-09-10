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
exports.loginHandler = void 0;
const user_services_1 = require("../../api/users/user.services");
const bycript_1 = require("../utils/bycript");
const auth_services_1 = require("../auth.services");
const errorHandler_1 = __importDefault(require("../../utils/errorHandler"));
function loginHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { email, password } = req.body;
        try {
            const user = yield (0, user_services_1.getUserByEmail)(email);
            if (!user) {
                return res.status(401).send('Invalid credentials');
            }
            const isMatch = yield (0, bycript_1.comparePassword)(password, user.password);
            if (!isMatch) {
                return res.status(401).send('Invalid credentials');
            }
            const payload = {
                id: user.id,
                email: user.email,
            };
            const token = (0, auth_services_1.signToken)(payload);
            const newUser = {
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                role: user.roleId,
            };
            res.status(200).send({ token, newUser });
        }
        catch (exception) {
            const message = (0, errorHandler_1.default)(exception);
            res.status(400).send({ message });
        }
    });
}
exports.loginHandler = loginHandler;
