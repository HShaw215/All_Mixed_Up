const express = require('express');
const setController = require('../controllers/setController');

const timerRoute = express.Router();

//route will create a new playlist of songs adding up to input time value and return playlist
timerRoute.post('/', setController.createPlaylist, (req, res) => {
    console.log('playlist generated');
    res.status(201).send(res.locals.playlist);
})

module.exports = timerRoute;