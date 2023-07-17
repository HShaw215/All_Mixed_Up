const express = require('express');
const songController = require ('../controllers/songController');

const songRoute = express.Router();

//route will pull all songs from database and return to user as an object
songRoute.get('/', songController.getAllSongs, (req, res) => {
    console.log('songs recieved from database')
    res.status(200).send(res.locals.songs)
})

//when a user clicks the button to add songs, route will add song to database, then pull and return all songs from database
songRoute.post('/', songController.addSong, songController.getAllSongs, (req, res) => {
    console.log('song added to playlist');
    res.status(201).send(res.locals.songs);
});

module.exports = songRoute;