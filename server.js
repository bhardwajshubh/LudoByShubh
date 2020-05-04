require('dotenv').config();
const express = require('express');
const http = require('http');
const app = require('./app');
const sockets = require('socket.io')
const server = http.Server(app);
const io = sockets(server);
io.on('connection' , socket => {
    console.log(`socket connected ${socket.id}`);
})

server.listen(process.env.PORT , () => {
    console.log(`Ludo is running on port ${process.env.PORT}`);
})