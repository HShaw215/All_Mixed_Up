const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const songSchema = new Schema({
    name : {type: String, required: true, unique: true},
    key: {type: String, required: true},
    length: {type: Number, required: true},
});

module.exports = mongoose.model('Song', songSchema);