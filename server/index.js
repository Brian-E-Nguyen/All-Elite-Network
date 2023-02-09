const server = require('./api/server');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: '../.env' });

mongoose.connect('mongodb://127.0.0.1:27017/all-elite-network');

const PORT = process.env.PORT || 1337;

server.listen(PORT, () => {
  console.log(`Server started on localhost:${PORT}`);
});
