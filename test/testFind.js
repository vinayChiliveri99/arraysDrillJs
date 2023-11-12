let find = require('../find');

const items = [1, 2, 3, 4, 5, 5];

let result = find(items, function cb(element) {
  return element;
});

console.log(result);
