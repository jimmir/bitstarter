var express = require('express');

var app = express.createServer(express.logger());

var data = new Buffer(256);

var fs = require('fs');

data = fs.readFileSync('index.html');

app.get('/', function(request, response) {
  response.send(data.toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
