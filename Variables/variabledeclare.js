// this is continuation of declaring variables in break down form 


//One Statement, Many Variables

// You can declare many variables in one statement. 
// Start the statement with let and separate the variables by comma: 

let person ="Pramish Adhikari", carName = "Mustang",price = 200000000000;
console.log(person +"\n"+ carName+"\n"+price);

// In HTML

/*
<!DOCTYPE html> 
<html> 
<body> 
<h1> JavaScript Variables </h1>
<p> You can declare many variables in one statement. </p>
<p id = "demo"></p>
<script> 
let person = "Pramish Adhikari", carName = "Mustang",price = 200000000000;
document.getElementById("demo").innerHTML  = carName; 
</script> 
</body> 
</html>
*/

//Value = undefined 
/* 
In computer programs, variables are often a value. The value can be something that has to be calculated, or something that will be provided later, like user input. 

A variable declared without a value will have the value undefined. 

The variable carName will have the value undefined and the execution of this statement: 
*/



/* 
<!DOCTYPE html> 
<html> 
<body> 

<h1> JavaScript Variables</h1> 
<p> A variable without a value has the value of : </p>

<p id ="demo"></p>

<script> 
let carName; 
document.getElementById("demo").innerHTML = carName; 
</script> 
</body> 
</html>
*/

// // OUTPUT: JavaScript Variables
// A variable without a value has the value of :

// undefined