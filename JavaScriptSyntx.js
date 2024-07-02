// JavaScript Syntax

// JavaScript syntax is the set of rules, how JavaScript programs are constructed: 

var x;
let y;

//How to use variables

x= 5;
y=6
let z= x+y;
console.log(z);

//JavaScript Values

/*
JavaScript Values: 

The JavaScript syntax defines two types of values: 

-> Fixes values
-> Variable values

Fixed values are called Literals. 
Variable values are called Variables.
*/

/*
JavaScript Literals 

The two most important syntax rules for fixed values are: 

1. Numbers are written with or without decimals: 

10.50
1001

*/

/*
<!DOCTYPE html>
<html>
<body>
<h2> JavaScript Numbers</h2>
<p> Numbers can be written with or without decimals.</p>
<script>
document.getElementById('demo).innerHTML = 10.50;
</script>
</body>
</html>
*/


//2. Strings are text, written with double or single quotes:

/*
<!DOCTYPE html>
<html>
<body>
<h2> JavaScript Strings</h2>
<p> Strings can be written with double or single quotes.</p>
<p id = "demo"></p>
<script>
document.getElementById('demo').innerHTML = "Hello Pramish";
</script>
</body>
</html>
*/

//JavaScript Variables

/*
In a programming language, variables are used to store data values.

JavaScript uses the keywords var,let and const to declare variables.

An equal sign is used to assign values to variable.

In this example, x is defined as a variable. The, x is assigned (given) the value 6:
*/

/*
<!DOCTYPE html>
<html>
<body>
<h2> Assigning Variable</h2>
<p id = "demo"></p>
<script>
let x; 
x= 6;
document.getElementById("demo").innerHTML = X; 
</script>
</body>
</html>
*/


//--------------------------------------------
//JavaScript OPERATORS

//JavaScript uses arithmetic operators(+,-,*,/) to compute values: 

console.log((5+6)*10);

//JavaScript uses an assignment operator (=) to assign values to variables: 

let yx,xy;
yx= 5; 
xy= 5; 
if(yx == xy){
    console.log("value are equal");
}

//OUTPUT: Value are equal

//-------------------------------------
//JAVASCRIPT EXPRESSIONS 

/*
An expression is a combination of values,variables and operators, which computes to a value.

The computation is called an evaluation.

For example, 5*10 evalutes to 50:

*/

/*
<!DOCTYPE html>
<html>
<body>
<h2> JavaScript Expressions </h2> 
<p id = "dmeo"></p>

<script>
document.getElementById("demo").innerHTML = 5*10;

</script> 
</body>
</html>
*/

// The vlaues can be various types, such as numbers,and strings
// For example, "Pramish"+ " " + "Adhikari", evaluates to "Pramish Adhikari":

console.log("Pramish" + " " +"Adhikari");

// -------------------
//JavaScript Keywords

//JavaScript keywords are used to identify actions to be performed.
//-----------------
//------------------

// The let keyword tell the browser to create variables: 

let a, b;
a= 6+5;
b=a*50;
console.log(a+b);

//OUTPUT: 561

// The var keyword also tells the browser to create variables: 

var ab,cd; 
ab = 5+10;
cd = ab+50;
console.log(ab+cd);



