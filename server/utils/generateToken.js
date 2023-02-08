const jwt = require('jsonwebtoken');

export default function generateToken(user) {
  const payload = {
    subject: user._id,
    email: user.email,
  };

  const secret = process.env.JWT_SECRET;
  const options = {
    expiresIn: '2d',
  };

  return jwt.sign(payload, secret, options);
}
