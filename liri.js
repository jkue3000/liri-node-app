// DOTENV require call
require("dotenv").config();
var requireKeys = require("./keys.js");

// process argv Global
var userInput = process.argv;
var userSearch = process.argv[2];
var songSearch = "";
var movieSearch = "";

// node package to be able to use files
var fs = require("fs");

// variables to access api's "NPM INSTALL"
// spotify
var Spotify = require('node-spotify-api');
var spotify = new Spotify(requireKeys.spotify);

// twitter
var Twitter = require('twitter');
var client = new Twitter(requireKeys.twitter)
var params = {screen_name: 'code4_life', count: 20};

if (userSearch === "my-tweets"){
	// function to get the twitter response
	client.get('statuses/user_timeline', params, function(error, tweets, response) {
  		if (error) {
    		console.log(error);
  		}else{

  			// for loop to return 20 tweets
  			for(i = 0; i< 20; i++){
  				console.log("Tweet: " + tweets[i].text);
  			}
  		}
	});
}

// for loop to get songsearch into one var
for (s = 3; s < userInput.length; s++) {

	songSearch = songSearch + " " + userInput[s];
 	
}

if (userSearch === "spotify-this-song"){
	// function to get the spotify response
	spotify.search({ type: 'track', query: songSearch }, function(err, data) {
  		if (err) {
    		return console.log('Error occurred: ' + err);
  		}

  		var dataReturn = data.tracks.items;

		for (k = 0; k < 10; k++){
			console.log("    ")
			console.log("------------------------");
			console.log("Song Title: " + dataReturn[k].name);
			console.log("Artist(s) Name: " + dataReturn[k].album.artists[0].name);
			console.log("Album name: " + dataReturn[k].album.name);
			console.log("Song Link Preview: " + dataReturn[k].album.artists[0].external_urls.spotify);
			console.log("------------------------");
			console.log("    ");
		}
	});
}

// for loop for movie search params
for (t = 3; t < userInput.length; t++) {
	movieSearch = movieSearch + "+" + userInput[t];
}

// OMBD movie request
var request = require('request');

if (userSearch === "movie-this"){
	// request function
	request('http://www.omdbapi.com/?t='+ movieSearch +'&y=&plot=short&apikey=trilogy', function(error, response, body){
	
  		if (error) {
    		console.log(error);
  		}
  		var searchedMovie = JSON.parse(body);
  		
  		console.log("Movie Title: " + searchedMovie.Title);
  		console.log('  ')
  		console.log("Movie Relese Date: " + searchedMovie.Released);
  		console.log('  ')
  		console.log("IMDB Movie Rating: " + searchedMovie.imdbRating);
  		console.log('  ')
  		console.log("IMDB Rotten Tomatoes Movie Rating: " + searchedMovie.Ratings[1].Value);
  		console.log('  ')
  		console.log("This movie was produced in " + searchedMovie.Country);
  		console.log('  ')
  		console.log("This movie is in " + searchedMovie.Language);
  		console.log('  ')
  		console.log("Plot: " + searchedMovie.Plot);
  		console.log('  ')
  		console.log("Star Actors in this Film: " + searchedMovie.Actors);
	});
}

// 