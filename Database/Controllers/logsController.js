const logs = require('../Models/Logs');
const state = require('../../System/State');
const error = require('../../System/Error');

exports.addLog = (req, logType) => {

    log = new logs();

    log.x = req.body.x;
    log.x = logType;

    log.save((err) => {
        if(err) error.error('addLog', err, state.apiError, req)
    });
};




