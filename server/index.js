const express = require('express');
const app = express();
const PORT = 1337;

app.listen(PORT, () => {
  console.log(`Server started on localhost:${PORT}`);
});
