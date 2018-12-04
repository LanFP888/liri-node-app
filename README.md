# liri-node-app

#LIRI Node App

  A simple command line interface for calling APIs from Spotify, Bands in Town
  and OMDB

#Commands

  -help          Display help information about the app.
  concert-this   Queries the Bands in Town database to get the upcoming events for the artist/band.
  movie-this     Queries the OMDB database to get the relevant movie information.
  spotify-this   Queries the Spotify database to get the relevant song information.
  random-this    Randomly performs of of the [concert-this, movie-this, spotify-this] operations, can be configured using random.txt file

#Random.txt file

  Put each individual command in one line, the format of the command is:
  command,"param"

#log.txt file

  Logs the commands, params and results of the queries