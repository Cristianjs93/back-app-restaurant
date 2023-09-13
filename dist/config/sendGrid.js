"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMailSenGrid = void 0;
const mail_1 = __importDefault(require("@sendgrid/mail"));
const sendMailSenGrid = (data) => {
    const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
    mail_1.default.setApiKey(SENDGRID_API_KEY);
    return mail_1.default.send(data);
};
exports.sendMailSenGrid = sendMailSenGrid;
