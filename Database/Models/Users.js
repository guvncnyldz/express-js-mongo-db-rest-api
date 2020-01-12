const mongoose = require('mongoose');

var usersSchema = mongoose.Schema({
    x: {type: String, select: false, required: true},
    x: {type: Number, default: 10},
    x: {type: Number, default: 10},
    x: {type: Number, default: 10},
    x: {type: Number, default: 0},
    x: {type: Number, default: 0},
    x: {type: Number, default: 0},
    x: {type: Number, default: 1},
    createTime: {type: Date, default: Date.now(), select: false},
}, {versionKey: false});

module.exports = mongoose.model('users', usersSchema);