const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const songRoute = require('./routes/songRoute');
const timerRoute = require('./routes/timerRoute');

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
app.use('/api/songs', songRoute)


//route for sending set time filter
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