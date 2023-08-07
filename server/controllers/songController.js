const { Song } = require('../models/songModel')

const songController = {

    //declare method getAllSongs that will pull all songs from database and return as res.locals.storage
    async getAllSongs(req, res, next) {
        console.log('getAllSongs controller is running');
        try {
            res.locals.songs = await Song.find({ username });
            return next();
        }
        catch(err) {
            return next({
                log: `Error occured in getAllSongs controller: ${err}`,
                status: 400,
                message: { err: "An error occurred" },
            });
        }
    },

    //declare method add song that will add name, key, and length of song to database
    async addSong(req, res, next) {
        console.log('addSong controller is running');
        const { name, key, length } = req.body;
        try {
            res.locals.song = await Song.create({username: res.locals.user, name: name, key: key, length: length})
            return next();
        }
        catch(err) {
            return next({
                log: `Error occured in addSong controller: ${err}`,
                status: 400,
                message: { err: "An error occurred" },
            });
        }
    },

    //declare method deleteSong that finds song based on passed in name and deletes from database
    async deleteSong(req, res, next) {
        console.log('deleteSong controller is running')
        console.log(req.body.name)
        try {
            res.locals.deleted = await Song.findOneAndDelete({name: req.body.name});
            return next();
        }
        catch {
            return next({
                log: `Error occured in deleteSong controller: ${err}`,
                status: 400,
                message: { err: "An error occurred" },
            });
        }
    },

};

module.exports = songController;