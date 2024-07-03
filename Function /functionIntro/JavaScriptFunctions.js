//JavaScript Functions 

//Syntax: 
/*
A JavaScript function is defined with the function keyword,followed by a name, followed by parentheses().

Function names can contain letters,digits,underscores, and dollar signs(same rules as variables).

The parentheses may include parameter names separated by commas: 
(parameter1, parameter2,....)

The code to be executed, by the function is placed inside curly brackets{}


function name(parameter1,parameter2,parameter3){
//code to be executed
}
*/

//============================================================================
//================================================================

/*
Function parameters are listed inside the parentheses() in the function definition .

Function arguments are the values received by the function when it is invoked.

Inside the function, the arguments(the parameters)behave as local variables.

*/

//================================================================
//================================================================

// Function Invocations
/*
The code inside the function will execute when "something" invokes (calls) the function: 

When an event occurs(when a user clicks a button)
When it is invoked (called ) from JavaScript code 
Automatically (self invoked)

================================================================

Function Return
When JavaScript reaches a return statement, the function will stop executing.

If the function was invoked from a statement, JavaScript will "return" to execute the code after the invoking statement.

Function often compute a return value. The return value is "returned" back to the "caller"

=> Example: 

let x =myFunction(4,5);

function myFunction(a,b){

// Function returns the product of a and b
return a*b;
}

full code with html:
<!DOCTYPE html>
<html>
<body>
<h1> JavaScript Functions</h1>
<p> Call a function which performs a calculation and returns the result: </p>
<p id = "demo"></p>

<script> 
let x = myFunction(4,5);
document.getElementById("demo").innerHTML = x;

function myFunction(a,b){
return a*b;
}
</script>
</body>
</html>

================================================
Output: 
================================================
JavaScript Functions

Call a function which performs a calculation and returns the result:

20

*/

//=====================================================
//=====================================================

//Why Functions? 

/*
With function you can reuse code.

You can write code that can be used many times

You can use the same code with different arguments, to produce different results.

*/

// The () Operator
//The () operator invokes (calls) the function: 

function toCelsius(fahrenheit){
    return (5/9)*(fahrenheit -32);

}
let value = toCelsius(77);
console.log(value);


//OUTPUT: 25


// Accessing a function with incorrect parameters can result an incorrect answer:
function tocel(fh){
    return (5/9)*(fh-32);
}
let val = tocel();
console.log(val);


//OUTPUT: NaN


//Accessing a function without() returns the function and not the function result; 
function toCel(Fahrenheit){
    return (5/9)*(Fahrenheit - 32);

}
let Value = toCel;
console.log(toCel);

//[Function: toCel]

// Note: As you see from the example above, toCel refers to the function object, and tocel() refers to the function result.

//================================================================
//=================================================================

//Function Used as Variable Values

//Function can be used the same way as you use variables, in all types of formulas, assignments, and calculations.

let x= toCelsius(99);
let text = "The temperature is " + x + "Celsius";

//You can use the function directly, as a variable value:

let ok = "The temperature is "+ toCelsius(66)+"Celsius";

console.log(ok);
console.log(text);

//OUTPUT: 
/*
The temperature is 18.88888888888889Celsius
The temperature is 37.22222222222222Celsius
*/

//====================================================
//===================================================



//Local Variables
/*
Variables declared within a JavaScript function, become LOCAL to the function.

local variables can only be accessed from within the function .

*/

//code here can not use carName
function myFunction(){
    let carName = "volvo";
// code here can use carname
}
// code here can not use carname

/*
<!DOCTYPE html>
<html>
<body>
<h1> JavaScript Functions</h1>

<p> Outside myFunction() carName is undefined.</p>
<p id = "demo1"></p>
<p id = "demo2"></p>

<script>
let text = "Outside: "+ typeof carName;

document.getElementById("demo1").innerHTML = text;

function myFunction(){
let carName="Mustang";
let text = "Inside: "+ typeof carName + " " +carName;
document.getElementById("demo2").innerHTML = text;
}
myFunction();
</script>
</body>
</html>

=============================================================
================================================================
Output: 

JavaScript Functions

Outside myFunction() carName is undefined.

Outside: undefined

Inside: string Mustang

*/

/*
Since local variable are only recognized inside their function, variables with the same name can be used in different 
functions.

Local variables are created when a function starts, and deleted when the function is completed
*/


