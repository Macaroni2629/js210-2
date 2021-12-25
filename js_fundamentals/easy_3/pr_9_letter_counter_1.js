// Letter Counter Part 2
// Modify the wordSizes function from the previous exercise to exclude non-letters when determining word size. For instance, the word size of "it's" is 3, not 4.

// Examples:

function wordSizes(string) {
  let object = {};
  let arrayOfWords = string.split(' ');
  if (string.length === 0) return {};
  
  arrayOfWords.forEach(word => {
    if (object.hasOwnProperty(word.length)) {
        object[word.length] += 1;
    } else {
       object[word.length] = 1;
    }
  })
  
  
  return object;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}

//

function wordSizes(words) {
  const wordsArray = words.split(' ');
  const count = {};

  for (let i = 0; i < wordsArray.length; i += 1) {
    let wordSize = wordsArray[i].length;
    if (wordSize === 0) {
      continue;
    }

    count[wordSize] = count[wordSize] || 0;
    count[wordSize] += 1;
  }

  return count;
}

// Discussion
// The goal of this exercise is to count the number of words of each size. To do that, the solution first obtains a list of words by splitting the words argument string into an array of words. Computing the size of a word is easy, but incrementing the count for that word size is slightly trickier.

// The solution stores the counts of word sizes as properties of the count object. It does this by iterating over the list of words and performing the following:

// Initialize the wordSize variable to the length of the current word.
// Check if wordSize is equal to 0. If yes, proceed immediately to the next iteration since there is no need to account for words of zero length.
// Initialize the property for the current wordSize in the count object. If the property does not exist (i.e., count[wordSize] evaluates to undefined), set it to 0.
// Increment the count for a particular wordSize by 1.