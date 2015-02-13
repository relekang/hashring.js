function HashRing(hasher) {
    if ((typeof window !== "undefined" && this === window) || (typeof self !== "undefined" && this === self)) {
        throw new TypeError("Tried to call class HashRing as a regular function. Classes can only be called with the 'new' keyword.");
    }
    this.hasher = hasher;
}
HashRing.prototype.defaultNodeWeight = 200;
HashRing.prototype.add = function(node, weight) {
    weight = weight || this.defaultNodeWeight;
    throw 'NotImplemented';
};
HashRing.prototype.remove = function() {
    throw 'NotImplemented';
};


module.exports = HashRing;