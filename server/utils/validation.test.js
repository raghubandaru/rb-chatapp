var expect = require('expect');

var { isRealString } = require('./validation');

describe('isRealString', () => {
    it('should reject non-string values', () => {
        expect(isRealString(23)).toBe(false);
    });

    it('should reject string with only spaces', () => {
        expect(isRealString('     ')).toBe(false);
    });

    it('should allow strings with non-space characters', () => {
        expect(isRealString('      ra ghu  ')).toBe(true);
    });
});