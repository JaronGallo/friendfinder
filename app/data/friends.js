var express = require("express");
var bodyParser = require("body-parser");
// var friends = require("./app/data/friends.js");

// var apiRoutes = require("/app/routing/apiRoutes.js");
// var htmlRoutes = require('/app/routing/htmlRoutes.js');
var path = require("path");

var app = express();
var PORT = 8080;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var friends = [
	{
		name: "Jaron",
		photo: "google.com",
		scores: [
			1,
			1,
			1,
			1,
			1,
			1,
			1,
			1,
			1,
			1
		]
	},
	{
		name: "Jaron2",
		photo: "google.com",
		scores: [
			4,
			1,
			1,
			5,
			1,
			1,
			3,
			1,
			3,
			1
		]
	}
];

module.exports = friends;
// No idea how to export both the array and a function that I somehow 
//use in the html javascript