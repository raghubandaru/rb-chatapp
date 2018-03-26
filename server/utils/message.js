var moment = require('moment');

var generateMessage = (fro, text) => {
    return {
        fro,
        text,
        createdAt: moment().valueOf()
    };
};

var generateLocationMessage = (fro, latitude, longitude) => {
    return {
        fro,
        url: `https://www.google.com/maps?q=${latitude},${longitude}`,
        createdAt: moment().valueOf()
    };
};

module.exports = { generateMessage, generateLocationMessage };