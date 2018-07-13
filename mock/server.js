const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/status/:id', function (req, res) {
  res.status(req.params.id).end();
});

app.listen(3001, function () {
  console.log('Data being served from http://localhost:3001');
});