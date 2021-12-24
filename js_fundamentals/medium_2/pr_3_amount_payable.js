// Amount Payable
// What does the following code log? Why is this so?

// let startingBalance = 1;
// const chicken = 5;
// const chickenQuantity = 7;

// function totalPayable(item, quantity) {
//   return startingBalance + (item * quantity);
// }

// startingBalance = 5;
// console.log(totalPayable(chicken, chickenQuantity));

// startingBalance = 10;
// console.log(totalPayable(chicken, chickenQuantity));

function totalPayable(item, quantity) {
  return startingBalance + (item * quantity);
}

let startingBalance;
const chicken;
const chickenQuantity;

startingBalance = 1;
chicken = 5;
chickenQuantity = 7;

startingBalance = 5;
console.log(totalPayable(chicken, chickenQuantity));

startingBalance = 10;
console.log(totalPayable(chicken, chickenQuantity));

// In the creation phase, we declare function `totalPayable.`  Then startingBalance is initialized and not defined.  const chicken is initialized and not defined.  const chickenQuantity is initialized and not defined.

// Then the execution phase starts.  We declare function `totalPayable`.  Then variables startingBalance, chicken, and chickenQuantity are assigned to 1, 5, and 7.

// Then startingBalance is reassigned to 5.  Then we log totalPayable and pass in chicken and chickenQuantity, referring to 5 and 7.  We return 5 + (5 * 7) which is 40.

// Then we reassign startingBalance to 10.  We log totalPayable, passing in 5 and 7 again.  We return 10 + (5 * 7) which equals 45.

// Solution
// This code logs 40 and 45.

// Discussion
// You may want to review the concept of closures. Closures have functions "retain access" to variables defined in an "enclosing scope". In the code above, the enclosing scope is the global (window) scope containing the variables startingBalance, chicken, and chickenQuantity. Retaining access means that a variable's value is not fixed at the time when the function is defined or first executed. Instead, the variable's value is dynamically looked up each time the function is called. Therefore, the value of startingBalance on line 6 is not 1; instead, the value is a reference to the value stored in the startingBalance variable in the global scope.

// As a result of how closures work, the first time the totalPayable function is called, the value of startingBalance is 5; the second time the function is called, the value of startingBalance is 10.