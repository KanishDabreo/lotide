const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};
//console.log(eqArrays(["5", "2", "3"], ["1", "2", "3"]))
//assertArrayEqual(["5", "2", "3"], ["1", "2", "3"])
//1st array = actual and 1nd array= expected parameters
module.exports = map;