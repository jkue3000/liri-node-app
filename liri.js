// process argv Global
var userInput = process.argv[];

// node package to write files
var fs = require("fs");

// array to use the for loop
var inputArray = [];

// var for user input to use in the userInput
var userInput = process.argv[];

// for loop to search process.arv
for(i = 0; i < inputArray.length; i++){
	
}

// DOTENV require call
var getEnv = require("dotenv").config();

// variables to access api's "NPM INSTALL"
// spotify
var Spotify = require(keys.spotify);
var spotify = new Spotify(keys.spotify);

// twitter
var Twitter = require('twitter');

// OMBD movie request
var request = require('request');
request('http://www.omdbapi.com/?t='+ userInput +'&y=&plot=short&apikey=trilogy'), function(error, response, body){

}

// get API's to call back information
// get OMBD API to call back
// ????????make constructor object to be able to have base layout callback response????
// ???????add indavidual properties to each api call???????
