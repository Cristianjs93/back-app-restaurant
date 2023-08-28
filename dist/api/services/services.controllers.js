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
exports.deleteServiceHandler = exports.updateServiceHandler = exports.createServiceHandler = exports.getServiceByIdHandler = exports.getAllServicesHandler = void 0;
const errorHandler_1 = __importDefault(require("../../utils/errorHandler"));
const services_services_1 = require("./services.services");
function getAllServicesHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const services = yield (0, services_services_1.getAllServices)();
            return res.status(200).json(services);
        }
        catch (exception) {
            const message = (0, errorHandler_1.default)(exception);
            return res.status(400).json({ message });
        }
    });
}
exports.getAllServicesHandler = getAllServicesHandler;
function getServiceByIdHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const service = yield (0, services_services_1.getServiceById)(id);
            if (!service) {
                return res.status(404).json({ message: 'service not found' });
            }
            return res.status(200).json(service);
        }
        catch (exception) {
            const message = (0, errorHandler_1.default)(exception);
            return res.status(400).json({ message });
        }
    });
}
exports.getServiceByIdHandler = getServiceByIdHandler;
function createServiceHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = req.body;
            const service = yield (0, services_services_1.createService)(data);
            return res.status(201).json(service);
        }
        catch (exception) {
            const message = (0, errorHandler_1.default)(exception);
            return res.status(400).json({ message });
        }
    });
}
exports.createServiceHandler = createServiceHandler;
function updateServiceHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = req.body;
            const service = yield (0, services_services_1.updateService)(data);
            if (!service) {
                return res.status(404).json({
                    message: 'Service not found',
                });
            }
            return res.status(200).json(service);
        }
        catch (exception) {
            const message = (0, errorHandler_1.default)(exception);
            return res.status(400).json({ message });
        }
    });
}
exports.updateServiceHandler = updateServiceHandler;
function deleteServiceHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.body;
            const service = yield (0, services_services_1.getServiceById)(id);
            if (!service) {
                return res.status(404).json({
                    message: 'Service not found',
                });
            }
            yield (0, services_services_1.deleteService)(id);
            return res.status(200).json({ message: 'Service deleted succesfully' });
        }
        catch (exception) {
            const message = (0, errorHandler_1.default)(exception);
            return res.status(400).json({ message });
        }
    });
}
exports.deleteServiceHandler = deleteServiceHandler;
