const usersController = require('../Database/Controllers/usersController');

exports.Purchased = (req, res) => {

    items = {
        hit: 0,
        pass: 0,
        bomb: 0,
    };

    switch (req.body.packageID) {
        case "x":
            items.hit = 20;
            items.pass = 20;
            items.bomb = 20;
            break;
        case "x":
            items.hit = 50;
            items.pass = 50;
            items.bomb = 50;
            break;
        case "x":
            items.hit = 100;
            items.pass = 100;
            items.bomb = 100;
            break;
        case "x":
            items.hit = openCase(1, 20, 1);
            items.pass = openCase(1, 20, 3);
            items.bomb = openCase(1, 20, 2);
            break;
        case "x":
            items.hit = openCase(20, 50, 1);
            items.pass = openCase(20, 50, 3);
            items.bomb = openCase(20, 50, 2);
            break;
        case "x":
            items.hit = openCase(50, 100, 1);
            items.pass = openCase(50, 100, 3);
            items.bomb = openCase(50, 100, 2);
            break;
        case "x":
            break;
    }

    usersController.add('x', items.hit, req.body.x);
    usersController.add('x', items.bomb, req.body.x);
    usersController.add('x', items.pass, req.body.x);

    res.send(items);
};

function openCase(min, max, k) {

    fark = max - min;
    fark = Math.floor(fark / k);

    max = max - Math.floor(Math.random() * fark);

    var count = Math.floor(Math.random() * (max - min + 1)) + min;

    return count;
}
