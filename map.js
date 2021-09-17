const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};


const eqArrays = function(arrayOne, arrayTwo) {
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

const assertArrayEqual = function(actual, expected) {
  //console.log(actual);
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    // c.log Template Literals (Template Strings) version
  } else {
    //(actual !== expected)
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};
//console.log(eqArrays(["5", "2", "3"], ["1", "2", "3"]))
//assertArrayEqual(["5", "2", "3"], ["1", "2", "3"])
//1st array = actual and 1nd array= expected parameters

const words = ["ground", "control", "to", "major", "tom"];
//const results1 = map(words, word => word[0]);
//console.log(results1);
assertArrayEqual(map(words, word => word[0]), ['g', 'c', 't', 'm', 't']);

assertArrayEqual(map(words, word => word.length), [6, 7, 2, 5, 3]);

assertArrayEqual(map(words, word => word.toUpperCase()), ["GROUND", "CONTROL", "TO", "MAJOR", "TOM"]);

assertArrayEqual(map(words, word => word.slice(2)), ["ound", "ntrol", "", "jor", "m"]);