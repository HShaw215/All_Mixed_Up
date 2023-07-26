const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mongoURI = "mongodb+srv://hshaw:trial1337@soloproject.k5xsniw.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(mongoURI)

const userSchema = new Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
});

userSchema.pre('save', function(next){
    bcrypt.hash(this.password, SALT_WORK_FACTOR, (err, hash) => {
        if (err) return next(err)
        this.password = hash;
        return next();
    })
});

const User = mongoose.model('user', userSchema)

const songSchema = new Schema({
    name : {type: String, required: true, unique: true},
    key: {type: String, required: true},
    length: {type: Number, required: true},
});

const Song = mongoose.model('Song', songSchema)

module.exports = { User, Song };
