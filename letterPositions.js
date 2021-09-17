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
//assertArrayEqual(["5", "2", "3"], ["1", "2", "3"])
//1st array = actual and 1nd array= expected parameters

/*We'll implement a new function letterPositions which will return all the indices (zero-based positions) in the string where each character is found.

For each letter, instead of returning just one number to represent its number of occurrences, multiple numbers may be needed to represent all the places in the string that it shows up.*/

const letterPositions = function(sentence) {
  let results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (!results[sentence[i]]) {
      results[sentence[i]] = [i];
    } else {
      results[sentence[i]].push(i);
    }
  }
  return results;
};

//Test code
assertArrayEqual(letterPositions("hello").e, [1]);
//console.log(letterPositions("lighthouse in the house");