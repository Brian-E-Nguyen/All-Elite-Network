const bcrypt = require('bcryptjs');
const User = require('../../models/user.model');
const jwt = require('jsonwebtoken');

function validatePayload(req, res, next) {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(404).json({
      message: 'email and password required',
    });
  }
  next();
}

async function checkEmailExists(req, res, next) {
  const { email } = req.body;
  await User.findOne({ email })
    .then((user) => {
      if (user) {
        return res.status(400).json({
          message: 'Email already exists',
        });
      }
      next();
    })
    .catch((err) => {
      res.staus(500).json({
        message: 'Error finding email',
        stack: err.stack,
      });
    });
}

async function validateLogin(req, res, next) {
  const { email, password } = req.body;
  User.findOne({ email }).then((user) => {
    if (!user || !bcrypt.compareSync(password, user.password)) {
      return res.status(400).json({
        message: 'Email or password is incorrect',
      });
    }
    req.user = user;
    next();
  });
}

function restricted(req, res, next) {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: 'no token' });
  }

  jwt.verify(token, process.env.VITE_APP_JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'bad token' });
    }
    next();
  });
}

module.exports = {
  restricted,
  validatePayload,
  validateLogin,
  checkEmailExists,
};
