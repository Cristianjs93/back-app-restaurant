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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteReview = exports.updateReview = exports.createReview = exports.getReviewById = exports.getAllReviews = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function getAllReviews() {
    return __awaiter(this, void 0, void 0, function* () {
        const reviews = yield prisma.reviews.findMany({
            select: {
                userId: true,
                restaurantId: true,
                id: false,
                title: true,
                rating: true,
                message: true,
                createdAt: true,
            },
        });
        return reviews;
    });
}
exports.getAllReviews = getAllReviews;
function getReviewById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const review = yield prisma.reviews.findUnique({
            where: {
                id,
            },
        });
        return review;
    });
}
exports.getReviewById = getReviewById;
function createReview(input) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = Object.assign({}, input);
        const review = yield prisma.reviews.create({ data });
        return review;
    });
}
exports.createReview = createReview;
function updateReview(data) {
    return __awaiter(this, void 0, void 0, function* () {
        const review = yield prisma.reviews.update({
            where: {
                id: data.id,
            },
            data,
        });
        return review;
    });
}
exports.updateReview = updateReview;
function deleteReview(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const restaurant = yield prisma.reviews.delete({
            where: {
                id,
            },
        });
        return restaurant;
    });
}
exports.deleteReview = deleteReview;
