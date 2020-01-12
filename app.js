const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const db = require('./Database/db')();

const usersController = require("./Database/Controllers/usersController");
const questionsController = require("./Database/Controllers/questionsController");
const logsController = require("./Database/Controllers/logsController");

const joker = require('./Class/Joker');
const iap = require('./Class/IAP');

app.use(bodyParser.urlencoded({extended: true}));

app.listen(8000, function () {
    console.log("Listening");
});

app.get("/", (req, res) =>
    res.send("Success")
);

app.post("/x", (req, res) => {
    questionsController.getRandomQuestion(req, res);
});

app.get("/x", (req, res) => {
    questionsController.addQuestion(res);
});

app.post("/x", (req, res) => {
    logsController.addLog(req, 'x');
    joker.bomb(req, res);
});

app.post("/x", (req, res) => {
    logsController.addLog(req, 'x');
    joker.hit(req, res);
});

app.post("/x", (req, res) => {
    logsController.addLog(req, 'x');
    usersController.add('x', 1, req.body.userID);
    questionsController.addAverage(req.body.x, 1);
    res.end();
});

app.post("/x", (req, res) => {
    logsController.addLog(req, 'x');
    usersController.add('x', 1, req.body.x);
    questionsController.addAverage(req.body.x, -1);
    res.end();
});

app.post("/x", (req, res) => {
    usersController.add('point', 5, req.body.x);
    logsController.addLog(req, 'point');
    res.end();
});

app.post("/x", (req, res) => {
    logsController.addLog(req, 'x');
    joker.pass(req, res);

});

app.post("/x", (req, res) => {
    logsController.addLog(req, 'x');
    res.json(req.body);
});

app.post("/x", (req, res) => {
    logsController.addLog(req, 'x: ' + req.body.x);

    usersController.sendCount(req, res)
});

app.post("/x", (req, res) => {
    logsController.addLog(req, 'x');
    usersController.getProfile(req, res);
});

app.post("/x", (req, res) => {
    logsController.addLog(req, 'x: ' + req.body.x);
    iap.Purchased(req, res);
});

app.post("/x", (req, res) => {
    var exception = req.body.exception;
});

app.post("/x", (req, res) => {
});