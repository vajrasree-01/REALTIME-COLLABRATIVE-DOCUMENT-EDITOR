const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');

const app = express();
app.use(cors());
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});

let documentContent = "";

io.on('connection', (socket) => {
  console.log('New client connected:', socket.id);
  
  // Send current document to new client
  socket.emit('document', documentContent);
  
  // Handle document edits
  socket.on('edit', (newContent) => {
    documentContent = newContent;
    socket.broadcast.emit('document', newContent);
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected:', socket.id);
  });
});

const PORT = 4000;
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});