const dotenv = require('dotenv');
dotenv.config({ path: '../.env' });
const jwt = require('jsonwebtoken');

module.exports = function generateToken(user) {
  const payload = {
    subject: user._id,
    email: user.email,
    role: user.role,
  };

  const secret = process.env.VITE_APP_JWT_SECRET;
  const options = {
    expiresIn: '2d',
  };

  return jwt.sign(payload, secret, options);
};
