'use strict';

var express = require('express');

var app = express();

app.get('/', function(req, res) {
  res.send('Hi max');
});

var port = process.env.PORT || 5000;
console.log('web.js listening on port %s.', port);
app.listen(port);
