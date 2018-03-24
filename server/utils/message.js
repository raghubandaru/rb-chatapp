var generateMessage = (fro, text) => {
    return {
        fro,
        text,
        createdAt: new Date().getTime()
    };
};

module.exports = { generateMessage };