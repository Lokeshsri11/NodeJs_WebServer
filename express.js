const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello Loki');
});

app.get('/about', (req, res) => {
  res.send('About page');
});

app.listen(4000, () => {
  console.log('Server running on port 4000');
});