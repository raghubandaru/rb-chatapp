var isRealString = (str) => {
    return typeof str === 'string' && str.trim().length > 0;
};

var isDuplicateExists = (name, room, users) => {
    var count = 0;
    var currentRoomUsers = users.filter((user) => user.room === room);

    currentRoomUsers.forEach(element => {
        if (element.name === name) {
            count++;
        }
    });

    return count;    
};

module.exports = { isRealString, isDuplicateExists };