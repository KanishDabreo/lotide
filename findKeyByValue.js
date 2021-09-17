const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    // c.log Template Literals (Template Strings) version
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

};

// TEST CODE
const findKeyByValue = function(object, value) {
  //create a for loop through our object
  for (let key in object) {
    //compare the value we get in our object with the value we have as the argument
    if (object [key] === value) {
      //if they are the same return the Key
      return key;
    }
  }
  return undefined;

};
const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};
//console.log(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"));

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);



//WHY (object[key] === value) AS THE CONDITION ??
//    BECAUSE --> aim is to access the value of the key in the object
// const bestTVShowsByGenre = {
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire"
// };
// --> dot notation
// console.log(bestTVShowsByGenre.comedy)
// --> bracket notation
// console.log(bestTVShowsByGenre['comedy'])