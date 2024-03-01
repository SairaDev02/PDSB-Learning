//TODO JS Break

//? The break statement can also be used to jump out of a loop or switch statement

//* Example
for (let i = 0; i < 10; i++) {
    if (i === 3) { break; }
    text += "The number is " + i + "<br>";
  }

//? Continue: breaks one iteration (in the loop), 
//? if a specified condition occurs, and continues with the next iteration in the loop

//* Example
for (let i = 0; i < 10; i++) {
    if (i === 3) { continue; }
    text += "The number is " + i + "<br>";
  }

//? JS Labels
//* precede the statements with a label name and a colon

//* Syntax
label: statements

//* break labelname;

//* continue labelname;