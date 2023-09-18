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
exports.handleCheckout = void 0;
const stripe_1 = __importDefault(require("stripe"));
const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY;
const stripe = new stripe_1.default(STRIPE_SECRET_KEY, {
    apiVersion: '2023-08-16',
});
const handleCheckout = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { paymentMethod, amount } = req.body;
        const { id } = paymentMethod;
        const payment = yield stripe.paymentIntents.create({
            payment_method: id,
            amount,
            currency: 'usd',
            confirm: true,
            description: 'Software development service provider',
            return_url: 'http://localhost:3004/payment-success',
        });
        res.status(201).json({ message: 'Payment successful', payment });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.handleCheckout = handleCheckout;
