"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.onSocketConnect = void 0;
function onSocketConnect(socket) {
    let room = socket.handshake.auth.room;
    let username = socket.handshake.auth.username;
    socket.join(room);
    socket.to(room).emit('user-connected', username);
    socket.on('update-doc', (updatedDoc) => {
        socket.to(room).emit('doc-updated', updatedDoc);
    });
}
exports.onSocketConnect = onSocketConnect;
//# sourceMappingURL=index.js.map