// ACTUAL FUNCTION
const middle = function(array) {
    const midIndex = Math.floor(array.length / 2)

    if (array.length <= 2) return [];
    if (array.length % 2 === 1) return [array[midIndex]];
    if (array.length % 2 === 0) return [array[midIndex -1], array[midIndex]];
}

// reminder: TEST CODE moves to middleTest.js
// console.log(assertArrayEqual(middle([1]),[])) // => []
// console.log(assertArrayEqual(middle([1, 2]),[])) // => []

// console.log(assertArrayEqual(middle([1, 2, 3]),[2])) // => [2]
// console.log(assertArrayEqual(middle([1, 2, 3, 4, 5]),[3])) // => [3]

// console.log(assertArrayEqual(middle([1, 2, 3, 4]),[2, 3])) // => [2, 3]
// console.log(assertArrayEqual(middle([1, 2, 3, 4, 5, 6]),[3, 4])) // => [3, 4]

module.exports = middle;