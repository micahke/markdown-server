import express, { Application } from "express";
import http from 'http'
import cors from 'cors'
import { Socket, Server } from "socket.io";
import { createRoom } from "./services/rooms";
import { LOCAL_URL, PORT } from "./util/secrets";
import {onSocketConnect} from "./socket";


const app: Application = express()
app.use(cors())
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: LOCAL_URL,
        methods: ['GET', 'POST']
    }    
})

app.get('/create-room', createRoom)


io.on('connection', onSocketConnect)


server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} ⚡️`)
})
