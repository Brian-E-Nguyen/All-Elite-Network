const express = require('express');
const cors = require('cors');
const server = express();
const session = require('express-session');
require('dotenv').config();
const authRouter = require('./auth/auth-router');

console.log(process.env.SESSION_SECRET);
const sessionConfig = {
  name: 'cookie',
  secret: process.env.SESSION_SECRET || 'gigatummy',
  cookie: {
    maxAge: 1000 * 30, // valid for 30 seconds
    secure: false,
    httpOnly: true,
  },
  resave: false,
  saveUnintialized: false,
};

server.use(session(sessionConfig));
server.use(cors());
server.use(express.json());

server.use('/api/auth', authRouter);

module.exports = server;
