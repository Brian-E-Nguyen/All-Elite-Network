const express = require('express');
const cors = require('cors');
const server = express();
const session = require('express-session');
const authRouter = require('./auth/auth-router');
const helmet = require('helmet');
const dotenv = require('dotenv');

if (process.env.NODE_ENV === 'production') {
  dotenv.config({ path: '../.env.production.local' });
} else {
  dotenv.config({ path: '../.env.development.local' });
}

server.use(cors());
server.use(
  cors({
    origin: [`${process.env.VITE_APP_BACKEND_API}`, 'http://localhost:1337'],
    methods: ['GET', 'POST'],
    allowedHeaders: [
      'Content-Type',
      'Authorization',
      'Access-Control-Allow-Origin',
    ],
  })
);

server.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      imgSrc: ["'self'"],
      connectSrc: ["'self'"],
      fontSrc: ["'self'"],
      objectSrc: ["'none'"],
      mediaSrc: ["'self'"],
      frameSrc: ["'none'"],
    },
  })
);

// server.options('*', cors());
const sessionConfig = {
  name: 'cookie',
  secret: process.env.VITE_APP_SESSION_SECRET,
  cookie: {
    maxAge: 1000 * 30, // valid for 30 seconds
    secure: false,
    httpOnly: true,
  },
  resave: false,
  saveUnintialized: false,
};

server.use(session(sessionConfig));

server.use(helmet());
server.use(express.json());

server.use('/api/auth', authRouter);

module.exports = server;
