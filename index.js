// index.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Welcome to Off Road Racing Game!');
});

app.listen(PORT, () => {
  console.log(`UI server running on http://localhost:${PORT}`);
});

module.exports = app;
