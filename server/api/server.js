const express = require('express');
const cors = require('cors');
const server = express();
const session = require('express-session');
const authRouter = require('./auth/auth-router');
const dotenv = require('dotenv');
dotenv.config({ path: '../.env' });

const sessionConfig = {
  name: 'cookie',
  secret: process.env.VITE_APP_SESSION_SECRET || 'gigatummy',
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
