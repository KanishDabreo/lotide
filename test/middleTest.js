const assertArrayEqual = require('../assertArraysEqual');
const middle = require('../middle');

// TEST CODE
console.log(assertArrayEqual(middle([1]),[])) // => []
console.log(assertArrayEqual(middle([1, 2]),[])) // => []

console.log(assertArrayEqual(middle([1, 2, 3]),[2])) // => [2]
console.log(assertArrayEqual(middle([1, 2, 3, 4, 5]),[3])) // => [3]

console.log(assertArrayEqual(middle([1, 2, 3, 4]),[2, 3])) // => [2, 3]
console.log(assertArrayEqual(middle([1, 2, 3, 4, 5, 6]),[3, 4])) // => [3, 4]
