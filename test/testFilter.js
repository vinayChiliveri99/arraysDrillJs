// Do NOT use .filter, to complete this function.
// Similar to `find` but you will return an array of all elements that passed the truth test
// Return an empty array if no elements pass the truth test

let filter = require('../filter');

const items = [1, 2, 3, 4, 5, 5];

const result = filter(items, function cb(item) {
  return item; // condition goes here like item >= 3 or item % 2 === 0, etc.,
});

console.log(result);
