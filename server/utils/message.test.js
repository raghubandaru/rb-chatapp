var expect = require('expect');

var { generateMessage } = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        var fro = 'raghu';
        var text = 'Some message';
        var message = generateMessage(fro, text);

        expect(message).toInclude({fro, text});
        expect(message.createdAt).toBeA('number');
    });
});