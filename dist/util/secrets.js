"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MONGO_PASS = exports.MONGO_ID = exports.PORT = void 0;
const dotenv_flow_1 = __importDefault(require("dotenv-flow"));
dotenv_flow_1.default.config();
exports.PORT = process.env.PORT || 2500;
exports.MONGO_ID = process.env.MONGO_ID;
exports.MONGO_PASS = process.env.MONGO_PASS;
//# sourceMappingURL=secrets.js.map