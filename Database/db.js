const mongoose = require('mongoose');

module.exports = () => {
    mongoose.connect("x", {useNewUrlParser: true, useUnifiedTopology: true});

    mongoose.connection.on('error', () => {
        console.log("Connection Failed")
    });

    mongoose.connection.on('open', () => {
        console.log("Connected")
    });
};