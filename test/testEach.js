let each = require('../each');

const items = [1, 2, 3, 4, 5, 5];

each(items, function cb(element, index) {
  console.log(element);
  return element;
});
