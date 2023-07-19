const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mongoURI = "mongodb+srv://hshaw:trial1337@soloproject.k5xsniw.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(mongoURI)

const songSchema = new Schema({
    name : {type: String, required: true, unique: true},
    key: {type: String, required: true},
    length: {type: Number, required: true},
});

module.exports = mongoose.model('Song', songSchema);