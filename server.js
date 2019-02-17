var express = require('express');
var app = express();
const path = require('path');
app.use(express.static(path.join(__dirname, '_book')));

app.use('/', express.static(path.join(__dirname, '_book')))

app.get('/', function(req, res) {
  res.sendFile('index.html');
});

app.listen(process.env.PORT || 4000);
