const mongoose = require('mongoose');

var logsSchema = mongoose.Schema({
    x: String,
    x: String,
    logDate: {type: Date, default: Date.now()}
}, {versionKey: false});

module.exports = mongoose.model('logs', logsSchema);

