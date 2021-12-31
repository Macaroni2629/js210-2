// Arguments Part 2
// What will the following code log to the console and why? Don't run the code until after you have tried to answer.

// let a = 7;

// function myValue(a) {
//   a += 10;
// }

// myValue(a);
// console.log(a);

function myValue(a) {
  a += 10;
}

let a = 7;

myValue(a);
console.log(a);

// In the creation phase, function myValue gets hoisted to the top. Variable `a` is not defined.  Then the execution phase happens.  

// myValue(a) is invoked, passing `a` as an argument to `myValue`.  Then `a` which is the parameter of `myValue` gets assigned to value 7.  Then inside the body of function `myValue`, a += 10 is evaluated as a = 7 + 10 which equals 17.

// Then we console.log(a), and we get 7 because the `a` in the global scope is different from the `a` which is the parameter of the function `myValue`.  Variable shadowing occurred.  

// Discussion
// As with the previous exercise, Arguments Part 1, the code logs 7 to the console. The main difference is that this code demonstrates the concept of variable shadowing. In JavaScript, when an argument is passed to a function, a local variable with the same name as the corresponding parameter is created within the inner scope of the function. Therefore, there are two variables named a that exist in this program: one in the global scope and the other in the function's local scope. Therefore, the reassignment of the local variable a within the function has no effect on the global variable a.