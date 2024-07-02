//Redeclaring 
// Redeclare a JavaScript variable with var is allowed anywhere in a program:

/*
<!DOCTYPE html>
<html>
<body>
<h2> JavaScript let</h2>
<p> Redeclaring a JavaScript variable with 
<b>var</b> is allowed anywhere in a program: </p>

<p id = "demo"></p>
<script>
var x = 2; 
//Now x is 2 

var x = 3; 
//Now x is 3

document.getElementById('demo').innerHTML =x; 
</script> 
</body>
</html>
*/

//with let,redeclaring a variable in the same block is NOT allowed: 

//example
/*
var x = 2;  //Allowed 
let x= 3;   //NOT allowed

{
let x =2;  //Allowed
let x = 3; //NOT allowed
}

{
let x = 2; //Allowed 
var x = 3; //NOT allowed
}
*/

// ===> Redeclaring a variable with let, in another block , IS allowed:
/*
let x = 2; //Allowed

{
let x =3; //Allowed
}

{
let x =4; //Allowed
}
*/

// Let Hoisting 
/*
Variables defined with var are hoisted to the top and can be inititalized at any time.

Meaning: You can use the variable before it is declared: 
*/
//This is okay
carName = "Mustang";
var carName; 
console.log(carName);