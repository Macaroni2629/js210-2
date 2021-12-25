// Letter Counter Part 2
// Modify the wordSizes function from the previous exercise to exclude non-letters when determining word size. For instance, the word size of "it's" is 3, not 4.

// Examples:

function wordSizes(string) {
  string = string.replace(/[^a-z^' ']/gi, '');
  console.log(string);
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

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?"));                              // { "5": 1, "2": 1, "3": 1 }
console.log(wordSizes(''));                                            // {}

function wordSizes(words) {
  const wordsArray = words.split(' ');
  const count = {};

  for (let i = 0; i < wordsArray.length; i += 1) {
    let cleanWordSize = removeNonLetters(wordsArray[i].toLowerCase()).length;
    if (cleanWordSize === 0) {
      continue;
    }

    count[cleanWordSize] = count[cleanWordSize] || 0;
    count[cleanWordSize] += 1;
  }

  return count;
}

function removeNonLetters(string)  {
  let result = '';

  for (let i = 0; i < string.length; i += 1) {
    if (isLetter(string[i])) {
      result += string[i];
    }
  }

  return result;
}

function isLetter(char) { return char >= 'a' && char <= 'z' }

// Discussion
// The only change this solution makes to the function, is to make sure that it does not count non-letter characters in determining word sizes. It does this by first removing all non-letter characters from each word using the removeNonLetters function. Then it performs the tallying of the word sizes.