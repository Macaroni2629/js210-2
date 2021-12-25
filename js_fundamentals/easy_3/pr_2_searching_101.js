// Searching 101
// Write a program that solicits six numbers from the user and logs a message that describes whether the sixth number appears among the first five numbers.

// Examples:

// Enter the 1st number: 25
// Enter the 2nd number: 15
// Enter the 3rd number: 20
// Enter the 4th number: 17
// Enter the 5th number: 23
// Enter the last number: 17

// The number 17 appears in [25, 15, 20, 17, 23].

// -----

// Enter the 1st number: 25
// Enter the 2nd number: 15
// Enter the 3rd number: 20
// Enter the 4th number: 17
// Enter the 5th number: 23
// Enter the last number: 18

// The number 18 does not appear in [25, 15, 20, 17, 23].

const rlSync = require('readline-sync');

function enterNumbers() {
  let array = [];
  let first = rlSync.question("Enter the 1st number:");
  let second = rlSync.question("Enter the 2nd number:");
  let third = rlSync.question("Enter the 3rd number:");
  let fourth = rlSync.question("Enter the 4th number:");
  let fifth = rlSync.question("Enter the 5th number:");

  array.push(first, second, third, fourth, fifth);
  console.log(array);
  let sixth = rlSync.question("Enter the last number:");

  if (array.includes(sixth) {
    console.log(`The number ${sixth} appears in [${numbers.join(', ')}].`);
  } else {
    console.log(`${sixth} does not appear in [${numbers.join(', ')}].`)
  }
  return;
}

console.log(enterNumbers());

//

const numbers = [];

numbers.push(prompt('Enter the 1st number:'));
numbers.push(prompt('Enter the 2nd number:'));
numbers.push(prompt('Enter the 3rd number:'));
numbers.push(prompt('Enter the 4th number:'));
numbers.push(prompt('Enter the 5th number:'));

let lastNumber = prompt('Enter the last number:');

if (numbers.includes(lastNumber)) {
  console.log(`The number ${lastNumber} appears in [${numbers.join(', ')}].`);
} else {
  console.log(`The number ${lastNumber} does not appear in [${numbers.join(', ')}].`);
}

// Further Exploration
// What if the problem was looking for a number that satisfies some condition (e.g., a number greater than 25), instead of a specific number? Would the current solution still work? Why or why not? Think about this first before scrolling down.

// Possible Solution:
function isIncluded(arr, val) {
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] > val) {
      return true;
    }
  }

  return false;
}

// Explore the Array.prototype.some method, and see if you can change the possible solution shown above to make use of that method instead.

function isIncluded(arr, val) {
  return arr.some(number => number > val)
}


const rlsync = require('readline-sync');
let set = [];

for (i = 1; i <= 5; i += 1) {
  set.push(rlsync.question(`Enter number ${i}: `));
}

let lastNum = rlsync.question(`Enter the last number: `);
let conclusion = set.includes(lastNum) ? 'appears in' : 'does not appear in';

console.log(`The number ${lastNum} ${conclusion} [${set.join(', ')}]`)
