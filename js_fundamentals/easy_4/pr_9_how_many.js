// How Many
// Write a function that counts the number of occurrences of each element in a given array. Once counted, log each element alongside the number of occurrences.

// Example:

// for (const [key, value] of Object.entries(object1)) {
//   console.log(`${key}: ${value}`);
// }


function countOccurrences(array) {
  let object = {};
  for (let vehicle of array) {
    if (!object[vehicle]) {
      object[vehicle] = 1;
    } else {
      object[vehicle] += 1;
    }
  }
  
  for (const [key, value] of Object.entries(object)) {
    console.log(`${key} => ${value}`);
  }
  return;
}

const vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

console.log(countOccurrences(vehicles));

// console output
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2

function countOccurrences(elements) {
  const occurrences = {};

  for (let i = 0; i < elements.length; i += 1) {
    occurrences[elements[i]] = occurrences[elements[i]] || 0;
    occurrences[elements[i]] += 1;
  }

  logOccurrences(occurrences);
}

function logOccurrences(occurrences) {
  for (let item in occurrences) {
    console.log(`${item} => ${occurrences[item]}`);
  }
}

// Discussion
// The solution uses two functions. The second function, logOccurrences, is more for readability purposes. Its sole use is to log each key: value pair in the format specified by the exercise description.

// The function of interest is countOccurrences. It starts off by initializing an occurrences object. This object holds the results of the counting. The function uses a loop to iterate over each element of the elements array argument. During each iteration, it checks to see if a property, with a key equal to the name of the current vehicle, exists in occurrences. If it does not exist, the function initializes the property to 0. The function then increments the current value of the property by 1. Finally, the function calls logOccurrences to output the desired result.