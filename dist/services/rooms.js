"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRoom = void 0;
const generate_ids_1 = require("../util/generate-ids");
function createRoom(req, res) {
    const roomID = (0, generate_ids_1.generateRandomString)(12, 'alphanumeric');
    const passcode = (0, generate_ids_1.generateRandomString)(6, 'alphabetic');
    res.send({
        roomID: roomID,
        passcodde: passcode
    });
}
exports.createRoom = createRoom;
//# sourceMappingURL=rooms.js.map