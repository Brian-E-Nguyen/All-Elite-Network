const User = require('../../models/user.model');

function validatePayload(req, res, next) {
  console.log(req.body);
}

module.exports = { validatePayload };
