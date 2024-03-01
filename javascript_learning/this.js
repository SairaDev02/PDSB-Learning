//TODO JS this keyword

//? this: refers to an object, can refer to different objects

//? this in a method
const person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
};

//? this as a global object
let x = this;

//? this in a function
function myFunction() {
    return this;
}

//? this in event handlers
/*
*<button onclick="this.style.display='none'">
*  Click to Remove Me!
*</button>
*/