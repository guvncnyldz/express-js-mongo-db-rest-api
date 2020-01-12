const mongoose = require('mongoose');

var errorLogsSchema = mongoose.Schema({
    state: {},
    func: {},
    error: {},
    req: {},
    date: {type: Date, default: Date.now()}
}, {versionKey: false});

module.exports = mongoose.model('errorLogs', errorLogsSchema);

