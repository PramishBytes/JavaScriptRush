// JavaScript Comparison and Logical Operators 

//Comparison and Logical operators are used to test for true or false
/*
Operator	Description	                             Comparing	
==	        equal to	                              x == 8	
                                                      x == 5	
                                                      x == "5"
                                                      S	
===	        equal value and equal type	              x === 5		
                                                      x === "5"	
!=	        not equal	                              x != 8

!==	        not equal value or not equal type	      x !== 5	
                                                      x !== "5"		
                                                      x !== 8	
>	        greater than	                          x > 8	

<	        less than	                              x < 8	

>=	        greater than or equal to	              x >= 8

<=	        less than or equal to	                  x <= 8


*/

//===============================================================


// Example:

/*

<!DOCTYPE html> 
<html> 
<body>
<h2> JavaScript Comparisons </h2>
<p> Input your age and click the button: </p>
<input id ="age" value = "18"/>
<button onclick = "myFunction()"> Try it </button>
<p id = "demo"></p>

<script>
function myFunction(){
let voteable;
let age = 
Number(document.getElementById("age").value);
if (isNaN(age)){
voteable = "Input is not a number";
}else{
voteable = (age<18)?"To young to vote":"Old Enough";
}
document.getElementById("demo").innerHTML = voteable + " to vote";
}
</script>
</body>
</html>

*/
// ==========================================================

// The Nullish Coalescing Operator(??)
//The ?? operator returns the first argument if it is not nullish (null or undefined).

/*
<!DOCTYPE html>
<html>
<body>
<h1> JavaScript Operators</h1>
<h2> The ?? Operator</h2>
<p> The ?? operator returns the first argument 
if it is not nullish (null or undefined). Otherwise it returns the second.
</p>
<p id = "demo"></p>
<script> 
let name = null;
let text = "missing";
let result = name?? text;
document.getElementById("demo").innerHTML = "The name is "+ result;
</script>
</body>
</html>
*/

//====================================================================


// The Optional Chaining Operator(?.)

// The ?. operator returns undefined if an object is undefined or null (instead of throwing an error).

/*
<!DOCTYPE html>
<html>
<body>

<h1> JavaScript Operators</h1>
<h2> The ?. Operator</h2>
<p> The ?. operator returns undefined if an object is 
undefined or null (instead of throwing an error).
</p>

<p>Car name is : </p>
<p id = "demo"></p>

<script>
cosnt car = { type: 'fiat',model:"300",color: "white"};
let name = car?.name;
document.getElementById("demo").innerHTML = name; 
</script>
</body>
</html>
*/

//====================================================
//====================================================







