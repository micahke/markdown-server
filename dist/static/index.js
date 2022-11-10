"use strict";
// this should deal with reading the local markdown file into memory to serve it as the initial  document
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initialData = void 0;
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const filePath = path_1.default.join(__dirname, '..', '..', 'initial.md');
exports.initialData = fs_1.default.readFileSync(filePath, {
    encoding: 'utf8',
    flag: 'r'
});
console.log(exports.initialData);
//# sourceMappingURL=index.js.map