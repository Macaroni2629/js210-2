const myBoolean = true;
const myString = 'hello';
const myArray = [];
const myOtherString = '';

if (myBoolean) {
  console.log('Hello');
}

if (!myString) {
  console.log('World');
}

if (!!myArray) {
  console.log('World');
}

if (myOtherString || myArray) {
  console.log('!');
}

# Conditionals Part 1

# Go over the following program. What does it log to the console at lines 7, 11, 15, and 19? Is it what you expected? Why or why not?


# Line 7: "Hello" because myBoolean is assigned to true, which evaluates to true
# Line 11: because !myString is assigned to string `hello`, so not `hello` evaluates to not true which evaluates to false
# Line 15: "World" because a double bang operator means it wants the truthiness of the original value, which is empty brackets, which evaluates to true
# Line 19: "!" because while myOtherString points to empty string, which evaluates to false, the OR operator then evaluates myArray, which points to empty brackets, which evaluates to true.