// const nestedArray = [1, [2], [[3]], [[[4]]]]; // use this to test 'flatten'

// Flattens a nested array (the nesting can be to any depth).
// Hint: You can solve this using recursion.
// Example: flatten([1, [2], [3, [[4]]]]); => [1, 2, 3, 4];

function flatten(elements) {
  let result = [];

  for (let i = 0; i < elements.length; i++) {
    if (Array.isArray(elements[i])) {
      result = result.concat(flatten(elements[i]));
    } else {
      result.push(elements[i]);
    }
  }

  return result;
}

module.exports = flatten;

/* 
Initialized an array result to store the result of the flattened data.
Iterating over the elements of the array, and checking if the current element is a array,

If it's a array, it recursively calls the flattens method by pushing the current array.
After reducing the array to an element it being pushed to the array and that array is being concated with the result array at each call.

If the current element is found to be the element itself then it directly pushed to the result array.
*/
