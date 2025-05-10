const removeFromArray = function (array, ...removeItems) {
  for (let i = 0; i < array.length; i++) {
    if (removeItems.includes(array[i])) {
      array.splice(i, 1);
      i--; // Decrement i to adjust for the removed element
    }
  }
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
