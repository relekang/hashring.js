var sha1 = require("sha1");
var ObjectUtils = require("./ObjectUtils");

function HashRing() {
    if ((typeof window !== "undefined" && this === window) || (typeof self !== "undefined" && this === self)) {
        throw new TypeError("Tried to call class HashRing as a regular function. Classes can only be called with the 'new' keyword.");
    }
    this.keys = [];
    this.ring = {};
}
HashRing.prototype.defaultNodeWeight = 200;
HashRing.prototype.keys = null;
HashRing.prototype.ring = null;
HashRing.prototype.addNode = function(node, weight) {
    weight = weight || this.defaultNodeWeight;
    var key = this.createKey(node);
    this.ring[key] = node;
    this.keys.push(key);
    this.keys.sort();
    return key;
};
HashRing.prototype.removeNode = function(node) {
    var key = this.createKey(node);
    delete this.ring[key];
    this.keys.splice(this.keys.indexOf(key), 1);
};
HashRing.prototype.createKey = function(node) {
    return sha1(JSON.stringify(node));
};
HashRing.prototype.getNodePosition = function(key) {
    if (this.isEmpty()) {
        return [null, null];
    }

    var __a1 = this.keys;
    var __l1 = __a1.length;
    for (var i = 0; i < __l1; i++) {
        var node = __a1[i];
        if (parseInt(key, 16) <= parseInt(node, 16)) {
            return [i, this.keys[i]];
        }
    }
    return [0, this.keys[0]];
};
HashRing.prototype.getNodeForKey = function(key) {
    return this.ring[this.getNodePosition(key)[1]];
};
HashRing.prototype.isEmpty = function() {
    return Object.size(this.ring) === 0;
};


module.exports = HashRing;