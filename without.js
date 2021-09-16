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
//assertArrayEqual(["1", "2", "3"], ["1", "2", "3"])
//1st array = actual and 1nd array= expected parameters

//without 1st attempt
// const without = function(sourceArray, itemsToRemoveArray) {
//   let newArray = [];
//   for (let i = 0; i < sourceArray.length; i++) {
//     for (let j = 0; j < itemsToRemoveArray.length; j++) {
//       if (sourceArray[i] !== itemsToRemoveArray[j]) {
//         if (newArray.indexOf(sourceArray[i]) === -1) {
//           newArray.push(sourceArray[i]);
//         }
//       }
//     }
//   }
//   return newArray;
// };

// console.log(without([1, 2, 3], [1]));
// console.log(without(["1", "2", "3"], [1, 2, "3"]));

//2nd attempt
const without = function(sourceArray, itemsToRemoveArray) {
  let newArray = sourceArray.slice(); //returns array as a copy without changing the original
  for (let j = 0; j < itemsToRemoveArray.length; j++) {
    let index = newArray.indexOf; (itemsToRemoveArray[j]);
    if (index > -1) {
      newArray.splice(index, 1);
    }
  }
  return newArray;
};

console.log(without([1, 2, 3], [1]));
console.log(without(["1", "2", "3"], [1, 2, "3"]));