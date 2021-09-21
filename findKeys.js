// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
//     // c.log Template Literals (Template Strings) version
//   } else if (actual !== expected) {
//     console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
//   }

// };
/*Implement the function findKey which takes in an object and a callback. It should scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined*/

const findKey = function(object, callback) {
  const results = [];
  for (const key in object) {
    if (callback(object[key])) {
      results.push(key);
      break;
    }
  }
  return results;
};

module.exports = findKey;