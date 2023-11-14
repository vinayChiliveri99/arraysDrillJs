let flatten = require('../flatten');

const nestedArray = [1, [2], [[3]], [[[4]]]]; // use this to test 'flatten'

const result = flatten(nestedArray);

console.log(result);
