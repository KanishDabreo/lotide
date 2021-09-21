//takeUntil function runs the first parameter array (data1) the and parameter is a function that will return truthy when the element in the array is < 0 causing the function to return the previous elements
const takeUntil = function(array, callback) {
  const results = [];
  for (const element of array) {
    if (callback(element)) {
      break;
    }
    results.push(element);
  }
  return results;
};

// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);

// console.log('---');
// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];

// const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);

module.exports = takeUntil;