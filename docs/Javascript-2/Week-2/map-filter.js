'use strict';

const myNumbers = [1, 2, 3, 4];

/* function doubleOddNumbers(numbers = [0]) {
  //   // Replace this comment and the next line with your code
  const newNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
      newNumbers.push(numbers[i] * 2);
    }
  }
  return newNumbers;
} */

const doubleOddNumbers = numbers =>
  numbers.filter(number => number % 2 !== 0).map(number => number * 2);

// eslint-disable-next-line no-unused-vars
const result = doubleOddNumbers(myNumbers);

// Do not change or remove anything below this line
module.exports = {
  myNumbers,
  doubleOddNumbers,
};
