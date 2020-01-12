errorLog = require('../Database/Models/ErrorLogs');

exports.error = (func, error, state, req) => {

    err = new errorLog();

    err.state = state;
    err.func = func;
    err.error = error;
    err.req = req;

    err.save();
};