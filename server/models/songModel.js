const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const songSchema = new Schema({
    song : {type: String, required: true},
    key: {type: String, required: true},
    length: {type: String, required: true}
});

module.exports = mongoose.model('Song', songSchema);