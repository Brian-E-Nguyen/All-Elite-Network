const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = 1337;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/all-elite-network');

app.post('/api/register', (req, res) => {
  res.status(200).json({ message: 'register' });
});

app.listen(PORT, () => {
  console.log(`Server started on localhost:${PORT}`);
});
