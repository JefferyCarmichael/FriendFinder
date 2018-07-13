var path = require("path");
var friends = require("../data/friends");
var express = require("express");
var app = express();

// ROUTING

module.exports = function (app) {

  app.get("/api/friends", function (req, res) {
    res.json(friends);
  });



  app.post('/api/friends', function (req, res) {
    // res.json(friends);
    var friendMatch = {
      name: "No Match Available",
      photo: "http://via.placeholder.com/350x150",
      difference: 20
    };
    var delta;
    var total = 0;
    var match1 = 0;
    var userData = req.body;
    // console.log(userData.name);
    // var userName = userData.name;
    // var userImage = userData.photo;
    //calculate total of form
    var userScores = userData.scores;
    // console.log(userScores);
    for (var i = 0; i < 10; i++) {
      total = total + parseInt(userScores[i]);
    }

  //    Compare total of for to total of friends in data base.
    for (var i = 0; i <  friends.length; i++) {
      match1 = 0;
      for (var j = 0; j < 10; j++) {
        match1 = match1 + parseInt(friends[i].scores[j]);
        
      }

      //Look for the one with the smallest point difference.
      // console.log(match1);
      delta = Math.abs(total - match1);
      if (delta < friendMatch.difference) {
        friendMatch.name = friends[i].name;
        friendMatch.photo = friends[i].photo;
        friendMatch.difference = delta;
      }
    }

    // console.log(total);
    // console.log(match1);
    friends.push(userData);

    res.json(friendMatch)

  });

};












