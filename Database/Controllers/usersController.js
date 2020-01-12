const users = require('../Models/Users');
const system = require('../../System/System');
const state = require('../../System/State');
const error = require('../../System/Error');

exports.getProfile = (req, res) => {
    if (system.compareVersion(req.body.x)) {
        users.findOne({x: req.body.x}, '-_id', (err, user) => {
            if (err) {
                error.error('getProfile', err, state.apiError, req.body);
                res.json(state.apiError);
                return;
            }
            if (!user) {
                this.createProfile(req, res);
            } else {
                res.json(user);
            }
        });
    } else {
        res.json(state.versionError);
    }
};

exports.createProfile = (req, res) => {

    let user = new users();

    user.x = req.body.x;

    user.save((err) => {
        if (err) {
            res.json(error.error('createProfile', err, state.apiError, req.body));
        } else {
            this.getProfile(req, res);
        }
    })
};

exports.add = (field, count, x, callback) => {
    users.findOne({x: x}, (err, user) => {
        if (err) {
            error.error('usersControl.add', err, state.apiError, {
                'x': x,
                'x': x,
                'x': x
            });
            if (callback) callback(state.apiError);
            return;
        }
        if (user) {
            user[field] = user[field] + count;
            user.save();
            if (callback) callback();
        } else {
            error.error('usersControl.add', 'User Not Found', state.notFound, {
                'x': x,
                'x': x,
                'x': x
            });
            if (callback) callback(state.notFound);
        }
    });
};


exports.sendCount = (req, res) => {
    users.findOne({x: req.body.x}, (err, user) => {
        if (err) {
            error.error('sendCount', err, state.apiError, req.body);
            res.json(state.apiError)
        }
        if (user) {
            res.json({"x": user[req.body.x]});
        } else {
            error.error('sendCount', 'User Not Found', state.notFound, req.body);
            res.json(state.notFound);
        }

    })
};

exports.getValue = (field, x, callback) => {
    users.findOne({deviceID: x}, (err, user) => {
        if (err) {
            error.error('getValue', err, state.apiError, {'field': field, 'x': x});
            callback(state.apiError);
            return;
        }
        if (user) {
            callback(user[field]);
        } else {
            error.error('getValue', 'User Not Found', state.notFound, {'x': x, 'x': x});
            callback(state.notFound);
        }
    });
};

exports.useJoker = (joker, x, callback) => {
    users.findOne({x: x}, (err, user) => {
            if (err) {
                error.error('useJoker', err, state.apiError, {'x': x, 'x': x});
                callback(state.apiError);
                return;
            }
            if (user) {
                if (user[joker] >= 1) {
                    user[joker] = user[joker] - 1;
                    user.save(() => callback(user[joker]));
                } else {
                    callback(-1);
                }
            } else {
                error.error('useJoker', 'User Not Found', state.notFound, {'x': x, 'x': x});
                callback(state.notFound);
            }

        }
    )
};





