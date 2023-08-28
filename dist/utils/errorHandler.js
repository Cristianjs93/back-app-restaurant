"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function errorHandler(exception) {
    const message = typeof exception === 'string'
        ? exception.toUpperCase()
        : exception instanceof Error
            ? exception.message
            : 'Something was wrong';
    return message;
}
exports.default = errorHandler;
