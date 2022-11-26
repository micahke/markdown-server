import express, { Application } from "express";
import http from "http";
import cors from "cors";
import { Server } from "socket.io";
import { authenticateRoom, createRoom } from "./services/rooms";
import { LOCAL_URL, PORT } from "./util/secrets";
import { onSocketConnect } from "./socket";
import "./database";
import "./static";
import helmet from "helmet";
import { getInitialDoc } from "./services/initial-doc";

const app: Application = express();
app.use(cors());
app.use(helmet());
app.use(express.json());

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: LOCAL_URL,
    methods: ["GET", "POST"],
  },
});

app.get("/create-room", createRoom);
app.get("/initial-doc", getInitialDoc);
app.post("/authenticate-room", authenticateRoom);

io.on("connection", onSocketConnect);

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} ⚡️`);
});
