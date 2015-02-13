# hashring.js [![Build status](https://ci.frigg.io/badges/relekang/hashring.js/)](https://ci.frigg.io/relekang/hashring.js/last/) [![Coverage status](https://ci.frigg.io/badges/coverage/relekang/hashring.js/)](https://ci.frigg.io/relekang/hashring.js/last/)


Hashring algorithm for node and browserify

```
npm install relekang/hashstring.js
```
## Usage
### bailey.js
```coffee
import HashRing

hr = new HashRing()
hr.addNode('10.0.0.1')
hr.addNode('10.0.0.2')
hr.getNodeForKey('3028c3f6833c50586a4501bdfbb21efa22835035')
# => '10.0.0.1'
hr.getNodeForKey('d37393e582dd180d87115bdcd6c73039f28f03d1')
# => '10.0.0.2'
```

### Javascript
```javascript
var HashRing = require("HashRing");

var hr = new HashRing();
hr.addNode('10.0.0.1');
hr.addNode('10.0.0.2');
hr.getNodeForKey('3028c3f6833c50586a4501bdfbb21efa22835035');
// => '10.0.0.1'
hr.getNodeForKey('d37393e582dd180d87115bdcd6c73039f28f03d1');
// => '10.0.0.2'
```
----------------------

MIT © Rolf Erik Lekang
