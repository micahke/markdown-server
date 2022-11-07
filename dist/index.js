"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const cors_1 = __importDefault(require("cors"));
const rooms_1 = require("./services/rooms");
const secrets_1 = require("./util/secrets");
const { Server } = require("socket.io");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
const server = http_1.default.createServer(app);
const io = new Server(server, {
    cors: {
        origin: process.env.LOCAL_URL,
        methods: ['GET', 'POST']
    }
});
app.get('/create-room', rooms_1.createRoom);
io.on('connection', (socket) => {
    let room = socket.handshake.auth.room;
    socket.join(room);
    socket.on('update-doc', (updatedDoc) => {
        console.log(room);
        socket.to(room).emit('doc-updated', updatedDoc);
    });
});
server.listen(secrets_1.PORT, () => {
    console.log(`Server is running on port ${secrets_1.PORT} ⚡️`);
});
//# sourceMappingURL=index.js.map