const expect = require('chai').expect;
const isPalindrome = require('../src/palindrome');

describe('palidrome test', function() {
    it('should pass this canary test', function() {
        expect(true).to.be.true;
    });

    it('shoul return true for argument dad mom', function() {
        expect(isPalindrome('dad mom')).to.be.false;
        
        // var aWord = 'mom';

        // var result =isPalindrome(aWord);

        // expect(result).to.be.true;
    });

    it('shoul return true for argument mom', function() {
        expect(isPalindrome('mom')).to.be.true;
    });

    it('shoul return true for argument dad', function() {
        expect(isPalindrome('dad')).to.be.true;
    });

    it('shoul return true for argument mom', function() {
        expect(isPalindrome('mom')).to.be.true;
    });

    it('shoul return true for argument mom mom', function() {
        expect(isPalindrome('mom mom')).to.be.true;
    });

    it('should return false for argument dude', function() {
        expect(isPalindrome('dude')).to.be.false;
    });

    it('shuld return false when argument is an empty string', function() {
        expect(isPalindrome(' ')).to.be.false;
    })

    it('should throw an excetion if argument is missing', function() {
        var call = function() { isPalindrome(); };
        expect(call).to.throw(Error, 'Invalid argument');
    });
});