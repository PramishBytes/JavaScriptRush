//Re-Declaring JavaScript Variales 

/*
If you re-declare a JavaScript variable declared with var, it will not losr its value. 

The variable carName will still have the value "Mustang" after the execution of these statements: 
*/

var carName = "Mustang"; 
var carName;
console.log(carName);

// In html format

/*
<!DOCTYPE html> 
<html> 
<body> 
<h1> JavaScript Variables</h1>
<p> If you re-declare a JavaScript variable, it will not lose its value.</p>
<p id = "demo"></p>
<script>
var carName = "Mustang";
var carName ; 
document.getElementById("demo").innerHTML = carName; 
</script> 
</body> 
</html>
*/

/* Note: You cannot re-declare a variable with let or const.

This will not work: 

let carName ="Mustang";
let carName;

*/
