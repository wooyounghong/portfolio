const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const $PORT = process.env.PORT || 5000;

const app = express();

app.get('/', (req, res, next) => {
  res.send('here!');
});

app.get('/api', (req, res, next) => {
  res.send('API requests!');
});

app.listen($PORT, () => {
  console.log('server is listening at', $PORT);
});
