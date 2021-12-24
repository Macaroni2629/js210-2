// Length
// Read through the code below. What values will be logged to the console? Can you explain these results?

const languages = ['JavaScript', 'Ruby', 'Python'];
console.log(languages); // ['JavaScript', 'Ruby', 'Python'] logs the array
console.log(languages.length); // 3 there are 3 key value pairs in the array.

languages.length = 4;
console.log(languages); // ['JavaScript', 'Ruby', 'Python', <empty>] the length property made another space for the array, so it placed a space there, but no object inside of index 3.
console.log(languages.length); // 4 because we set the length property to 4, so it made sure there were 4 spaces in the `languages` array

languages.length = 1; 
console.log(languages); // ['Javascript'] because we set length to 1, so Javascript shortened the array until there was only one element in it.
console.log(languages.length); // 1

languages.length = 3;
console.log(languages); // ['Javascript', <empty>, <empty>]
console.log(languages.length); // 3 - we most recently set the length to 3, so the length of the array is still 3.

languages.length = 1; // ['Javascript']
languages[2] = 'Python'; // ['Javascript', <empty>, 'Python']
console.log(languages); // ['Javascript', <empty>, 'Python']
console.log(languages[1]); // undefined
console.log(languages.length); // 3 because we added at index 2 the string Python, so by doing so, it lengthened the entire array to length 3.  It made room for space for an object at index 1 (but it made it undefined).

// The key takeaway for this exercise is that the length property can be explicitly set (recall that arrays are zero-indexed). Setting the length to a value that is less than the current length truncates the array; re-setting the length to a higher value does not bring back the truncated elements. Setting the length to a value greater than the current length creates 'empty slots' in the array, but the number of actual elements does not increase. Furthermore, since the value of the length is always equal to the last index plus 1, adding an element to index 2 of a one-element array changes the array's length to 3, even though the array only has two actual elements (at indices 0 and 2).

// Arrays with 'empty slots' are sometimes referred to as 'sparse arrays'. You may see them represented in a variety of different ways. For example:

const sparseArray = [, , 'a', , 'b'];
console.log(sparseArray);

// logs
[<2 empty items>, 'a', <1 empty item>, 'b']    // Node REPL v8.8.1
[ , , 'a', , 'b']                              // older version of Node
[empty × 2, "a", empty, "b"]                   // Chrome Console v62
[undefined × 2, "a", undefined × 1, "b"]       // older version of Chrome
[<2 empty slots>, "a", <1 empty slot>, "b"]    // Firefox 57.0
