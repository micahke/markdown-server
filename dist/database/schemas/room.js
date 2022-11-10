"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomModel = exports.RoomSchema = void 0;
const mongoose_1 = require("mongoose");
const collection = 'rooms';
exports.RoomSchema = new mongoose_1.Schema({
    _id: { type: String, required: true },
    code: { type: String, required: true },
    doc: { type: String, required: true },
    timestamp: { type: Date, required: true }
});
exports.RoomModel = (0, mongoose_1.model)('Room', exports.RoomSchema, collection);
//# sourceMappingURL=room.js.map