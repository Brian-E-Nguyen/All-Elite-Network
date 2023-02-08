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

module.exports = { validatePayload, checkEmailExists };
