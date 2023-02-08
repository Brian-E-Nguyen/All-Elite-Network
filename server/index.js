const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 1337;

app.use(cors());
app.use(express.json());

app.post('/api/register', (req, res) => {
  res.status(200).json({ message: 'register' });
});

app.listen(PORT, () => {
  console.log(`Server started on localhost:${PORT}`);
});
