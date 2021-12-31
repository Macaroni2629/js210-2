// Arguments Part 1
// What will the following code log to the console and why? Don't run the code until after you have tried to answer.

// let a = 7;

// function myValue(b) {
//   b += 10;
// }

// myValue(a);
// console.log(a);

function myValue(b) {
  b += 10;
}

let a = 7;

myValue(a);
console.log(a);

// In the creation phase, function `myValue` gets hoisted to the top.  Variable `a` is not defined.  Then execution phase happens.  `a` is assigned to 7.  myValue(a)` is invoked passing in variable `a` as an argument.  

// b is assigned to what a refers to, which is 7.  Then b += 10, which is the same as saying b = 7 + 10 which equals 17.  

// then we console.log(a), which logs 7, because `a` was originally pointing to a number, and numbers are immutable.  So it was passed by value to the function `myValue`.

// Discussion
// The code logs 7 to the console. The value assigned to variable a is 7 and it is a primitive value. Primitive values in JavaScript are immutable. Therefore, passing the variable a that is assigned a primitive value as an argument to a function, and consequently using it on any operation in the body of the function does not have any effect on the value assigned to a.