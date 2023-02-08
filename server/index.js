const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const User = require('./models/user.model');

const app = express();
const PORT = 1337;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/all-elite-network');

app.post('/api/register', async (req, res) => {
  const credentials = req.body;
  const hash = bcrypt.hashSync(
    credentials.password,
    process.env.VITE_BCRYPT_ROUNDS
  );
  await User.create({
    email: req.body.email,
    password: hash,
    role: 'user',
  })
    .then((result) => {
      console.log(result);
      res.status(200).json({
        message: 'User registration completed',
        user: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: 'User registration failed',
        stack: err.stack,
      });
    });
});

app.listen(PORT, () => {
  console.log(`Server started on localhost:${PORT}`);
});
