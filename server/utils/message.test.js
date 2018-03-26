var expect = require('expect');

var { generateMessage, generateLocationMessage } = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        var fro = 'raghu';
        var text = 'Some message';
        var message = generateMessage(fro, text);

        expect(message).toInclude({fro, text});
        expect(message.createdAt).toBeA('number');
    });
});

describe('generateLocationMessage', () => {
    it('should generate correct location object', () => {
        var fro = 'ABC';
        var latitude = 1;
        var longitude = 1;
        var url = 'https://www.google.com/maps?q=1,1';
        var message = generateLocationMessage(fro, latitude, longitude);

        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({fro, url});
    });
});