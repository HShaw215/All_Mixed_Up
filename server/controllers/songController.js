// const { createSearchParams } = require('react-router-dom');
const Song = require('../models/songModel');
const songSchema = require('../models/songModel');

const songController = {

//doesn't seem to like the error mehtod with mongoose so I will try it with a try block
//it also seems like I have to look into mongo sort for this section so that each time new songs are pulled, the database is sorted by key
    //or else it will just be in order of when it was added which is a mess but I guess how normal playlists work
async getAllSongs(req, res, next) {
    console.log('songController getAllSongs is running');
    // await Song.find({}, (err, songs) => {
    //     if (err) return next('Error in userController getAllSongs: ' + JSON>stringify(err));
    //     res.locals.songs = songs;
    //     return next();
    // });
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

async addSong(req, res, next) {
    console.log('songController addSong is running');
    console.log(req.body)
    // try{
    // res.locals.song = Song.create(req.body)
    // next();
    // }
    // catch{
    //     return next({
    //         err:{err: 'Invalid song entry'}
    //     })
    // }  
    const { name, key, length } = req.body;
    // console.log(req.body)
//    res.locals.song = song;
//     Song.create({name: song, key: key, length: length}, (err, song) => {
//         if (err) next(err);
//         console.log(song)
//         return next();
//     })
//     try {
//         res.locals.song = await Song.create(req.body);
//         return next();
//     }
//     catch {
//         err: ({err : "Please enter all details"})
//     }
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

};

module.exports = songController;