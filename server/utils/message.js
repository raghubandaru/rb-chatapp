var generateMessage = (fro, text) => {
    return {
        fro,
        text,
        createdAt: new Date().getTime()
    };
};

var generateLocationMessage = (fro, latitude, longitude) => {
    return {
        fro,
        url: `https://www.google.com/maps?q=${latitude},${longitude}`,
        createdAt: new Date().getTime()
    }
};

module.exports = { generateMessage, generateLocationMessage };