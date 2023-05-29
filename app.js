const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.post('/login', (req, res) => {
    console.log("hit the endpoint");
  // Perform login verification here based on the request body
  const { username, password } = req.body;
  if (username === 'admin' && password === 'password') {
    res.json({ success: true });
  } else {
    res.status(200).json({ success: false, message: 'Invalid username or password' });
  }
});

app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res) {
  res.status(400);
  return res.send(`404 Error: Resource not found`);
});

app.listen(port, () => {
  console.log(`App listening  on port ${port}`);
})