const sumAll = function (numOne, numTwo) {
  // Check if inputs are numbers
  if (typeof numOne !== "number" || typeof numTwo !== "number") {
    return "ERROR";
  }

  // Check if inputs are negative
  if (numOne < 0 || numTwo < 0) {
    return "ERROR";
  }

  // Check if inputs are integers
  if (!Number.isInteger(numOne) || !Number.isInteger(numTwo)) {
    return "ERROR";
  }

  // Swap if needed
  if (numTwo < numOne) {
    let temp = numOne;
    numOne = numTwo;
    numTwo = temp;
  }

  let erg = 0;
  for (let i = numOne; i <= numTwo; i++) {
    erg += i;
  }
  return erg;
};
console.log(sumAll(1, 4));
// Do not edit below this line
module.exports = sumAll;
