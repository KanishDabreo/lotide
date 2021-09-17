//VERSION ONE
// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log("🛑🛑🛑 Assertion Passed:" + actual + " === " + expected);
//   } else if (actual !== expected) {
//     console.log("✅✅✅ Assertion Failed:" + actual + " !== " + expected);
//   }

// };

// // TEST CODE
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);

//VERSION TWO WITH ${}
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🛑🛑🛑 Assertion Passed: ${actual} === ${expected}`);
    // c.log Template Literals (Template Strings) version
  } else if (actual !== expected) {
    console.log(`✅✅✅ Assertion Failed: ${actual} !== ${expected}`);
  }

};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);