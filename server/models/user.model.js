const mongoose = require('mongoose');

const User = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, required: true },
    plan: { type: String, required: true },
  },
  { collection: 'users' }
);

const model = mongoose.model('Users', User);

module.exports = model;
