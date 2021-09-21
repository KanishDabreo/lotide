const eqArrays = require('./eqArrays');

const assertArrayEqual = function(actual, expected) {
  //console.log(eqArrays);
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    // c.log Template Literals (Template Strings) version
  } else {
    //(actual !== expected)
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

module.exports = assertArrayEqual;