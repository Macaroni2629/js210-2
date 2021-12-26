// Always Return Negative
// Write a function that takes a number as an argument. If the argument is a positive number, return the negative of that number. If the argument is a negative number, return it as-is.

// Examples:

function negative(number) {
  let answer;
  number >= 0 ? answer = -number : answer = number;
  return answer;
}

console.log(negative(5));     // -5
console.log(negative(-3));    // -3
console.log(negative(0));     // -0

function negative(number) {
  return Math.abs(number) * -1;
}

function negative(int) {
  return int < 0 ? int : int * -1;
}

function negative(num) {
  return -Math.abs(num);
}

