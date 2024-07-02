//JavaScript Data Types 

/* 
JavaScript Data Types 

JavaScript variables can hold numbers like 100 and text values like "Pramish Adhikari".

In programming, text values are called text strings.

JavaScript can hondle many types of daa, but for now , just think of numbers and strings.

String are written inside double or single quotes. Numbers are written without quotes. 

If you put a number in quotes, it will be treated as a text string. 
*/


//-------------
//Example
//--------------


/*
<!DOCTYPE html> 
<html> 
<body> 
<h1> JavaScript Variables</h1> 

<p> Strings are written with quotes.</p> 
<p> Numbers are written without quotes.</p> 

<p id = "demo"></p>

<script> 

const pi = 3.14; 
let person = "Pramish Adhikari"; 
let answer = ' Yes I am hero';

document.getElementById("demo").innerHTML = pi + "<br>" + person + "<br>"+answer; 
</script> 
</body> 
</html>

*/

//------------


//Declaring a JavaScript variable 

// Creating a variable in JavaScript is called "declaring" a variable. 

// You declare a JavaScript variable with the var or the let keyword: 

// var carName;

// //or

// let carName;

/*
After the declaration, the variable has no value(technically it is undefined).

To assign a value to the variable, use the equal sign : 
*/

// carName = "Mustang";

//You can also assign a value to the variable when you declare it:

let carName = "Mustang";


console.log(carName);


// In the example below, we create a variable called carName and assign the valuue "Mustang" to it.

// Then we "output" the value inside an HTML paragraph with id = 'demo'

/*
<!DOCTYPE html>
<html> 
<body> 
<h1> JavaScript Variables</h1>

<p> Create a variable, assign a value to it, and display it: </p>

<p id = 'demo'></p>
<script>
let carName = "Mustang";
document.getElementById('demo').innerHTML = carName; 
</script> 
</body> 
</html>
*/


