var express  = require("express"),
    app      = express(),
    http     = require("http"),
    server   = http.createServer(app),
    mongoose = require('mongoose'); 

app.configure(function () {
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.errorHandler());
  app.locals.pretty = true;
    //Specify the views folder
  app.set("views", __dirname + "/views");

  //View engine is Jade
  app.set("view engine", "jade");

  //Specify where the static content is
  app.use(express.static(__dirname + '/public'));
});


app.get('/', function(req, res) {
  res.render("index");
});

routes = require('./routes/tvshows')(app);

mongoose.connect('mongodb://localhost/tvshows', function(err, res) {
	if(err) {
		console.log('ERROR: connecting to Database. ' + err);
	} else {
		console.log('Connected to Database');
	}
});

server.listen(3000, function() {
  console.log("Node server running on http://localhost:3000");
});