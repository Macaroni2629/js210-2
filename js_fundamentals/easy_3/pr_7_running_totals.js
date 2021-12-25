// Running Totals
// Write a function that takes an array of numbers and returns an array with the same number of elements, but with each element's value being the running total from the original array.

// Examples:

// function runningTotal(arrayOfNum) {
//   let array = [];
//   let sum = 0;
//   for (let i = 0; i < arrayOfNum.length; i++) {
//     array[i] = (sum += arrayOfNum[i]);
//   }
//   return array;
// }

// console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
// console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
// console.log(runningTotal([3]));                    // [3]
// console.log(runningTotal([]));                     // []

//

// function runningTotal(array) {
//   const resultArray = [];
//   let sum = 0;

//   for (let i = 0; i < array.length; i += 1) {
//     sum += array[i];
//     resultArray.push(sum);
//   }

//   return resultArray;
// }

// Discussion
// The solution makes use of an array and a number variable. The array, resultArray, stores the values of the running total, while sum keeps track of the current value as we move through each item in the original array argument. During each iteration, the solution updates the value of sum, incrementing it by the value at the current index of the input array.

// Further Exploration
// Can you rewrite the solution using the Array.prototype.map method? What types of problems do you think are well-suited for the Array.prototype.map method?

function runningTotal(array) {
  let result = [];
  let sum = 0;
  
  array.map(number => result.push(sum += number));
  return result;
}

console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []