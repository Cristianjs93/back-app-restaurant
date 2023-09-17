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
exports.deleteFacilityHandler = exports.updateFacilityHandler = exports.createFacilityHandler = exports.getFacilityByIdHandler = exports.getAllFacilitiesHandler = void 0;
const errorHandler_1 = __importDefault(require("../../utils/errorHandler"));
const facilities_services_1 = require("./facilities.services");
function getAllFacilitiesHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const facilities = yield (0, facilities_services_1.getAllFacilities)();
            res.status(200).json(facilities);
        }
        catch (exception) {
            const message = (0, errorHandler_1.default)(exception);
            res.status(400).json({ message });
        }
    });
}
exports.getAllFacilitiesHandler = getAllFacilitiesHandler;
function getFacilityByIdHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const facility = yield (0, facilities_services_1.getFacilityById)(id);
            if (!facility) {
                return res.status(404).json({
                    message: 'Facility not found',
                });
            }
            res.status(200).json(facility);
        }
        catch (exception) {
            const message = (0, errorHandler_1.default)(exception);
            res.status(400).json({ message });
        }
    });
}
exports.getFacilityByIdHandler = getFacilityByIdHandler;
function createFacilityHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = req.body;
            const facility = yield (0, facilities_services_1.createFacility)(data);
            res.status(201).json(facility);
        }
        catch (exception) {
            const message = (0, errorHandler_1.default)(exception);
            res.status(400).json({ message });
        }
    });
}
exports.createFacilityHandler = createFacilityHandler;
function updateFacilityHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = req.body;
            const facility = yield (0, facilities_services_1.updateFacility)(data);
            if (!facility) {
                return res.status(404).json({ message: 'Facility not found' });
            }
            res.status(200).json(facility);
        }
        catch (exception) {
            const message = (0, errorHandler_1.default)(exception);
            res.status(400).json({ message });
        }
    });
}
exports.updateFacilityHandler = updateFacilityHandler;
function deleteFacilityHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.body;
            const facility = yield (0, facilities_services_1.getFacilityById)(id);
            if (!facility) {
                return res.status(404).json({
                    message: 'Facility not found',
                });
            }
            yield (0, facilities_services_1.deleteFacility)(id);
            res.status(200).json(facility);
        }
        catch (exception) {
            const message = (0, errorHandler_1.default)(exception);
            res.status(400).json({ message });
        }
    });
}
exports.deleteFacilityHandler = deleteFacilityHandler;
