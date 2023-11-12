let map = require('../map');

const items = [1, 2, 3, 4, 5, 5];

const result = map(items, function cb(element, index) {
  return element;
});

console.log(result);
