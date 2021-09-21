const findKeyByValue = function(object, value) {
  //create a for loop through our object
  for (let key in object) {
    //compare the value we get in our object with the value we have as the argument
    if (object[key] === value) {
      //if they are the same return the Key
      return key;
    }
  }
  return undefined;
};
// TEST CODE
// const bestTVShowsByGenre = {
//   sciFi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama: "The Wire"
// };
//console.log(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"));

module.exports = findKeyByValue;

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