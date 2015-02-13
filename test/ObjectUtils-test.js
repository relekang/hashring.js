var __module_chai = require("chai");
var ObjectUtils = require("../lib/ObjectUtils");
var expect = __module_chai.expect;

describe('Object.size', function() {
    it('should return correct size of object', function() {
        expect(Object.size({})).to.equal(0);
        expect(Object.size({
            'a': 1
        })).to.equal(1);
        expect(Object.size({
            'a': 1,
            'b': 2
        })).to.equal(2);
        expect(Object.size({
            'a': 1,
            'b': 2,
            'c': 3
        })).to.equal(3);
    });
});


module.exports = {
    'ObjectUtils': ObjectUtils,
    'expect': expect
};