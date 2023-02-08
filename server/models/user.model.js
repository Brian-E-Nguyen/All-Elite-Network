const mongoose = require('mongoose');

const User = new mongoose.Schema(
  {
    email: { type: String, required: true },
    password: { type: String, required: true },
  },
  { collection: 'user-data' }
);

const model = mongoose.model('Users', User);

module.exports = model;
