// DOTENV require call
require("dotenv").config();
var requireKeys = require("./keys.js");

// process argv Global
var userInput = process.argv;
var userSearch = process.argv[2];

// node package to write files
var fs = require("fs");

// variables to access api's "NPM INSTALL"
// spotify
// var Spotify = require('node-spotify-api');
// var spotify = new Spotify('keys.spotify');

// twitter
var Twitter = require('twitter');
var client = new Twitter('requireKeys.twitter')
var params = {screen_name: 'Kuespace', count: 20};

if (userSearch === "my-tweets"){
	// function to get the twitter response
	client.get('statuses/user_timeline', params, function(error, tweets, response) {
  		if (error) {
    		console.log(error);
  		}else{
  			console.log(tweets);
  		}
	});
}

// if (userSearch === "spotify-this-song"){
// 	// function to get the spotify response
// 	spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
//   		if (err) {
//     		return console.log('Error occurred: ' + err);
//   		}
// 		console.log(data); 
// 	});

// }


// OMBD movie request
// var request = require('request');
// request('http://www.omdbapi.com/?t='+ userInput +'&y=&plot=short&apikey=trilogy'), function(error, response, body){

// }

// get API's to call back information
// get OMBD API to call back
// ????????make constructor object to be able to have base layout callback response????
// ???????add indavidual properties to each api call???????
