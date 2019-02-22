require("dotenv").config();
var moment = require('moment');

var Spotify = require('node-spotify-api');
// var keys = require("./keys.js");
// var spotify = new Spotify(keys.spotify);


function findSong(song) {

    var spotify = new Spotify({
        id: "136ddb43f50c4b4fa488553612dc47f3",
        secret: "0c1a6423ac934ac79208183bd3ff9829"
    });

    var songName = process.argv.slice(3);
    var song = songName.toString();
    spotify
        .search({ type: 'track', query: song })
        .then(function (response) {
            console.log("Artist's name: " + response.tracks.items[0].album.artists[0].name);
            console.log("Song name: " + response.tracks.items[0].name);
            console.log("Album: " + response.tracks.items[0].album.name);
            console.log("Spotify preview link for song: " + response.tracks.items[0].preview_url)
        })
        .catch(function (err) {
            console.log(err);
        });

    if (songName === null) {
        spotify
            .search({ type: 'track', query: 'The Sign' })
            .then(function (response) {
                console.log("Artist's name: " + response.tracks.items[0].album.artists[0].name);
                console.log("Song name: " + response.tracks.items[0].name);
                console.log("Album: " + response.tracks.items[0].album.name);
                console.log("Spotify preview link for song: " + response.tracks.items[0].preview_url)
            })
            .catch(function (err) {
                console.log(err);
            });
    }

}


//===========================================
//BANDS IN TOWN API
var bandsAxios = require("axios");

function findConcert(artist) {

    var artist = process.argv.slice(3).join(" ");

    queryURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"

    bandsAxios.get(queryURL).then(
        function (response) {
            console.log("Name of venue: " + response.data[0].venue.name);
            console.log("Venue location: " + response.data[0].venue.city + ", " + response.data[0].venue.region);
            var dateTime = response.data[0].datetime;
            var formatDateTime = moment(dateTime).format("MM/DD/YYYY hh:mm a");
            console.log("Date of Event: " + formatDateTime);
        }
    )
}

//===========================================
//OMDP MOVIES API
var omdbAxios = require("axios");

function findMovie(movieTitle) {

    var movieTitle = process.argv.slice(3);

    queryURL = "http://www.omdbapi.com/?t=" + movieTitle + "&y=&plot=short&apikey=trilogy"

    omdbAxios.get(queryURL).then(
        function (response) {
            // console.log(response.data.Ratings[1].Value)
            var movieTitle = response.data.Title;
            console.log("The movie is: " + response.data.Title);
            console.log(movieTitle + "'s release date is: " + response.data.Year);
            console.log(movieTitle + "'s IMBD rating is: " + response.data.imdbRating);
            console.log(movieTitle + "'s Rotten Tomatoes Rating is: " + response.data.Ratings[1].Value);
            console.log(movieTitle + "'s country of origin is: " + response.data.Country);
            console.log(movieTitle + "'s language is: " + response.data.Language);
            console.log(movieTitle + "'s plot: " + response.data.Plot);
            console.log("Some actors in " + movieTitle + ": " + response.data.Actors);
        }

    );

    if (movieTitle === "undefined") {
        movieTitle === 'Mr.Nobody'
    }
};

//==========================================
// DO WHAT IT SAYS INPUT FUNCTION
var fs = require('fs')

var file = require('./random.txt');

function doWhatItSays() {

    fs.readFile(file, 'utf8', function (err, data) {
        if (err) throw err;
        console.log(data.spotify)
    });
}



//  conditionals
var term = process.argv[2];
if (term === "movie") {
    return findMovie();
} else if (term === "spotify") {
    return findSong();
} else if (term === "concert") {
    return findConcert();
} else if (term === "do-what-it-says") {
    return doWhatItSays();
}