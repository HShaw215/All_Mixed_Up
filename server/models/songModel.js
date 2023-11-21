const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs')

const mongoURI = "mongodb+srv://hshaw:trial1337@soloproject.k5xsniw.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(mongoURI)

const userSchema = new Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
});

userSchema.pre('save', function(next){
    let SALT_FACTOR = 5;
    bcrypt.hash(this.password, SALT_FACTOR, (err, hash) => {
        if (err) return next(err)
        this.password = hash;
        return next();
    })
});

const User = mongoose.model('User', userSchema)

const songSchema = new Schema({
    username : {type: String, required: true},
    name : {type: String, required: true},
    key: {type: String, required: true},
    length: {type: Number, required: true},
});

const Song = mongoose.model('Song', songSchema)

module.exports = { User, Song };
