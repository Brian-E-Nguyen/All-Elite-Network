const server = require('./api/server');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/all-elite-network');

const PORT = process.env.PORT || 1337;

server.listen(PORT, () => {
  console.log(`Server started on localhost:${PORT}`);
});
