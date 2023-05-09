const Song = require('../models/songModel');
const songSchema = require('../models/songModel');

const songController = {};

songController.getAllSongs = (req, res, next) => {
    console.log('songController getAllSongs is running');
    Song.find({}, (err, songs)){
        if (err) return next('Error in userController getAllSongs: ' + JSON>stringify(err));
        res.locals.songs = songs;
        return next();
    }
};

songController.addSong = (req, res, next) => {
    console.log('songController addSong is running');
    const { song, key, length } = req.body;
    Song.create({song: song, key: key, length: length}, (err, song) => {
        if (err) next(err);
        return next();
    })
}