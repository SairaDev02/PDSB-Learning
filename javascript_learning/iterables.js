//TODO JS Iterables

//? Iterating: looping over a sequence of elements

//? Iterating over a set

//* Example
const letters = new Set(["a","b","c"]);

for (const x of letters) {
  // code block to be executed
}

//? Iterating over a map
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);
  
  for (const x of fruits) {
    // code block to be executed
  }