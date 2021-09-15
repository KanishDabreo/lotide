const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🛑🛑🛑 Assertion Passed: ${actual} === ${expected}`);
    // c.log Template Literals (Template Strings) version
  } else if (actual !== expected) {
    console.log(`✅✅✅ Assertion Failed: ${actual} !== ${expected}`);
  }

};

const tail = function(oldArray) {
  let newArray = [];
  for (let i = 0; i < oldArray.length - 1; i++) {
  //loop through the array and tells it where to start
    newArray[i] = oldArray[i + 1];
  }
  return newArray;
};
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

/*extract the command-line arguments
const args = process.argv;
//console.log(args);

//grabbing the tail elements as strings
let x = args.slice(2);
//console.log(x);

//debug: to return elements of array as string
//console.log(x[0], x[1])

//add with placeholder parameters
const sum = function(num1, num2) {

  //Number() method to change strings to number
  return Number(num1) + Number(num2);

};
console.log(sum(x[0], x[1]));*/