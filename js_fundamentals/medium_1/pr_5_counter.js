// Counter
// What will the following code snippets log?

//Code Snippet 1

// var counter = 5;
// var rate = 3;
// console.log('The total value is ' + String(counter * rate));

// function counter(count) {
//   // ...
// }

function counter(count) {
  // ...
}

var rate;

counter = 5;
rate = 3;

console.log('The total value is ' + String(counter * rate));
// logs: The total value is 15

/* In the creation phase, a function `counter` is declared  and hoisted to the top.  Variable `counter` is pointing to to the function.

Variable rate is hoisted as well.  Variable rate is undefined.

Then in the execution phase, Javascript reads from top to bottom.  It declares the function `counter`.  Then it executes the console.log(counter()).  Counter() is executed without an argument passed in.  Parameter `count` is assigned to nothing.  5 is returned.

Then variable `counter` is reassigned to 5.  `Rate` is initialized to 3.  

Then we log the string `the total value is ` and turn into a string the expression (5 * 3)`, which returns 15.
*/


//Code Snippet 2

function counter(count) {
  // ...
}

console.log('The total value is ' + String(counter * rate));

var counter = 5;
var rate = 3;

function counter(count) {
  // ...
}

var rate;

console.log('The total value is ' + String(counter * rate));

counter = 5;
rate = 3;

/* In the creation phase, the duplicate var `counter` is ignored because the function has already been declared with that name.  Var `rate` is referencing undefined.

In the execution phase, Javascript reads from top to bottom.  It sees the function declaration.  Then, it logs `The total value is ` plus the string version of (counter * rate).  At this point, `counter` is pointing to a function.  So it returns NaN because a function times undefined is NaN.  Anything times undefined equal to NaN.
*/

// Code Snippet 3

var counter = 5;
var rate = 3;

function counter(count) {
  // ...
}

console.log('The total value is ' + String(counter * rate));

// function counter(count) {
//   // ...
// }

// //var counter
// var rate

// counter = 5;
// rate = 3;

// console.log('The total value is ' + String(counter * rate));

/* In the creation phase, function counter gets hoisted to the top.  Var rate is hoisted just below the function.  Var counter is ignored since it's a duplicate name.  `Var rate` refers to undefined.

Then the execution phase occurs, reading from top to bottom.  Function `counter` is declared.  Rate is assigned to 3.

Then the console logs `The total value is ` (counter * rate) converted to string.  Then counter gets reassigned to 5.  Counter, which is referring 5, is being attempted to multiply with rate, which is pointing to a number.  You get 15.

// Code Snippet 4

// let counter = 5;
// let rate = 3;

// function counter(count) {
//   // ...
// }

// console.log('The total value is ' + String(counter * rate));

function counter(count) {
  // ...
}

//counter is not defined
//rate is not defined


let counter = 5;
let rate = 3;


console.log('The total value is ' + String(counter * rate));

/* In the creation phase, function `counter` gets hoisted to the top.  Variable `counter` and `rate` are hoisted to the top, but below the function declaration, and not defined.  But, then you get a syntax error because you can't declare a variable more than once when one of those times is using `let` or `const`.  The error occurs on `line 4`, during the function declaration, during the creation phase.

Notice that after hoisting, the first and third code snippets are effectively the same. Notice also, that in the first three code snippets, the variable declaration for counter is effectively overwritten by the function declaration with the same name.

The differentiating factor for the second code snippet is the position of the call to console.log relative to the variable assignments; since the assignments happen after the console.log call, the expression counter * rate evaluates to NaN.

You can't declare a variable multiple times when one or more of those declarations use let or const. Since snippet 4 declares counter using let, it raises a SyntaxError. However, the error occurs on line 4 -- the function declaration -- from the original code. Since SyntaxErrors usually occur during the creation phase, hoisting has no direct effect on the behavior. Therefore, we have omitted the hoisted code snippet for snippet 4. The syntax error will occur before hoisting takes place.
*/