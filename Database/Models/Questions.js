const mongoose = require('mongoose');

var questionsSchema = mongoose.Schema({
    x: {type: String, required: true},
    x: {type: String, required: true},
    x: {type: String, required: true},
    x: {type: String, required: true},
    x: {type: String, required: true},
    x: {type: Number, required: true},
    x: {type: Number, default: 0},
    x: {type: Number, default: 0, select: false}
},{versionKey: false});

module.exports = mongoose.model('questions', questionsSchema);

