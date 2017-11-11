var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require('method-override');


var port = process.env.PORT || 3000;
var app = express();
//serving static content for use in public directory
//setting up middleware for method-override for further usage with index.handlebars
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
//setting up future handlebars usage
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
//importing routes and giving server access to them
var routes = require("./controllers/burgers_controller.js");
app.use("/", routes);
app.listen(port);

//https://thawing-stream-83050.herokuapp.com/ 
