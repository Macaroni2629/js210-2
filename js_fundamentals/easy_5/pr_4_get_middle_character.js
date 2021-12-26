// Get the Middle Character
// Write a function that takes a non-empty string argument and returns the middle character(s) of the string. If the string has an odd length, you should return exactly one character. If the string has an even length, you should return exactly two characters.

// Examples:

function evenString(string) {
  let halfwayIndex = (string.length / 2) - 1;
  return string.slice(halfwayIndex, halfwayIndex + 2);
}

function oddString(string) { 
  let halfwayIndex = Math.floor(string.length / 2);
  return string.slice(halfwayIndex, halfwayIndex + 1);
}

function centerOf(string) {
  if (string.length % 2 === 0) {
    return evenString(string);
  } else {
    return oddString(string);
  }
}

console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"

