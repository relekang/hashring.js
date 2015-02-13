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
            instance.addNode({});
            expect(Object.size(instance.ring)).to.equal(1);
            expect(instance.keys.length).to.equal(1);

            instance.addNode({
                'id': 'some-node'
            });

            expect(Object.size(instance.ring)).to.equal(2);
            expect(instance.keys.length).to.equal(2);
        });

        it('should sort the key list', function() {
            instance.addNode({
                'id': 'a-node'
            });
            instance.addNode({
                'id': 'some-node'
            });
            var keys = instance.keys;
            instance.keys.sort();
            expect(instance.keys).to.equal(keys);
        });

        it('should return the key', function() {
            expect(instance.addNode({
                'id': 'some-node'
            })).to.equal('8739f2e61933c20a08fb90fcf3fe32e441114377');
        });
    });

    describe('.remove(node)', function() {
        var node = {
            'id': 'another-node'
        };

        beforeEach(function() {
            instance.addNode({
                'id': 'some-node'
            });
            instance.addNode(node);
        });

        it('should remove node from ring', function() {
            instance.removeNode(node);
            expect(instance.ring[node]).to.be.undefined;
            expect(Object.size(instance.ring)).to.equal(1);
        });
        it('should remove node from key set', function() {
            expect(instance.keys.length).to.equal(2);
            instance.removeNode(node);
            expect(instance.keys.length).to.equal(1);
            expect(instance.keys.indexOf(node)).to.equal(-1);
        });
    });

    describe('.getNodePosition', function() {
        var key = 'a939669469ea15dc344a4939315f2ce1b7c821b9';

        it('should return null, null if ring is empty', function() {
            expect(instance.getNodePosition(key)[0]).to.equal(null);
            expect(instance.getNodePosition(key)[1]).to.equal(null);
        });

        it('should return correct position and key', function() {
            var nodes = ['1.frigg.io', '2.frigg.io', '3.frigg.io', '4.frigg.io'];
            instance.addNode(nodes[0]);
            instance.addNode(nodes[1]);
            instance.addNode(nodes[2]);
            instance.addNode(nodes[3]);
            expect(instance.getNodePosition(key)[0]).to.equal(1);
            expect(instance.getNodePosition(key)[1]).to.equal('abadfe3f44e92057ef24f0073d0b8446ba4d3ab6');
            key = 'ffffffffffffffffffffffffffffffffffffffff';
            expect(instance.getNodePosition(key)[0]).to.equal(0);
            expect(instance.getNodePosition(key)[1]).to.equal('3028c3f6833c50586a4501bdfbb21efa22835035');
        });
    });

    describe('.getNodeForKey(key)', function() {
        it('should return correct node', function() {
            instance.addNode('1.frigg.io');
            instance.addNode('2.frigg.io');

            var key = 'a939669469ea15dc344a4939315f2ce1b7c821b9';
            expect(instance.getNodeForKey(key)).to.equal('2.frigg.io');
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