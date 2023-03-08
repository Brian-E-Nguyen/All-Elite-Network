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
  console.log(email);
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

module.exports = {
  validatePayload,
  validateLogin,
  checkEmailExists,
};
