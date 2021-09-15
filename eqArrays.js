const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🛑🛑🛑 Assertion Passed: ${actual} === ${expected}`);
    // c.log Template Literals (Template Strings) version
  } else if (actual !== expected) {
    console.log(`✅✅✅ Assertion Failed: ${actual} !== ${expected}`);
  }

};

const eqArrays = function (arrayOne, arrayTwo) { 
  if (arrayOne.length !== arrayTwo.length) {
      return false;
    }
    for (let i = 0; i < arrayOne.length; i ++){
      if (arrayOne[i] !== arrayTwo[1]){
        return false;
      }
    }
    return true;
}

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
