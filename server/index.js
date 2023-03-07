const server = require('./api/server');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: '../.env' });

const mongoUrl = `mongodb+srv://Buraiyen:${process.env.VITE_APP_MONGO_PASSWORD}@all-elite-network.fagkgiv.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(mongoUrl);

const PORT = process.env.PORT || 1337;

server.listen(PORT, () => {
  console.log(`Server started on localhost:${PORT}`);
});
