// When Will I Retire
// Build a program that logs when the user will retire and how many more years the user has to work until retirement.

// Example:

// What is your age? 30
// At what age would you like to retire? 70

// It's 2017. You will retire in 2057.
// You have only 40 years of work to go!

const rlSync = require('readline-sync');

function retire() {
  let age = rlSync.question('What is your age?');

  age = Number(age);

  let desiredAge = rlSync.question('At what age would you like to retire?');

  desiredAge = Number(desiredAge);

  let numberOfYearsToRetire = desiredAge - age;

  today = new Date();

  let year = Number(today.getFullYear());

  let futureYear = year + numberOfYearsToRetire;

  console.log(`It's ${year}.  You will retire in ${futureYear}.`);
  console.log(`You only have ${numberOfYearsToRetire} years of work to go!`);
}

console.log(retire());
//

const age = parseInt(prompt('What is your age?'), 10);
const retirementAge = parseInt(prompt('At what age would you like to retire?'), 10);

const today = new Date();

const currentYear = today.getFullYear();
const workYearsToGo = retirementAge - age;
const retirementYear = currentYear + workYearsToGo;

console.log(`It's ${currentYear}. You will retire in ${retirementYear}.`);
console.log(`You have only ${workYearsToGo} years of work to go!`);

//

// Discussion
// The solution makes use of the Date object. It uses the Date.prototype.getFullYear method to return the year value of the Date object that was created. Note that there is also Date.prototype.getYear method available in the Date object, which returns a 2-3 digit representation of the year (the getYear method is deprecated, so it's best to avoid using it).

// With the use of the getFullYear method, the solution gets the currentYear. It then computes the value of workYearsToGo by subtracting the current age from the retirementAge. Then to get the retirementYear, it adds the currentYear to the number of workYearsToGo.

// Further Exploration
// What would happen if the new keyword wasn't used in defining the today variable on line 4?
//If you don't use the `new` keyword, then you aren't creating an instance of the Date class.  you are using the Date class method.  It returns a string version of the date, which you can then parse like so:

today = Date()
'Wed Dec 30 2020 18:16:00 GMT-0600 (Central Standard Time)'

thisYear = parseInt(Date().split(' ')[3])
2020

// But what you can't do is use it to call Date.prototype.getFullYear, because that's an instance method. To use instance methods, you have to create an instance of the Date object, and that means using the new keyword.

// All in all, trying to extract pieces of the string returned by calling Date() strikes me as more fragile than creating an instance and using the appropriate instance method. One never knows when the spec will alter the structure of the string that Date() returns.

