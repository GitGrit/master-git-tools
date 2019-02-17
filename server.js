var express = require('express');
var app = express();
const path = require('path');

app.use('/', express.static(path.join(__dirname, '_book')))

app.listen(process.env.PORT || 4000);
