var express = require('express');
var fs = require('fs');
//var path = require('path');
var http    = require('http');
var https   = require('https');
//var snowbus = require('./SnowBus');

var app = express();

app.set('port', process.env.PORT || 8080);
//app.use(express.static(path.join(__dirname, 'public')));
console.log(__dirname+ '/SnowBus');
app.get('/', function(request, response) {
var text = fs.readFileSync("index.html","utf-8")
 response.send(text);
});

http.createServer(app).listen(app.get('port'),function(){
  console.log("Listening on " + app.get('port'));
});

