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
exports.deleteProduct = exports.updateProduct = exports.createProduct = exports.getProductById = exports.getAllProducts = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function getAllProducts() {
    return __awaiter(this, void 0, void 0, function* () {
        const products = yield prisma.products.findMany({
            select: {
                id: false,
                productName: true,
                price: true,
                description: true,
            },
        });
        return products;
    });
}
exports.getAllProducts = getAllProducts;
function getProductById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const products = yield prisma.products.findMany({
            where: {
                id,
            },
        });
        return products;
    });
}
exports.getProductById = getProductById;
function createProduct(input) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = Object.assign({}, input);
        const product = yield prisma.products.create({
            data,
        });
        return product;
    });
}
exports.createProduct = createProduct;
function updateProduct(data) {
    return __awaiter(this, void 0, void 0, function* () {
        const products = yield prisma.products.update({
            where: {
                id: data.id,
            },
            data,
        });
        return products;
    });
}
exports.updateProduct = updateProduct;
function deleteProduct(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const product = yield prisma.products.delete({
            where: {
                id,
            },
        });
        return product;
    });
}
exports.deleteProduct = deleteProduct;
