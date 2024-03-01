//TODO JS Sets

//? Sets: A JavaScript Set is a collection of unique values

//? Creating a set
const letters = new Set(["a","b","c"]);

//? Creating and adding variables to the set
// Create a Set
const letters1 = new Set();

// Create Variables
const a = "a";
const b = "b";
const c = "c";

// Add Variables to the Set
letters.add(a);
letters.add(b);
letters.add(c);

//? Add() method
letters.add("d");
letters.add("e");

//? forEach() Method
//* Calls a function for each Set element

//* Example
// Create a Set
const letters2 = new Set(["a","b","c"]);

// List all Elements
let text = "";
letters.forEach (function(value) {
  text += value;
})

//? values() Method
//* returns a new iterator object containing all the values in a Set

//* Example
// List all Elements
let text3 = "";
for (const x of letters.values()) {
  text += x;
}