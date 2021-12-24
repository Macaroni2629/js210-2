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