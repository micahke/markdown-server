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
exports.authenticateRoom = exports.createRoom = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const room_1 = require("../database/schemas/room");
const static_1 = require("../static");
const generate_ids_1 = require("../util/generate-ids");
function createRoom(req, res) {
    const roomID = (0, generate_ids_1.generateRandomString)(12, 'alphanumeric');
    const passcode = (0, generate_ids_1.generateRandomString)(6, 'numeric');
    const model = new room_1.RoomModel({
        _id: roomID,
        doc: '# Welcome',
        code: passcode,
        timestamp: Date.now()
    });
    model.save().then((response) => {
        console.log(response);
    });
    res.send({
        roomID: roomID,
        code: passcode,
        initialDoc: static_1.initialData
    });
}
exports.createRoom = createRoom;
function authenticateRoom(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const roomID = req.body.room;
        const code = req.body.code;
        const Room = mongoose_1.default.model('Room', room_1.RoomSchema);
        const room = yield Room.findOne({
            _id: roomID
        }).select('code').exec();
        if (!room) {
            res.sendStatus(404);
            return;
        }
        res.send({
            validated: room.code === code
        });
    });
}
exports.authenticateRoom = authenticateRoom;
//# sourceMappingURL=rooms.js.map