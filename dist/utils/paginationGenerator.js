"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginationGenerator = void 0;
const paginationGenerator = (data, page, limit, allData) => {
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const results = {};
    if (endIndex < data.length) {
        results.next = {
            page: page + 1,
            limit: limit,
        };
    }
    if (startIndex) {
        results.previous = {
            page: page - 1,
            limit: limit,
        };
    }
    results.length = data.length;
    results.data = data.slice(startIndex, endIndex);
    results.allRestaurants = allData;
    return results;
};
exports.paginationGenerator = paginationGenerator;
