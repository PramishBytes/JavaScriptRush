//Functions are Objects

/*
The typeof operator in JavaScript returns "function" for functions

But, in JavaScript functions can best be described as objects. 

JavaScript functions have both properties and methods.

The arguments.length property returns the number of arguments received when the function was invoked. 
*/

function myFunction(a,b){
    return arguments.length;
}

// The toString() method returns the function as a string:

function Myfunction(aa,bb){
  return a*b;
}
let text = Myfunction.toString();

console.log(text);

// The toString() method returns the function as a string:

// function myFunction(a, b) { return a * b; }

//===============================================
//================================================

// A function defined as the property of an object, is called a method to the object.
// A function designed to create new objects, is called an object constructor.