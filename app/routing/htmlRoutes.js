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
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "app/public/home.html"));
});

app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "app/public/survey.html"));
});

app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "app/data/friends.js"));
});
};
