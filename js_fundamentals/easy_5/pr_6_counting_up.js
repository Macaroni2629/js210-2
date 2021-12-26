// Counting Up
// Write a function that takes an integer argument and returns an array containing all integers between 1 and the argument (inclusive), in ascending order.

// You may assume that the argument will always be a positive integer.

// Examples:

function sequence(number) {
  let array = [];
  let i = 0;
  while (i < number) {
    array[i] = i + 1;
    i++;
  }
  return array;
}

console.log(sequence(5));    // [1, 2, 3, 4, 5]
console.log(sequence(3));    // [1, 2, 3]
console.log(sequence(1));    // [1]

function sequence(limit) {
  const result = [];

  for (let i = 1; i <= limit; i += 1) {
    result.push(i);
  }

  return result;
}