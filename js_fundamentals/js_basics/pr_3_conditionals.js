// Conditionals Part 2
// One of the ways to manage the flow of a program is through the use of conditionals. Go over the code below and specify how many unique execution paths are possible.

if (condition1) {
  // ...
  if (condition2) {
    // ...
  } else {
    // ...
  }
} else {
  // ...
  if (condition4) {
    // ...
    if (condition5) {
    // ...
    }
  }
}

if (condition1) {
  // a
  if (condition2) {
    // b
  } else {
    // c
  }
} else {
  // d
  if (condition4) {
    // e
    if (condition5) {
    // f
    }
  }
}

1. a, b
2. a, c

3. d, e, f
4. d, e
5. d