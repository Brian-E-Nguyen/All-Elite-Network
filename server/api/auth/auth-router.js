const router = require('express').Router();
const bcrypt = require('bcryptjs');
const User = require('../../models/user.model');
const generateToken = require('../../utils/generateToken');
const jwt = require('jsonwebtoken');

const {
  validatePayload,
  checkEmailExists,
  validateLogin,
} = require('./auth-middleware');

router.post(
  '/register',
  validatePayload,
  checkEmailExists,
  async (req, res) => {
    // Password hash
    const user = req.body;
    // For some reason the VITE_BCRYPT_ROUNDS produced
    // an 'invalid salt version', but when I insert a
    // hardcoded number, the algorithm does work

    // const hash = bcrypt.hashSync(
    //   user.password,
    //   process.env.VITE_BCRYPT_ROUNDS || 8
    // );
    const hash = bcrypt.hashSync(user.password, 7);
    user.password = hash;

    // Attempt user creation
    await User.create({
      email: user.email,
      password: user.password,
      role: 'user',
      plan: user.plan,
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
    const token = generateToken(req.user);
    req.headers.authorization = token;
    req.session.user = req.user;
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

router.put('/update', async (req, res) => {
  const user = req.body;
  const hash = bcrypt.hashSync(user.password, 7);
  user.password = hash;

  await User.updateOne({
    email: user.email,
    password: user.password,
    role: 'user',
    plan: user.plan,
  })
    .then((result) => {
      return res.status(200).json({
        message: 'User updated successfully',
        user: result,
      });
    })
    .catch((err) => {
      return res.status(500).json({
        message: 'User failed to update',
        stack: err.stack,
      });
    });
});

router.get('/logout', (req, res) => {
  if (!req.session) {
    return res.status(401).json({ message: 'You are not logged in' });
  }
  req.session.destroy((err) => {
    if (err) {
      res.status(500).json({ message: 'Error in logging out' });
    } else {
      res.status(200).json({ message: 'Goodbye!' });
    }
  });
});

router.delete('/:email', (req, res) => {
  const email = req.params.email;
  User.deleteOne({ email })
    .then((result) => {
      return res.status(200).json({
        message: 'User deleted successfully',
        user: result,
      });
    })
    .catch((err) => {
      return res.status(500).json({
        message: 'User failed to delete',
        stack: err.stack,
      });
    });
});

router.get('/restricted', (req, res) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: 'no token' });
  }

  jwt.verify(token, process.env.VITE_APP_JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'bad token' });
    }
    return res.status(200).json({ message: 'OK', token });
  });
});

module.exports = router;
