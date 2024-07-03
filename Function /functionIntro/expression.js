//Function Expressions 

/*
A JavaScript function can also be defined using an expression.

A function expression can be stored in a variable: 

Example: 
const x = function(a,b){
return a*b
};

After a function expression has been stored in a variable, the variable can be used as a function:

const x = function(a,b){ return a*b};
let z = x(4,3);

=======================================================
In html format: 
================================================
<!DOCTYPE html>
<html>
<body>
<h2> JavaScript Functions</h2>

<p> After a function has been stored in a variable,
the variable can be used as a function: </p>

<p id = "demo"></p>
<script>
const x = function(a,b){return a*b};
document.getElementById("demo").innerHTML = x(4,3);
</script>
</body>
</html>


==============================
OUTPUT: 

JavaScript Functions
After a function has been stored in a variable, the variable can be used as a function:

12
=============================


The function above is actually an anonymous function(a function without a name).

Function stored in variables do not need function names. They are always invoked (called ) using the variable name.

*/
//================================================================
//================================================================

// =======>  The Function() constructor  <======
/*
As you can have seen in the previous example, JavaScript functions are defined with the function keyword.

Function can also be defined with a built-in JavaScript function constructor called Function().

//================================================================

const myFunction = new Function("a","b","return a*b");

let x = myFunction(4,3);

*/