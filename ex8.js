// Higher order functions

const multiply = function(number) {
  // should be generic function, creating multiple functions
  return function(number2) {
    return number*number2
  }
};

const multiplyByTwo = multiply(2);
const multiplyByTen = multiply(10);

console.log(multiplyByTwo(2))
console.log(multiplyByTen(2))

// refactor:

const multiplyRef = number => (number2) => number*number2;

const multiplyRefByTwo = multiplyRef(2);
const multiplyRefByTen = multiplyRef(10);

console.log(multiplyRefByTwo(2))
console.log(multiplyRefByTen(2))
