const usersController = require('../Database/Controllers/usersController');
const questionsController = require('../Database/Controllers/questionsController');

exports.bomb = (req, res) => {

    usersController.useJoker('x', req.body.x, (jokerResult) => {
        if (jokerResult >= 0) {

            var bombArray = [];

            questionsController.getCorrect(req.body.x, (correctResult) => {

                if (correctResult > 0) {
                    for (let i = 0; i < 2; i++) {
                        let bomb = 0;
                        do {
                            bomb = Math.floor(Math.random() * 4) + 1;
                        } while (bomb === correctResult || bomb === bombArray[0]);
                        bombArray.push(bomb);
                    }
                    var response = {
                        "x": bombArray[0],
                        "x": bombArray[1],
                        "x": jokerResult
                    };
                    res.json(response);
                } else {
                    usersController.add('x', 1, req.body.x, () =>
                        res.json(correctResult)
                    );
                }
            });
        } else if (jokerResult === -1) {

            var response = {
                "x": -1,
                "x": -1,
                "x": -1
            };

            res.json(response);
        } else {
            res.json(jokerResult);
        }
    });
};

exports.pass = (req, res) => {
    usersController.useJoker('x', req.body.x, (jokerResult) => {
        if (jokerResult >= -1) {
            res.json({"x": jokerResult})
        } else {
            usersController.add('x', 1, req.body.x, () => {
                res.json(jokerResult)
            });
        }
    });
};

exports.hit = (req, res) => {
    usersController.useJoker('x', req.body.x, (jokerResult) => {
        if (jokerResult >= 0) {
            questionsController.getCorrect(req.body.x, (correctResult) => {
                if (correctResult > 0) {
                    var response = {
                        "x": correctResult,
                        "x": jokerResult
                    };
                    res.json(response);
                } else {
                    usersController.add('x', 1, req.body.x, () => {
                        res.json(correctResult);
                    });
                }
            });
        } else if (jokerResult == -1) {
            var response = {
                "x": -1,
                "x": jokerResult
            };
            res.json(response);
        } else {
            res.json(jokerResult)
        }
    });
};




