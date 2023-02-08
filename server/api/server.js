const express = require('express');
const cors = require('cors');
const server = express();

const authRouter = require('./auth/auth-router');

server.use(cors());
server.use(express.json());

server.use('/api/auth', authRouter);

module.exports = server;
