const songSchema = require('../models/songModel');

const setController = {

    //idea is to pull time from req.body, convert to minutes, then find a random pull of data from the database adding up to roughly the
        //input time. Once that's done, then the pulled data needs to be sorted into ascending key somehow like 1A -> 1B -> 2A
    async createPlaylist(req, res, next) {
        console.log('setController createPlaylist is running');
        const { timer } = req.body;
        //multiple input time by 60 to get total number of minutes (average time is about 7 minutes so multiply timer by 8.5 to get rough total)
        const newTimer = timer * 9;
        //invoke aggregate function on database to pull only a size adding up to timer, with data sorted by key
       res.locals.playlist = await songSchema.aggregate([
        { $sample: { size: newTimer } },
        { $sort: { key: 1}},
      ]);
        return next()
    }

};

//It seems like a filter for adding up certain properties doens't really exist so I might just have to assume that the average length
    //of each song is about 6 minutes. Then I can divide newTimer by 6 to find out how many songs I should pull to populate the new playlist,
    //or just make newTimer be timer * 10 instead. Still need to figure out how to create random querying 

    //also need to import the database as db so that I can filter the aggregation on db.songs.aggregation

    // { $sort: {key: 1} }    This line should filter the keys in ascending order which is good enough for now
    // { $sample: {size: 10}} This line with pull 10 random songs from the playlist. Works well but I need the songs to be ordered first
        //I think, then pull a random number all next to each other. It works better with a bigger sample size because its pulling randomly
        //so it cant always get something directly in the next key so it skips but thats kind of ok

module.exports = setController;



