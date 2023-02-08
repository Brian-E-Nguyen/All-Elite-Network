const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 1337;

app.use(cors());

app.listen(PORT, () => {
  console.log(`Server started on localhost:${PORT}`);
});
