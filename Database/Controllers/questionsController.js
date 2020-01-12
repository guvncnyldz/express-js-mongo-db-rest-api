const questions = require('../Models/Questions');
const state = require('../../System/State');
const error = require('../../System/Error');

exports.addQuestion = (res) => {
    for (let i = 0; i < 10000; i++) {
        question = new questions();

        question.x = "" + i;
        question.x = "" + i;
        question.x = "" + i;
        question.x = "" + i;
        question.x = "" + i;
        question.x = 2;

        question.save();
    }
    res.send("Tamamlandı");
};

exports.addAverage = (x, count, callback) => {
    questions.findOne({_id: questionID}, (err, question) => {
        if (err) {
            error.error('addAverage', err, state.apiError, {
                'x': x,
                'x': x
            });
            if (callback) callback(state.apiError);
            return;
        }
        if (question) {
            question.x = question.x + count;
            question.save();
        } else {
            error.error('addAverage', 'Question Not Found', state.notFound, {
                'x': x,
                'x': x
            })
            if (callback) callback(state.notFound);
        }
    });
};


var i = 0;
var limit = 0;
var result = [];

exports.getRandomQuestion = (req, res) => {
    questions.countDocuments().exec((err, count) => {
        if (err) {
            error.error('getRandomQuestion', err, state.apiError, req.body)
            res.json(state.apiError);
            return;
        }
        if (count) {
            i = 0;
            limit = req.body.x;
            result = [];
            randomFind(res, count);
        } else {
            error.error('getRandomQuestion', 'Count Not Found', state.notFound, req.body)
            res.json(state.notFound);
        }
    });
};

randomFind = (res, count) => {
    random = Math.floor(Math.random() * count);

    questions.findOne().skip(random).select(['-x']).exec((err, question) => {
        if (err) {
            error.error('randomFind', err, state.apiError, {})
            res.json(state.apiError);
            return;
        }

        if (question) {
            result.push(question);
            i++;
            if (i < limit)
                randomFind(res, count);
            else
                res.json(result);
        } else {
            error.error('randomFind', 'Question Not Found', state.notFound, {})
            res.json(state.notFound)
        }
    });
};


exports.getCorrect = (questionID, callback) => {
    questions.findOne({_id: questionID}, (err, question) => {
        if (err) {
            error.error('getCorrect', err, state.apiError, {'x': questionID});
            callback(state.apiError);
            return;
        }
        if (question) {
            callback(question.x);
        } else {
            error.error('getCorrect', 'Question Not Found', state.notFound, {'x': questionID})
            callback(state.notFound);
        }
    });
};