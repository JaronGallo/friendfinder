var express = require("express");
var bodyParser = require("body-parser");
var friends = require("./app/data/friends.js");
// var apiRoutes = require("/app/routing/apiRoutes.js");
// var htmlRoutes = require('/app/routing/htmlRoutes.js');
var path = require("path");

var app = express();
var port = process.env.PORT || 3000;


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "app/public/home.html"));
});

app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "app/public/survey.html"));
});

app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "app/data/friends.js"));
});

app.get("/api/friends", function(req, res) {
res.sendFile(path.join(__dirname, "app/data/friends.js"));

res.json(friends);

});

app.post("/api/friends/new", function(req, res) {
  var newFriend = req.body;

  console.log(newFriend);

  friends.push(newFriend);

  res.json(newFriend);
});


app.listen(port, function() {});