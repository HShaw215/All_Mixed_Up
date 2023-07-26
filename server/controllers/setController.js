const { Song } = require('../models/songModel')

const setController = {

    //declare method createPlaylist that pulls random amount of sorted songs based on input timer value
    async createPlaylist(req, res, next) {
        console.log('setController createPlaylist is running');
        const { timer } = req.body;
        //multiple input time by 9 to get rought estimate of minutes (average time is about 7 minutes)
        const newTimer = timer * 9;
        //invoke aggregate function on database and assign evaluated result to res.locals.playlist
        res.locals.playlist = await Song.aggregate([
        //pull random amount of songs equal to size of newTimer
        { $sample: { size: newTimer } },
        //sort in ascending order of key
        { $sort: { key: 1}},
      ]);
        return next()
    }

};

 //idea is to pull time from req.body, convert to amount of songs roughly adding up to minutes, then find a random pull of data 
 //from the database adding up to input time. Once that's done, then the pulled data needs to be sorted into
 //ascending order by key: 1A -> 1B -> 2A

module.exports = setController;



