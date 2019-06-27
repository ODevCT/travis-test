const expect = require('chai').expect;
const Util = require('../src/util');

describe('util test', function() {
    it('should pass this canary test', function() {
        expect(true).to.eql(true);
    });

    var util;
    beforeEach(function() {
        util = new Util();
    });

    it('should pass if f2c return 0c for 32F', function() {
        var fahrnheit = 32;
        var celsius = util.f2c(fahrnheit);

        expect(celsius).to.eql(0);
    });

    it('should pass if f2c return 10C for 50F', function() {
        var fahrnheit = 50;

        var celsius = util.f2c(fahrnheit);

        expect(celsius).to.eql(10);
    })

});