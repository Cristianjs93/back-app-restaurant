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
exports.deleteFacility = exports.updateFacility = exports.createFacility = exports.getFacilityById = exports.getAllFacilities = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function getAllFacilities() {
    return __awaiter(this, void 0, void 0, function* () {
        const facilities = yield prisma.facilities.findMany({
            select: {
                restaurantId: true,
                phone: true,
                address: true,
            },
        });
        return facilities;
    });
}
exports.getAllFacilities = getAllFacilities;
function getFacilityById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const facility = yield prisma.facilities.findUnique({
            where: {
                id,
            },
        });
        return facility;
    });
}
exports.getFacilityById = getFacilityById;
function createFacility(input) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = Object.assign({}, input);
        const facility = yield prisma.facilities.create({
            data,
        });
        return facility;
    });
}
exports.createFacility = createFacility;
function updateFacility(data) {
    return __awaiter(this, void 0, void 0, function* () {
        const facility = yield prisma.facilities.update({
            where: {
                id: data.id,
            },
            data,
        });
        return facility;
    });
}
exports.updateFacility = updateFacility;
function deleteFacility(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const facility = yield prisma.facilities.delete({
            where: {
                id,
            },
        });
        return facility;
    });
}
exports.deleteFacility = deleteFacility;
