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
exports.deleteProductHandler = exports.updateProductHandler = exports.createProductHandler = exports.getProductByIdHandler = exports.getAllProductsHandler = void 0;
const errorHandler_1 = __importDefault(require("../../utils/errorHandler"));
const product_service_1 = require("./product.service");
function getAllProductsHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const products = yield (0, product_service_1.getAllProducts)();
            res.status(200).json(products);
        }
        catch (exception) {
            const message = (0, errorHandler_1.default)(exception);
            res.status(400).json({ message });
        }
    });
}
exports.getAllProductsHandler = getAllProductsHandler;
function getProductByIdHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const product = yield (0, product_service_1.getProductById)(id);
            if (!product) {
                return res.status(404).json({
                    message: 'Product not found',
                });
            }
            res.status(200).json(product);
        }
        catch (exception) {
            const message = (0, errorHandler_1.default)(exception);
            res.status(400).json({ message });
        }
    });
}
exports.getProductByIdHandler = getProductByIdHandler;
function createProductHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = req.body;
            const product = yield (0, product_service_1.createProduct)(data);
            res.status(201).json(product);
        }
        catch (exception) {
            const message = (0, errorHandler_1.default)(exception);
            res.status(400).json({ message });
        }
    });
}
exports.createProductHandler = createProductHandler;
function updateProductHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = req.body;
            const product = yield (0, product_service_1.updateProduct)(data);
            if (!product) {
                return res.status(404).json({
                    message: 'Product not found',
                });
            }
            res.status(200).json(product);
        }
        catch (exception) {
            const message = (0, errorHandler_1.default)(exception);
            res.status(400).json({ message });
        }
    });
}
exports.updateProductHandler = updateProductHandler;
function deleteProductHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.body;
            const product = yield (0, product_service_1.deleteProduct)(id);
            if (!product) {
                return res.status(404).json({
                    message: 'Product not found',
                });
            }
            res.status(200).json(product);
        }
        catch (exception) {
            const message = (0, errorHandler_1.default)(exception);
            res.status(400).json({ message });
        }
    });
}
exports.deleteProductHandler = deleteProductHandler;
