var sha1 = require("sha1");
var ObjectUtils = require("./ObjectUtils");

function HashRing(hasher) {
    if ((typeof window !== "undefined" && this === window) || (typeof self !== "undefined" && this === self)) {
        throw new TypeError("Tried to call class HashRing as a regular function. Classes can only be called with the 'new' keyword.");
    }
    this.hasher = hasher;
}
HashRing.prototype.defaultNodeWeight = 200;
HashRing.prototype.keys = [];
HashRing.prototype.ring = {};
HashRing.prototype.add = function(node, weight) {
    weight = weight || this.defaultNodeWeight;
    var key = this.createKey(node);
    this.ring[key] = node;
    this.keys.push(key);
    this.keys.sort();
};
HashRing.prototype.remove = function() {
    throw 'NotImplemented';
};
HashRing.prototype.createKey = function(node) {
    return sha1(JSON.stringify(node));
};


module.exports = HashRing;