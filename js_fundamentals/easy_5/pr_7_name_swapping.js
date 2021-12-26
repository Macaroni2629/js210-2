// Name Swapping
// Write a function that takes a string argument consisting of a first name, a space, and a last name, and returns a new string consisting of the last name, a comma, a space, and the first name.

// Examples:

function swapName(string) {
  let arrayOfWords = string.split(' ');
  return arrayOfWords[1] + ", " + arrayOfWords[0];
}

console.log(swapName('Joe Roberts'));    // "Roberts, Joe"

function swapName(name) {
  return name.split(' ').reverse().join(', ');
}

// Further Exploration
// What if the person had more than one first name? Refactor the current solution so that it can accommodate this.


function swapName(string) {
  let arrayOfWords = string.split(' ');
  return arrayOfWords[2] + arrayOfWords[1] + ", " + arrayOfWords[0];
}