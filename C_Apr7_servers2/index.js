var express = require('express');
var app = express();

var mustache = require('mustache-express');
app.engine('html', mustache());
app.set('view engine', 'mustache');

/*Project structure, view points to a folder in the structure*/
app.set('views', __dirname + '/views');
/*App.use points to the assets folder*/
app.use ('/assets', express.static('assets'));

var hello_data = {
  my_name : "Regina",
  my_favorite_color: "yellow",
  my_picture: " "
};

app.get('/', function(req, res){
  res.render("index.html", hello_data);
});

var server = app.listen(8081, function() {
  /*var host = server.address().address;
  var port = server.address().port;*/
  console.log ("Hey I started");
});
