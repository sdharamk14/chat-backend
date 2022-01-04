const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
  socket.on('chat message', (msg) => {
    console.log('message: ' + msg);
  });
});

server.listen(4000, () => {
  console.log("listening on *:4000");
});


// const io = new Server(server, {
//   cors: {
//     origin: 'http://localhost:5500',
//   }
// });
// io.on("connection", (socket) => {
//   console.log("a user connected");
// });


