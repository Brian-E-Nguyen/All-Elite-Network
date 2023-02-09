const router = require('express').Router();
const bcrypt = require('bcryptjs');
const User = require('../../models/user.model');
const generateToken = require('../../utils/generateToken');

const {
  validatePayload,
  checkEmailExists,
  validateLogin,
  restricted,
} = require('./auth-middleware');

router.post(
  '/register',
  validatePayload,
  checkEmailExists,
  async (req, res) => {
    // Password hash
    const user = req.body;
    const hash = bcrypt.hashSync(user.password, process.env.VITE_BCRYPT_ROUNDS);
    user.password = hash;

    // Attempt user creation
    await User.create({
      email: user.email,
      password: user.password,
      role: 'user',
    })
      .then((result) => {
        return res.status(200).json({
          message: 'User registration completed',
          user: result,
        });
      })
      .catch((err) => {
        return res.status(500).json({
          message: 'User registration failed',
          stack: err.stack,
        });
      });
  }
);

router.post('/login', validatePayload, validateLogin, async (req, res) => {
  try {
    console.log(req.user);
    const token = generateToken(req.user);
    req.headers.authorization = token;
    res.status(200).json({
      message: 'Successfully logged in!',
      token,
    });
  } catch (err) {
    res.status(500).json({
      message: 'Something went wrong with user login. Please try again later',
      stack: err.stack,
    });
  }
});

router.get('/restricted', restricted, (req, res) => {
  console.log('success');
});

module.exports = router;
