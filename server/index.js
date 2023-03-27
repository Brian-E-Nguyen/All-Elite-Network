const server = require('./api/server');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
// dotenv.config({ path: '../.env' });

if (process.env.NODE_ENV === 'production') {
  dotenv.config({ path: '../.env.production.local' });
  const mongoUrl = `mongodb+srv://Buraiyen:${process.env.VITE_APP_MONGO_PASSWORD}@all-elite-network.fagkgiv.mongodb.net/?retryWrites=true&w=majority`;
  mongoose.connect(mongoUrl);
} else {
  dotenv.config({ path: '../.env.development.local' });
  const mongoUrl =
    'mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.6.2';
  mongoose.connect(mongoUrl);
}

const PORT = process.env.PORT || 1337;

server.listen(PORT, () => {
  console.log(`Server started on localhost:${PORT}`);
});
