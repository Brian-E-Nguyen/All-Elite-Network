const User = require('../../models/user.model');

function validatePayload(req, res, next) {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(404).json({
      message: 'email and password required',
    });
  }
  next();
}

module.exports = { validatePayload };
