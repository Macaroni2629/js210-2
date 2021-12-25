// Palindromic Strings Part 1
// Write a function that returns true if the string passed as an argument is a palindrome, or false otherwise. A palindrome reads the same forwards and backwards. For this problem, the case matters and all characters matter.

// Examples:



function isPalindrome(string) {
 for (let i = 0, j = string.length - 1; i < Math.floor(string.length / 2); i++, j--) {
   if (string[i] === string[j]) {
     continue;
   } else {
     return false
   }
 }
  return true;
}

console.log(isPalindrome('madam'));               // true
console.log(isPalindrome('Madam'));               // false (case matters)
console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
console.log(isPalindrome('356653'));              // true
// 

function isPalindrome(string) {
  return string === string.split('').reverse().join('');
}

// Discussion
// The solution leverages the Array.prototype.reverse and Array.prototype.join methods of the Array object by converting the string input into an array using the String.prototype.split method.

// With the use of these methods, the solution is straightforward.