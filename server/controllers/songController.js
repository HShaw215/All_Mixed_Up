// const { createSearchParams } = require('react-router-dom');
const Song = require('../models/songModel');

const songController = {

    //declare method getAllSongs that will pull all songs from database and return as res.locals.storage
    async getAllSongs(req, res, next) {
        console.log('songController getAllSongs is running');
        try {
            res.locals.songs = await Song.find({});
            return next();
        }
        catch {
            return next({
                err: {err : 'No songs found in database'}
            });
        }
    },

    //declare method add song that will add name, key, and length of song to database
    async addSong(req, res, next) {
        console.log('songController addSong is running');
        const { name, key, length } = req.body;
        try {
            res.locals.song = await Song.create({name: name, key: key, length: length})
            return next();
        }
        catch {
            return next({
                err: {err: "Invalid song entry"}
            });
        }
    },



    // async deleteSong(req, res, next) {
    //     console.log('deleteSong controller running')
    //     console.log(req.body.name)
    //     try {
    //         res.locals.deleted = await Song.findOneAndDelete({name: req.body.name});
    //         return next();
    //     }
    //     catch {
    //         return next({
    //             err: {err: "Could not find song to delete"}
    //         });
    //     }
    // },

};

module.exports = songController;