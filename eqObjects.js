const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    // c.log Template Literals (Template Strings) version
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

};

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


// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

const eqObjects = function (objOne, objTwo) {
  // declare variables
  let arrayOne = Object.keys(objOne);
  let arrayTwo = Object.keys(objTwo);
  if (arrayOne.length !== arrayTwo.length) {
    //checking evalu pair lengths are the same or not
    return false;
  }
  for(const key of arrayOne) {
    //interate
    if (objOne[key] !== objTwo[key]){
      //compare objectkeys
      if (Array.isArray(objOne[key]) && Array.isArray(objTwo[key])){
        //checking if both arrays are true
        return eqArrays(objOne[key], objTwo[key]);
      }
    return false;
    }
  }
  return true;
 };

 // TEST CODE
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc), false); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false


module.exports = eqObjects;