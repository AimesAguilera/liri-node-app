# liri-node-app

## Overview: 

Liri, a node app, is designed to take in user input in the terminal command line and return data from the Bandsintown, Spotify, and         OMDB APIs respectively.

## Node packages used:

axios

fs

moment

dotenv

Node-Spotify-api

Bandsintown api

OMBD api

## How to use the app:

### The user types into the command line:

_**node liri movie "movie-here"**_ to get movie info from the OMBD api. If user dosen't type a movie after 'movie' in the command line, default movie data will be returned.

_**node liri spotify "song-here"**_ to get song info from the Spotify api. If user dosen't type a song after 'spotify' in the command line, default song data will be returned.

_**node liri concert "artist/band-here"**_ to get concert info from the Bandsintown api.

_**node liri do-what-it-says**_ will get info from a random.txt file stored in the repo.




![JPG?!?!](https://github.com/AimesAguilea/liri-node-app/blob/master/screen-shots/spotify-working.JPG)
