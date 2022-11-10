"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const secrets_1 = require("../util/secrets");
const clusterURL = `mongodb+srv://${secrets_1.MONGO_ID}:${secrets_1.MONGO_PASS}@live-markdown.nemylu3.mongodb.net/?retryWrites=true&w=majority`;
const config = {
    dbName: "development",
    useNewUrlParser: true,
    useUnifiedTopology: true
};
mongoose_1.default.connect(clusterURL, config, () => {
    console.log("Connected to database");
});
exports.db = mongoose_1.default.connection;
exports.db.on('error', () => {
    console.error('A database error occurred');
});
//# sourceMappingURL=index.js.map