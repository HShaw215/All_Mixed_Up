const express = require('express');
const songController = require ('../controllers/songController');

const songRoute = express.Router();

songRoute.get('/', songController.getAllSongs, (req, res) => {
    console.log('songs recieved from database')
    res.status(200).send(res.locals.songs)
})

songRoute.post('/', songController.addSong, songController.getAllSongs, (req, res) => {
    console.log('song added to playlist');
    res.status(201).send(res.locals.songs);
});

module.exports = songRoute;