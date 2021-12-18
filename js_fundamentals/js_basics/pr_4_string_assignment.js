// String Assignment

let name = 'Bob';
const saveName = name;
name = 'Alice';
console.log(name, saveName);

// What does this code log to the console? Think about it for a moment before continuing.

// If you said that this code logged:

// Alice Bob

// you would be 100% correct, and the answer should come as no surprise. Now let's look at something slightly different:

const name = 'Bob';
const saveName = name;
name.toUpperCase();
console.log(name, saveName);

//What does this code log? Can you explain these results?

// Bob Bob because in Javascript, strings are primitive and therefore immutable.  

// Further Exploration
// If you take another look at the code, you'll notice that on line 3, the string referenced by the name variable calls the String.prototype.toUpperCase method. How is it possible that even though this string is a primitive, it's still able to call a method?

// Further exploration
// The way that primitives call methods is that each primitive has an associated object that wraps it, and the methods are actually invoked on that object. The MDN doc says this about how string primitives interact with their object types:

// JavaScript automatically converts primitives to String objects, so that it's possible to use String object methods for primitive strings. In contexts where a method is to be invoked on a primitive string or a property lookup occurs, JavaScript will automatically wrap the string primitive and call the method or perform the property lookup.

// This:

// console.log('Bob'.toUpperCase()); // BOB
// is equivalent to this:

// console.log(new String('Bob').toUpperCase()); // BOB
// With the call to toUpperCase(), the primitive string 'Bob' is passed to the String object wrapper, which then passes it internally to toUpperCase().

