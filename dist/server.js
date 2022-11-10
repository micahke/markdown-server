"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const cors_1 = __importDefault(require("cors"));
const socket_io_1 = require("socket.io");
const rooms_1 = require("./services/rooms");
const secrets_1 = require("./util/secrets");
const socket_1 = require("./socket");
require("./database");
require("./static");
const helmet_1 = __importDefault(require("helmet"));
const initial_doc_1 = require("./services/initial-doc");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use((0, helmet_1.default)());
app.use(express_1.default.json());
const server = http_1.default.createServer(app);
const io = new socket_io_1.Server(server, {
    cors: {
        origin: secrets_1.LOCAL_URL,
        methods: ['GET', 'POST']
    }
});
app.get('/create-room', rooms_1.createRoom);
app.get('/initial-doc', initial_doc_1.getInitialDoc);
app.post('/authenticate-room', rooms_1.authenticateRoom);
io.on('connection', socket_1.onSocketConnect);
server.listen(secrets_1.PORT, () => {
    console.log(`Server is running on port ${secrets_1.PORT} ⚡️`);
});
//# sourceMappingURL=server.js.map