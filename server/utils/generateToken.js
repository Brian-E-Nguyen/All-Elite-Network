const jwt = require('jsonwebtoken');

module.exports = function generateToken(user) {
  const payload = {
    subject: user._id,
    email: user.email,
  };

  const secret = process.env.VITE_JWT_SECRET;
  const options = {
    expiresIn: '2d',
  };

  return jwt.sign(payload, secret, options);
};
