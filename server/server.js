const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io'); 

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(path.join(publicPath)));

io.on('connection', (socket) => {
    console.log('New user connected');

    socket.emit('newMessage', {
        name: 'Goutham',
        text: 'Hey!',
        createdAt: 1234
    });

    socket.on('createMessage', (message) => {
        console.log('createMessage', message);
    });

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

server.listen(port, () => {
    console.log(`Server is up and running on the port: ${port}`);
});