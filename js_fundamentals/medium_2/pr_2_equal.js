// Equal
// Read through the following code. Currently, it does not log the expected result. Explain why this happens, then refactor the code so that it works as expected.

// const person = { name: 'Victor' };
// const otherPerson = { name: 'Victor' };

// console.log(person === otherPerson);    // false -- expected: true

// === Checks that they are the exact same object.  The person originally writing code expecting that it would check their values.

const person = { name: 'Victor'};
const otherPerson = person;

console.log(person === otherPerson);

// This code can be fixed by making sure that the two variables reference the same object instead of two different objects with the same properties.

// In JavaScript, every object literal creates a new object. When this object is assigned to a variable, a reference to the object is stored in that variable. In the example above, the only way to ensure that the two variables compare equally is to have them reference the same object.