// server.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  // Simulated user check
  if (username === "admin" && password === "password") {
    res.status(200).json({ message: "Login Successful", status: "OK" });
  } else {
    res.status(401).json({ message: "Login Failed", status: "ERROR" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`API Server listening on port ${PORT}`));
