var express = require("express");
var bodyParser = require("body-parser");
var friends = require("./app/data/friends.js");
var path = require("path");
var server = require("../../server.js");

var app = express();
var PORT = 8080;


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

module.exports = function(app, express) {
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
};

//Could not figure out how to not use server.js for the routing.