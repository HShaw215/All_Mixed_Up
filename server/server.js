const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const PORT = 3000;

const app = express();

const mongoURI = "mongodb+srv://hshaw:trial1337@soloproject.k5xsniw.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(mongoURI)

app.use('/build', express.static(path.resolve(__dirname, '../build')))

app.get('/', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, '../index.html'));
});

app.post('/', songController.addSong, (req, res) => {
    res.send.status(201)
});

app.use('*', (req, res) => {
    res.status(404).send('Not Found')
});

app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).send({ error : err});
})

app.listen(PORT, ()=>{ console.log(`Listening on port ${PORT}...`); });
module.exports = app;