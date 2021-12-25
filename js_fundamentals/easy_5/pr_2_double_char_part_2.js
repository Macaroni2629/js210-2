// Double Char Part 2
// Write a function that takes a string, doubles every consonant character in the string, and returns the result as a new string. The function should not double vowels ('a','e','i','o','u'), digits, punctuation, or whitespace.

// Examples:

const FORBIDDEN = ['a', 'e', 'i', 'o', 'u', '!', ',', '.', '-', ' '];

function doubleConsonants(string) {
  let answer = '';
  for (let i = 0; i < string.length; i++) {
    if (!FORBIDDEN.includes(string[i])) {
      answer += string[i].repeat(2);
    } else {
      answer += string[i];
    }
  }
  return answer;
}

console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""

const CONSONANTS = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm',
                  'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];

function doubleConsonants(string) {
  const stringArray = [];

  for (let i = 0; i < string.length; i += 1) {
    stringArray.push(string[i]);
    if (CONSONANTS.includes(string[i].toLowerCase())) {
      stringArray.push(string[i]);
    }
  }

  return stringArray.join('');
}