const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sessionSchema = new Schema({
    cookieID: {type: String, required: true, unique: true},
    createdAt: {type: Date, expires: 4 * 60, default: Date.now}
})

module.exports = mongoose.model('Session', sessionSchema);