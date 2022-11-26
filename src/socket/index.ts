import { Socket } from "socket.io";

export function onSocketConnect(socket: Socket) {
  let room = socket.handshake.auth.room;
  let username = socket.handshake.auth.username;

  socket.join(room);
  socket.to(room).emit("user-connected", username);

  socket.on("update-doc", (updatedDoc) => {
    socket.to(room).emit("doc-updated", updatedDoc);
  });

  socket.on("add-block", (index) => {
    socket.to(room).emit("added-block", index);
  });
}
