// What's My Value?
// What will the following program log to the console? Can you explain why?

const array = ['Apples', 'Peaches', 'Grapes'];

array[3.4] = 'Oranges';
console.log(array.length); // 3
console.log(Object.keys(array).length); // 4

array[-2] = 'Watermelon';
console.log(array.length); // 3
console.log(Object.keys(array).length); // 5

// Since the keys 3.4 and -2 are not whole number positive integers, they do not count towards the length of the array.  However, when you invoke Object.keys, passing in the array as an object, it creates an array of keys.

// 3
// 4
// 3
// 5

// Recall that Arrays are implemented with Objects internally in JavaScript. One thing that differentiates the two is that arrays have a length property, while objects do not. Arrays can be thought of as special objects that have only non-negative integer values (from 0 up to 2 32 - 1) as keys, and have an extra length property that keeps track of how many such key-value pairs exist in the object.

//const array = ['Apples', 'Peaches', 'Grapes'];
array[3.4] = 'Oranges';
array[-2] = 'Watermelon';

console.log(array);  // ["Apples", "Peaches", "Grapes", 3.4: "Oranges", -2: "Watermelon"]

console.log(Object.keys(array));      // ["0", "1", "2", "3.4", "-2"]

// "0", "1", "2" are the indices/keys/property names for "Apples", "Peaches", "Grapes"
console.log(array[0]);                // Apples
console.log(array[1]);                // Peaches
console.log(array[2]);                // Grapes
console.log(array['2']);              // Grapes

// "3.4" and "-2" are keys/property names that exist in the 'Array Object'
console.log(array[3.4]);              // Oranges
console.log(array[-2]);               // Watermelon
console.log(array['-2']);             // Watermelon

// Palindromic Strings Part 2
// Write another function that returns true if the string passed as an argument is a palindrome, or false otherwise. This time, however, your function should be case-insensitive, and should ignore all non-alphanumeric characters. If you wish, you may simplify things by calling the isPalindrome function you wrote in the previous exercise.

// Examples:

function isPalindrome(string) {
  return string === string.split('').reverse().join('');
}

function isRealPalindrome(string) {
  string = string.toLowerCase();
  string = string.replace(/[^a-z^0-9]/g, '');
  return isPalindrome(string);
}

console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam'));               // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));             // true
console.log(isRealPalindrome('123ab321'));            // false

// Palindromic Strings Part 2
// Write another function that returns true if the string passed as an argument is a palindrome, or false otherwise. This time, however, your function should be case-insensitive, and should ignore all non-alphanumeric characters. If you wish, you may simplify things by calling the isPalindrome function you wrote in the previous exercise.

// Examples:

function isPalindrome(string) {
  return string === string.split('').reverse().join('');
}

function isRealPalindrome(string) {
  string = string.toLowerCase();
  string = string.replace(/[^a-z^0-9]/g, '');
  return isPalindrome(string);
}

console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam'));               // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));             // true
console.log(isRealPalindrome('123ab321'));            // false

function isRealPalindrome(string) {
  string = removeNonLetterNumbers(string.toLowerCase());
  return isPalindrome(string);
}

function removeNonLetterNumbers(string) {
  let result = '';

  for (let i = 0; i < string.length; i += 1) {
    if (isLetter(string[i]) || isNumber(string[i])) {
      result += string[i];
    }
  }

  return result;
}

function isLetter(char) {
  return char >= 'a' && char <= 'z';
}

function isNumber(char) {
 return char >= '0' && char <= '9';
}

// Discussion
// The first part of the solution makes all characters lowercased. The second uses the removeNonLetterNumbers function to replace any characters that are not alphanumeric, using two helper functions that check for either a letter or number, respectively. The solution relies on this to clean up the characters that are not subject to comparison. It then uses the isPalindrome function from the previous exercise.

// Recall that strings are compared based on standard lexicographical ordering, using Unicode values.