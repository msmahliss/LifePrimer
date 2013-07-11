var fs = require('fs');
var express = require('express');
var app = express.createServer(express.logger());
var text = fs.readFileSync("index.html","utf-8")

app.get('/', function(request, response) {
 response.send(text);
 // response.send('Hello World With Such People In It!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
