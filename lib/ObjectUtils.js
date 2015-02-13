Object.size = function(obj) {
    var size = 0;
    for (var key in obj) {
        var value = obj[key];
        if (obj.hasOwnProperty(key)) {
            size++;
        }
    }
    return size;
};


module.exports = {};