// Arguments Part 3
// What will the following code log to the console and why? Don't run the code until after you have tried to answer.

// let a = [1, 2, 3];

// function myValue(b) {
//   b[2] += 7;
// }

// myValue(a);
// console.log(a);

function myValue(b) {
  b[2] += 7;
}

let a = [1, 2, 3];

myValue(a);
console.log(a);

// In the creation phase, the function `myValue` is hoisted to the top.  variable `a` is not defined.  Then the code executes.  `a` is assigned to an array containing elements 1, 2, 3.  

// myValue is invoked, passing in variable `a` which is referring to an array containing 1, 2, 3.  `b` and `a` both refer to that array.

// Then, b[2], that is at the 2 index of that array, b[2] = b[2] + 7 which equals 3 + 7 which equals 10.

// Then we log `a`, which should return an array [1, 2, 10] because arrays are mutable objects.  The array object was passed by reference.

// Discussion
// The code logs [1, 2, 10] to the console. This is because arrays and objects, in JavaScript, are mutable. When the value assigned to a, an array, is passed to the function on line 7, a local variable b is initialized (on line 3) to the same array that a is assigned. Therefore, when the program executes the statement b[2] += 7 on line 4, it is actually being executed on the array assigned to a. Consequently, when the value of a is logged on line 8, we can see the result of this mutation: [1, 2, 10].