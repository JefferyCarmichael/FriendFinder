// =========================
var path = require("path");
var express = require("express");
var app = express();

// ROUTING

module.exports = function(app) {
  //GET Requests

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/home.html"));
  });

  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/survey.html"));
  });

//   // Default
//   app.get("*", function(req, res) {
//     res.sendFile(path.join(__dirname, "/../public/home.html"));
//   });
};
