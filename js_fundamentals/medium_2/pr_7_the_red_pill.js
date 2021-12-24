// The Red Pill
// Read through the code below and determine what will be logged. You may refer to the ASCII Table to look up character code values.

function one() {
  function log(result) {
    console.log(result);
  }

  function anotherOne(...args) {
    let result = '';
    for (let i = 0; i < args.length; i += 1) {
      result += String.fromCharCode(args[i]);
    }

    log(result);
  }

  function anotherAnotherOne() {
    console.log(String.fromCharCode(87, 101, 108, 99, 111, 109, 101));
    anotherOne(116, 111);
  }

  anotherAnotherOne();
  anotherOne(116, 104, 101);
  return anotherOne;
}

one()(77, 97, 116, 114, 105, 120, 33);

// Discussion
// The trick to solving this problem is to follow the sequence of function calls. The call to the one function may look confusing, but it is actually just two successive function calls (because the one function returns the anotherOne function). Notice that when the anotherOne function is returned, it still has access to the log function that is declared in its enclosing scope (closure) inside the one function.

// This code has a total of eight function calls:

// 1: one();
// 2: anotherAnotherOne();                         // Welcome
// 3: anotherOne(116, 111);
// 4: log(result);                                 // to
// 5: anotherOne(116, 104, 101);
// 6: log(result);                                 // the
// 7: anotherOne(77, 97, 116, 114, 105, 120, 33);
// 8: log(result);                                 // Matrix!

// Creation phase in the global scope.  Function `one` is declared.  Execution phase.  Invoke one() function.

// Creation phase inside function `one`'s scope.  Creation phase.  Function `log` created.  Function anotherOne created.  Function anotherAnotherOne created.  Execution phase.  Function log declared.  Function anotherOne declared.  Function anotherAnotherOne declared.  anotherAnotherOne function invoked, logs string version/translation of the ASCII value of the number.

// Then, invokes anotherOne method passing in 116 and 111 as arguments.  In anotherOne method, accepts any number of arguments due to rest parameter syntax used in parameter.  Places in array `args`.  Initialize result to empty string.  Iterate over `for` loop, adding to result string the characters that correspond to the ASCII values.  Once it breaks out of the for loop, then logs `result`.

// Then invokes anotherOne method passing in 3 arguments: 116, 104, 101.  Initializes result string to empty array.  Starts a `for` loop.  Adds to string incrementally the corresponding UTF-16 character.  Logs the result.

//returns anotherOne method passed in 0 arguments. So output is empty string.