//TODO JS Loops

//? For Loop

//* Syntax

//for (expression 1; expression 2; expression 3) {
//     code block to be executed
//}

//Expression 1 is executed (one time) before the execution of the code block.
//Expression 2 defines the condition for executing the code block.
//Expression 3 is executed (every time) after the code block has been executed.

//* Example
for (let i = 0; i < 5; i++) {
    text += "The number is " + i + "<br>";
}

//? For In Loop

//* Syntax
for (key in object) {
    // code block to be executed
}

//* Example
const person = {fname:"John", lname:"Doe", age:25};

let text = "";
for (let x in person) {
  text += person[x];
} //The output would be the string "JohnDoe25".

//The for in loop iterates over a person object
//Each iteration returns a key (x)
//The key is used to access the value of the key
//The value of the key is person[x]

//? For In Array Loop

//* Syntax
for (variable in array) {
    //code
}

//* Example
const numbers = [45, 4, 9, 16, 25];

let txt = "";
for (let x in numbers) {
  txt += numbers[x];
} //The output of the given code would be the numbers in the array numbers 
  //concatenated together as a string, the output would be 45491625.

//? Array.forEach()
//* Calls a function once for each array element

//* Example
const numberss = [45, 4, 9, 16, 25];

let txts = "";
numbers.forEach(myFunction);

function myFunction(value, index, array) {
  txt += value;
}

//? For Of Loop
//* Loops over iterable data structures such as Arrays, Strings, Maps, NodeLists, and more

//* Syntax
for (variable of iterable) {
    // code block to be executed
}

//* Looping over array
const cars = ["BMW", "Volvo", "Mini"];

let text1 = "";
for (let x of cars) {
  text += x;
}

//* Looping over string
let language = "JavaScript";

let text2 = "";
for (let x of language) {
text += x;
}

//? While loop
//* loops through a block of code as long as a specified condition is true

//* Syntax
while (condition) {
    // code block to be executed
  }

//* Example
while (i < 10) {
    text += "The number is " + i;
    i++;
  }

//? Do While loop
//* loop will execute the code block once, before checking if the condition is true, 
//* then it will repeat the loop as long as the condition is true

//* Syntax
do {
    // code block to be executed
  }
  while (condition);

//* Example
do {
    text += "The number is " + i;
    i++;
  }
  while (i < 10);