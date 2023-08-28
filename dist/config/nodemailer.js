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
exports.sendNodemailer = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const createGmailTransporter = () => {
    const hostname = process.env.SMTP_SERVER;
    const port = Number(process.env.SMTP_PORT);
    const username = process.env.SMTP_USER;
    const password = process.env.SMTP_PASSWORD;
    const transporter = nodemailer_1.default.createTransport({
        host: hostname,
        port,
        secure: true,
        auth: {
            user: username,
            pass: password,
        },
        logger: false,
    });
    return transporter;
};
const sendNodemailer = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const transporter = createGmailTransporter();
    const info = yield transporter.sendMail(data);
    return info;
});
exports.sendNodemailer = sendNodemailer;
