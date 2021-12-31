// Variable Scope
// What will the following code log to the console and why? Don't run the code until after you have tried to answer.

function someFunction() {
  myVar = 'This is global';
}

someFunction();
console.log(myVar);

// => `This is global`

// This logs 'This is global' because when `someFunction` is invoked, myVar looks in its immediate scope to see if myVar is declared.  It's not.  Then it looks in its global scope.  It's not declared there either.  It makes myVar a property of global object and assigns the value `This is global.`  Thus, when you log myVar, since it's a global variable in the global scope, you get `This is global.`

// Discussion
// Notice that on line 2 there is no variable declaration for myVar (i.e., there is no var keyword before myVar). As a result of this, JavaScript looks in the outer scope for the declaration. Since it doesn't exist, JavaScript binds myVar to be a "property" of the global object. This is "almost" the same as if myVar was globally declared. We will discuss more about why this is "almost"—but not "exactly"—the same in a later course when we cover the global / window object.