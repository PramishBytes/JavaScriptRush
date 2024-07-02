//JavaScript Let

/*
The let keyword was introduced in ES6(2015)

Variable declared with let have Block Scope

Variable declared with let must be Declared before use 

Variable declared with let cannot be Redeclared in the same scope 

*/

//-----------------------------------------
//Block Scope 

/*
Before ES6(2015), JavaScript did not have Block Scope.
JavaScript had Global Scope and Function Scope. 

ES6 introduced the two new JavaScript keywords: let and const. 

These two keywords provided Block Scope in JavaScript: 
*/

// Variables declared inside a {} block cannot be accessed from outside the block:

/*

{
let x = 3;
}

// x cannot be used here
*/

//Global Scope
/*
Variables declared with the var always have Global Scope

Variables declared with the var keyword can NOT have block scope: 

*/

/*
{
var x =2; 

}
// x can be used here
*/


//Cannot be Redeclared 

/*
Variables defined with let can not be redeclared.
You can not accidentally redeclare a variable with let.
*/


//--------
//with let you can not do this: 

/*
let x = "Pramish Adhikari";

let x = 0;

*/

//====================
// Variables defined with var can be redeclared
//With var you cna do this: 

var x = "Pramish Adhikari";
var x = 0;
console.log(x);

