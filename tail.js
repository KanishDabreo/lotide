const tail = function(oldArray) {
  let newArray = [];
  for (let i = 0; i < oldArray.length - 1; i++) {
  //loop through the array and tells it where to start
    newArray[i] = oldArray[i + 1];
  }
  return newArray;
};

module.exports = tail;