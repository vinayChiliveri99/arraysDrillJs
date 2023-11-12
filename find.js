// Do NOT use .includes, to complete this function.
// Look through each value in `elements` and pass each element to `cb`.
// If `cb` returns `true` then return that element.
// Return `undefined` if no elements pass the truth test.

function find(elements, cb) {
  for (let index = 0; index < elements.length; index++) {
    if (cb(elements[index]) === true) {
      return elements[index];
    }
  }
}

module.exports = find;
