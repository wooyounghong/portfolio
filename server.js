const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const $PORT = process.env.PORT || 5000;

const app = express();

// Serve static files from the React frontend app (middleware)
app.use(express.static(path.join(__dirname, 'client/build')));

// app.get('/', (req, res, next) => {
//   res.send('here!');
// });

app.get('/api', (req, res, next) => {
  res.send('API requests!');
});

// Anything that doesn't match the above, send back index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

app.listen($PORT, () => {
  console.log('server is listening at', $PORT);
});
