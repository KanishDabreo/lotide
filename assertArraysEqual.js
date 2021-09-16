const eqArrays = function (arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) {
    return false;
  }
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  }
  return true;
};

const assertArrayEqual = function (actual, expected) {
  //console.log(eqArrays);
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    // c.log Template Literals (Template Strings) version
  } else {
    //(actual !== expected)
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};
//console.log(eqArrays(["5", "2", "3"], ["1", "2", "3"]))
assertArrayEqual(["5", "2", "3"], ["1", "2", "3"])
//1st array = actual and 1nd array= expected parameters