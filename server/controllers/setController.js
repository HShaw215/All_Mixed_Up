const Song = require('../models/songModel');
const songSchema = require('../models/songModel');

const setController = {

    //idea is to pull time from req.body, convert to minutes, then find a random pull of data from the database adding up to roughly the
        //input time. Once that's done, then the pulled data needs to be sorted into ascending key somehow like 1A -> 1B -> 2A
    async createPlaylist(req, res, next) {
        console.log('setController createPlaylist is running');
        const { timer } = req.body;
        // console.log(timer)
        //multiple input time by 60 to get total number of minutes
        const newTimer = timer * 60;
        // console.log(newTimer);
        //now we need to make a find request to the server where somehow its a random pull of data adding up to newTimer
        // res.locals.playlist = timer;
        return next()
    }

};

module.exports = setController;



