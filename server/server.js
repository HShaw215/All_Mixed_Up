const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const songRoute = require('./routes/songRoute');
const timerRoute = require('./routes/timerRoute');

const songController = require('./controllers/songController')
const setController = require('./controllers/setController')

const PORT = 3003;

const app = express();

app.use(express.json());

const mongoURI = "mongodb+srv://hshaw:trial1337@soloproject.k5xsniw.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(mongoURI)

app.use('/build', express.static(path.resolve(__dirname, '../build')))

if (process.env.NODE_ENV === 'production'){
    app.use('/', express.static(path.join(__dirname, '../build')))
}
else {
//route to serve tehe index html when the page is loaded
app.get('/', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, '../index.html'));
    })
}

//this will be the route for when the components on the page mount. A request will come in for the container to populate with songs from database
// app.get('/songs', songController.getAllSongs, (req, res) => {
//     console.log('songs recieved from database')
//     res.status(200).send(res.locals.songs)
// })
app.use('/api/songs', songRoute)

//when a user clicks the button to add songs, this route will run and add the song to the database. Not sure what I need to add so the page auto updates when this occurs
// app.post('/', songController.addSong, songController.getAllSongs, (req, res) => {
//     console.log('song added to playlist');
//     res.status(201).send(res.locals.songs);
// });

//route for sending set time filter
// app.post('/api/time', setController.createPlaylist, (req, res) => {
//     console.log('playlist generated');
//     res.status(200).send(res.locals.playlist);
// })
app.use('/api/timer', timerRoute)

// //route to delete a song when clicked
// app.delete('/', songController.deleteSong, (req, res) => {
//     console.log('song deleted from playlist');
//     res.status(200).send(res.locals.deleted)
// })

app.use('*', (req, res) => {
    res.status(404).send('Not Found')
});

app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).send({ error : err});
})

app.listen(PORT, ()=>{ console.log(`Listening on port ${PORT}...`); });
module.exports = app;