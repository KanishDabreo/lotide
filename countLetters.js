// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
//     // c.log Template Literals (Template Strings) version
//   } else if (actual !== expected) {
//     console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
//   }

// };

const countLetters = function(countString){
let countResults = {};
for (let character of countString){
  if(countResults[character]) {
    countResults[character] += 1;
  } else {
    countResults[character] = 1;
  }
  }
  return countResults;
};
module.exports = countLetters;
//previous example for extra help
// const countOnly = function(allItems, itemsToCount) {
//   const results = {}; 
//   for (const item of allItems) {
//     if (itemsToCount[item]) { 
//       if (results[item]) {
//         results[item] += 1;
//       } else {
//         results[item] = 1;
//       }
//     }
//     console.log(item);
//   }
//   return results;
// }