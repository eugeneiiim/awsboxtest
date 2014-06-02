'use strict';

var express = require('express');

var app = express();

var port = process.env.PORT || 5000;
console.log('web.js listening on port %s.', port);
app.listen(port);
