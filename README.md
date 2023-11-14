# JS Arrays Drill

```js
// Use this to test your functions.
const items = [1, 2, 3, 4, 5, 5];
```

Here I've created few underscore functions on Arrays like:
1. each
2. map
3. reduce
4. find
5. filter
6. flatten

For every function, there is a complementing function in the test file to evaluate the working.

## 1. each 

Here the agenda, is to iterate over a array, without using forEach, and should pass array element and index as arguments to the call back function.
``` js
function each(elements, cb) {
  // code block to be executed.
}
```

## 2. map
In this function, the agenda is to transform the given array elements and should be able to return the transformed array in a new array,
without using the .map() function.
``` js
function map(elements, cb) {
  // code blocks to be executed.
}
```

## 3. reduce

In this, we need to reduce the array elements without using the .reduce() function, by using the below given function skeleton / format.
``` js
function reduce(elements, cb, startingValue) {
  // code blocks to be executed.
}
```

## 4. find

Here, we need to find an element from the array, without using the actual .includes() function.

``` js
function find(elements, cb) {
  // code blocks to be executed.
}

// Here the output will be the element which is found (first, after which the function returns) based on the condition,
// if not, the output will be undefined.
```

## 5. filter

In this function, the agenda is to filter out the data without using the actual .filter() method.
The return type will be a new array, which passes the condition or will be an empty array, if no element passes the test.

``` js
function filter(elements, cb) {
  // code blocks to be executed.
}
```

## 6. flatten
``` js
// Use this array, to test flatten function.
const nestedArray = [1, [2], [[3]], [[[4]]]];
```
This function, flattens a nested array, where nesting can be to any depth.
This is solved using recursion.

``` js
function flatten(nestedArray) {
  // code blocks to be executed.
}

output -
[1, 2, 3, 4]
```


