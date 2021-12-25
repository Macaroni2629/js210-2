// Combining Arrays
// Write a function that takes two arrays as arguments and returns an array containing the union of the values from the two. There should be no duplication of values in the returned array, even if there are duplicates in the original arrays. You may assume that both arguments will always be arrays.

// Example:

function union(arr1, arr2) {
  let answer = [];
  
  arr1.forEach(number => {
    if (!answer.includes(number)) {
      answer.push(number);
    }
  });
  
  arr2.forEach(number => {
    if (!answer.includes(number)) {
      answer.push(number);
    }
  })
  
  return answer;
}

console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]

//
function copyNonDupsTo(resultArray, array) {
  array.forEach(value => {
    if (!resultArray.includes(value)) {
      resultArray.push(value);
    }
  });
}

function union(array1, array2) {
  const newArray = [];
  copyNonDupsTo(newArray, array1);
  copyNonDupsTo(newArray, array2);
  return newArray;
}
//
function copyNonDupsTo(resultArray, array) {
  array.forEach(value => {
    if (!resultArray.includes(value)) {
      resultArray.push(value);
    }
  });
}

function union(...args) {
  const newArray = [];

  args.forEach(value => copyNonDupsTo(newArray, value));

  return newArray;
}

// Discussion
// Both of these solutions use the copyNonDupsTo function to copy elements from an array to a result array, without duplication. The two versions are identical. The function loops through the array it is copying, and appends each element to the result array, but only if that element is not already there.

// Solution 1 adheres strictly to the exercise description, and constructs a new array from the two argument arrays. We simply call copyNonDupsTo for each of the two arrays.

// Solution 2 provides a more general solution to the problem: it works properly with two array arguments, but also works with only one array, or with three or more arrays. To accomplish this, it makes use of the args rest parameter. The function simply iterates over the args array, and calls copyNonDupsTo for each element.