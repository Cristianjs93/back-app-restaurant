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
exports.deleteReviewHandler = exports.updateReviewHandler = exports.createReviewHandler = exports.getReviewByIdHandler = exports.getAllReviewsHandler = void 0;
const errorHandler_1 = __importDefault(require("../../utils/errorHandler"));
const reviews_services_1 = require("./reviews.services");
function getAllReviewsHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const reviews = yield (0, reviews_services_1.getAllReviews)();
            res.status(200).json(reviews);
        }
        catch (exception) {
            const message = (0, errorHandler_1.default)(exception);
            res.status(400).send({ message });
        }
    });
}
exports.getAllReviewsHandler = getAllReviewsHandler;
function getReviewByIdHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const review = yield (0, reviews_services_1.getReviewById)(id);
            if (!review) {
                return res.status(404).json({
                    message: 'Review not found',
                });
            }
            res.status(200).json(review);
        }
        catch (exception) {
            const message = (0, errorHandler_1.default)(exception);
            res.status(400).send({ message });
        }
    });
}
exports.getReviewByIdHandler = getReviewByIdHandler;
function createReviewHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = req.body;
            const review = yield (0, reviews_services_1.createReview)(data);
            res.status(201).json(review);
        }
        catch (exception) {
            const message = (0, errorHandler_1.default)(exception);
            res.status(400).send({ message });
        }
    });
}
exports.createReviewHandler = createReviewHandler;
function updateReviewHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = req.body;
            const review = yield (0, reviews_services_1.updateReview)(data);
            if (!review) {
                return res.status(404).json({ message: 'Review not found' });
            }
            res.status(200).json(review);
        }
        catch (exception) {
            const message = (0, errorHandler_1.default)(exception);
            res.status(400).send({ message });
        }
    });
}
exports.updateReviewHandler = updateReviewHandler;
function deleteReviewHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.body;
            const review = yield (0, reviews_services_1.getReviewById)(id);
            if (!review) {
                return res.status(404).json({
                    message: 'User not found',
                });
            }
            yield (0, reviews_services_1.deleteReview)(id);
        }
        catch (exception) {
            const message = (0, errorHandler_1.default)(exception);
            res.status(400).send({ message });
        }
    });
}
exports.deleteReviewHandler = deleteReviewHandler;
