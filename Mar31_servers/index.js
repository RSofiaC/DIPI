var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send("Hey this is a page");
});

var server = app.listen(8080, function() {
  console.log ("Hey I started");
});