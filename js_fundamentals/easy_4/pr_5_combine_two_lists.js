// Combine Two Lists
// Write a function that combines two arrays passed as arguments, and returns a new array that contains all elements from both array arguments, with each element taken in alternation.

// You may assume that both input arrays are non-empty, and that they have the same number of elements.

// Example:

function interleave(array1, array2) {
  let answer = [];
  
  for (let i = 0; i < array1.length; i++) {
    answer.push(array1[i]);
    answer.push(array2[i]);
  }
  return answer;
}

console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]