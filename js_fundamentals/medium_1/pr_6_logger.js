// Logger
// Read through the following code. Why will it log 'debugging'?

// Logger
// Read through the following code. Why will it log 'debugging'?

// function debugIt() {
//   const status = 'debugging';
//   function logger() {
//     console.log(status);
//   }

//   logger();
// }

// debugIt();

function debugIt() {
  
  function logger() {
    console.log(status);
  }
  //const status
  
  status = 'debugging';
  

  logger();
}

debugIt();

/* In the creation phase, we declare function `debugIt`.  Then we execute the global scope.  We declare function `debugIt` and then invoke the function debugit.  

Then we start a creation phase inside the debugit function's cope.  We hoist function `logger` to the top.  We create a const `status`.  Then we execute.  We declare function `logger`.  We initalize const `status` to not defined.  Then we assign `status` to `debugging`.

Then we invoke the `logger` function.  Inside the `logger` function, we log what `status` is referring to.  Status looks inside its lexical scope, which is inside the `logger` function.  It doesn't find it.  Then it looks in its outer scope, which is the debugIt scope.  It finds status has been assigned to `debugging` and logs it.

*/