// Double Char Part 1
// Write a function that takes a string, doubles every character in the string, and returns the result as a new string.

// Examples:

function repeater(string) {
  let answer = '';
  for (let i = 0; i < string.length; i++) {
    answer += string[i].repeat(2);
  }
  return answer;
}

console.log(repeater('Hello'));        // "HHeelllloo"
console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater(''));             // ""

function repeater(string) {
  const stringArray = [];

  for (let i = 0; i < string.length; i += 1) {
    stringArray.push(string[i], string[i]);
  }

  return stringArray.join('');
}