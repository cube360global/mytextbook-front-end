const express = require('express');
const path = require('path');
const app = express()

app.listen(process.env.PORT || 8080);


app.use(express.static(__dirname + '/dist/user/'));
app.use(express.static(__dirname + '/dist/administration/'));

app.get('/health-check', (req, res) => {
  return res.send('online');
});

app.get('/administration', function (req, res) {
  res.sendFile(path.join(__dirname + '/dist/administration/index.html'));
});

app.get('/administration/*', function (req, res) {
  res.sendFile(path.join(__dirname + '/dist/administration/index.html'));
});

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname + '/dist/user/index.html'));
});
