var __module_chai = require("chai");
var HashRing = require("../lib/HashRing");
var expect = __module_chai.expect;

describe('HashRing', function() {
    var instance = undefined;

    beforeEach(function() {
        instance = new HashRing();
    });

    describe('.init(hasher)', function() {
        it('should create an instance', function() {
            expect(instance).to.be.ok;
        });
    });

    describe('.add(node, weight)', function() {
        it('should add the node to the ring', function() {
            instance.add({});
            expect(Object.size(instance.ring)).to.equal(1);
            expect(instance.keys.length).to.equal(1);

            instance.add({
                'id': 'some-node'
            });

            expect(Object.size(instance.ring)).to.equal(2);
            expect(instance.keys.length).to.equal(2);
        });

        it('should sort the key list', function() {
            instance.add({
                'id': 'a-node'
            });
            instance.add({
                'id': 'some-node'
            });
            var keys = instance.keys;
            instance.keys.sort();
            expect(instance.keys).to.equal(keys);
        });
    });

    describe('.createKey(node)', function() {
        it('should return the same hash for same value', function() {
            expect(instance.createKey({})).to.equal(instance.createKey({}));
            expect(instance.createKey({
                'a': 'hi there'
            })).to.equal(instance.createKey({
                'a': 'hi there'
            }));
        });
        it('should return diffeent hash for same value', function() {
            expect(instance.createKey({})).to.not.equal(instance.createKey({
                'a': 'hi there'
            }));
        });
    });
});


module.exports = {
    'HashRing': HashRing,
    'expect': expect
};