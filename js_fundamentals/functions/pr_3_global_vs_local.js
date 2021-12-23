// Local vs Global Part 3
// What will the following code log to the console and why? Don't run the code until after you have tried to answer.

var myVar = 'This is global';

function someFunction() {
  myVar = 'This is local';
}

someFunction();
console.log(myVar);

// It outputs `This is local` because myVar inside someFunction first looks inside its lexical scope.  It doesn't find that myVar has been declared anywhere with a let, const, or var.  It then looks in the global scope and finds it.  Then it knows that it was initialized in the global scope.

// In contrast to the previous two exercises, this program only has one variable declaration, so there is only one myVar variable instead of two. Therefore, when someFunction is invoked, it reassigns a new string to the global myVar. This is possible because variables in the global scope can be accessed and modified from within an inner scope.