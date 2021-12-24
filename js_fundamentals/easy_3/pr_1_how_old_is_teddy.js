// How Old is Teddy
// Build a program that randomly generates Teddy's age, and logs it to the console. Have the age be a random number between 20 and 200 (inclusive).

// function randomBetween(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// const age = randomBetween(20, 200);
// console.log(`Teddy is ${age} years old!`);

// Example Output:

// Teddy is 69 years old!

function randomBetween(low, high) {
  let swap;
  if (low > high) {
    swap = high
    high = low;
    low = swap;
  }
  return Math.floor(Math.random() * (high - low + 1)) + low;
  
}

const age = randomBetween(200, 20);
console.log(`Teddy is ${age} years old!`);

// Further Exploration
// The randomBetween function used the Math.floor() method. Would it make a difference if the Math.round() method was used instead? Yes, it would round up when it's 0.5 and up, and it would be out of range.

// Also, how can we make the function more robust? What if the user inadvertently gave the inputs in reverse order (i.e., the value passed to min was greater than max)?  Could do Math.abs(high - low + 1)

