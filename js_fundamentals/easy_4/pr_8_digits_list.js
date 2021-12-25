// Digits List
// Write a function that takes one argument, a positive integer, and returns a list of the digits in the number.

// Examples:

function digitList(number) {
  let string = String(number);
  
  let answer = [];
  
  for (let i = 0; i < string.length; i++) {
    answer[i] = Number(string[i]);
  }
  return answer;
}

console.log(digitList(12345));       // [1, 2, 3, 4, 5]
console.log(digitList(7));           // [7]
console.log(digitList(375290));      // [3, 7, 5, 2, 9, 0]
console.log(digitList(444));         // [4, 4, 4]

function digitList(number) {
  const numberStringArray = String(number).split('');
  const numberArray = [];

  for (let i = 0; i < numberStringArray.length; i += 1) {
    numberArray.push(parseInt(numberStringArray[i], 10));
  }

  return numberArray;
}
// A more concise approach would be to use the Array.prototype.map method. Refactor the current solution to make use of this method, if you haven't already.

function digitList(number) {
  let string = String(number);
  
  let answer = [];
  
  for (let i = 0; i < string.length; i++) {
    answer[i] = Number(string[i]);
  }
  return answer;
}

console.log(digitList(12345));       // [1, 2, 3, 4, 5]
console.log(digitList(7));           // [7]
console.log(digitList(375290));      // [3, 7, 5, 2, 9, 0]
console.log(digitList(444));         // [4, 4, 4]

function digitList(num) {
  return String(num).split('').map(Number);
}

function digitList(num) {
  return [...String(num)].map(Number);
}

