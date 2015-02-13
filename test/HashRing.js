var __module_chai = require("chai");
var HashRing = require("../lib/HashRing");
var expect = __module_chai.expect;

describe('HashRing', function() {
    describe('init', function() {
        it('should create an instance', function() {
            var instance = new HashRing();
            expect(instance).to.be.ok;
        });
    });
});


module.exports = {
    'HashRing': HashRing,
    'expect': expect
};