"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRandomString = void 0;
const randomstring_1 = __importDefault(require("randomstring"));
function generateRandomString(length, charset) {
    return randomstring_1.default.generate({
        length: length,
        charset: charset
    });
}
exports.generateRandomString = generateRandomString;
//# sourceMappingURL=generate-ids.js.map