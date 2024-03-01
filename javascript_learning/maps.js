//TODO JS Maps

//? A map holds key-value pairs where keys can be any datatype,
//? It remembers the original insertion order of the keys

//? Creating a map with new Map() method
// Create a Map
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);

//? Add elements to map with set() method
// Create a Map
const fruits1 = new Map();

// Set Map Values
fruits.set("apples", 500);
fruits.set("bananas", 300);
fruits.set("oranges", 200);

//? Getting the value of a key in a map
fruits.get("apples");    // Returns 500

//? Returning the number of elements in a map
fruits.size;

//? Removing a map element
fruits.delete("apples");

//? Returns true if a key exists in a Map
fruits.has("apples");

//? Calls a function for each key/value pair in a Map
// List all entries
let text11 = "";
fruits.forEach (function(value, key) {
  text += key + ' = ' + value;
})

//? Returning an iterator object with the [key, values] in a Map
// List all entries
let text12 = "";
for (const x of fruits.entries()) {
  text += x;
}