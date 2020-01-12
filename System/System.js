const version = "0.3";

exports.compareVersion = function (x) {
    if (x === version)
        return true;
    else
        return false;
};