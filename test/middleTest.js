// const assertArrayEqual = require('../assertArraysEqual');
// const middle = require('../middle');

// // TEST CODE
// console.log(assertArrayEqual(middle([1]),[])) // => []
// console.log(assertArrayEqual(middle([1, 2]),[])) // => []

// console.log(assertArrayEqual(middle([1, 2, 3]),[2])) // => [2]
// console.log(assertArrayEqual(middle([1, 2, 3, 4, 5]),[3])) // => [3]

// console.log(assertArrayEqual(middle([1, 2, 3, 4]),[2, 3])) // => [2, 3]
// console.log(assertArrayEqual(middle([1, 2, 3, 4, 5, 6]),[3, 4])) // => [3, 4]

const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("returns [] for [1]", () => {
    assert.deepEqual(middle([1]),[]);
  });
});

describe("#middle", () => {
  it("returns [] for [1, 2]", () => {
    assert.deepEqual(middle([1, 2]),[]);
  });
});

describe("#middle", () => {
  it("returns [2] for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]),[2]);
  });
});

describe("#middle", () => {
  it("returns [3, 4] for [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]),[3, 4]);
  });
});
