//JAVASCRIPT VARIABLES

/*
Variables are containers for storing Data

JavaScript variables can be declared in 4 ways: 

-> Automatically 
-> Using var
-> Using let
-> Using const

*/

//--------------------------

//--------------------------

//variales are automatically declared when first used: 

x = 5; 
y= 6; 
z = x+y; 
console.log(z);

//NOTE: It is considered good programming practice to always declare variable before use. 

// Example using var 

var x =5; 
var y = 40; 
var x = z+y;
console.log(z);

/*
Note: 
The var keyword was used in all JavaScript code from 1995 to 2015

The let and const keyword were added to JavaScript in 2015.

The var keyword should only be used in code written for older browsers.

*/

//Examples using let 
let a =5; 
let xy= 8; 
let yz = a+xy;
console.log(yz);

//Example using const 

const ab= 5; 
const ub = 100;
const xz = ab+ub;
console.log(xz);


// Mixed Example 

const price1 = 5; 
const price2 = 40 ;
let total= price1+price2;
console.log(total);


/* When to USE var,let, or const?
1. Always declare variables 
2. Always use const if the value should not be changed. 
3. Always use const if the type should not be changed (Array and Objects)
4. Only use let if you can't use const
5. Only use var if you MUST support old browsers. 
*/

