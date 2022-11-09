import express, { Application } from "express";
import http from 'http'
import cors from 'cors'
import {	Server } from "socket.io";
import { authenticateRoom, createRoom } from "./services/rooms";
import { LOCAL_URL, PORT } from "./util/secrets";
import {onSocketConnect} from "./socket";
import './database'
import helmet from "helmet";


const app: Application = express()
app.use(cors())
// app.use(helmet())
app.use(express.json())


const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: LOCAL_URL,
        methods: ['GET', 'POST']
    }    
})

app.get('/create-room', createRoom)
app.post('/authenticate-room', authenticateRoom)


io.on('connection', onSocketConnect)


server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} ⚡️`)
})
