require('dotenv').config();
const express = require('express');
const http = require('http');
const app = require('./app');
const server = http.Server(app);


server.listen(process.env.PORT , () => {
    console.log(`Ludo is running on port ${process.env.PORT}`);
})