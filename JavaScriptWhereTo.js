// JavaScript Where To 


// The <script> Tag
/*
In HTML, JavaScript code is inserted between <script> and </script> tags.

<!DOCTYPE html>
<html>
<body> 
<h2> JavaScript in Body</h2>
<p id ="demo"></p>
<script> 
document.getElementById("demo").innerHTML = "Pramish is really coding first JavaScript";
</script>
<body>
</body>
*/

//JavaScript Functions and Events 

/* 
A JavaScript function is a block of JavaScript code, that can be executed when "called"for.
For example, a function can be called when an event occurs, like when the user clicks a button .
*/

// JavaScript in <head> 
/*
In this example, a JavaScript function is placed in the <head> section of an HTML page. 
The function is invoked (called )when a button is clicked:

Example:

<!DOCTYPE html>
<html>
<head>
<script>
function myFunction(){
document.getElementById("demo").innerHTML = "Paragraph changed.";
}
</script>
</head>
<body>
<h2> Demo JavaScript in Head</h2>
<p id ="demo"> A Paragraph</p>
<button type = "button" onclick = "myFunction()"> Try it </button>
</body>
</html>
*/

//JavaScript in <body> 
/*
In this example, a JavaScript function is placed in the <body> section of an HTML page.
The function is invoked (called) when a button is clicked






<!DOCTYPE html>
<html>
<body>
<h2> Demo JavaScript in Body</h2>
<p id ="demo"> A Paragraph</p>

<button type = "button" onclick = "myFunction()">Try it</button>
<script>
funtion myFunction(){
document.getElementById("demo").innerHTML= "Paragraph changed.";

}
</script>
</body>
</html>

*/

// EXTERNAL JavaScript 
/*
Scripts can also be placed in external files: 

function myFunction(){
document.getElementById("demo").innerHTML= "Paragraph changed.";
}

*/



/* External scripts are practical when the same code is used in many different web pages.
JavaScript files have the file extension .js
To use an external script, put the name of the script in thse src(source) attribute of a <script>
*/

/*

<!DOCTYPE html>
<body>
<h2> Demo External JavaScript</h2>
<p id = "demo"> A Paragraph.</p>
<button type  = "button"
onclick - "myFunction()"> Try it </button>
<p> This is example links to "myScript.js"</p>
<p>(myFunction is stored in "myScript.js")
</p>
<script src = "myScript.js"></script>
</body>
</html>
*/


// You can place an external script reference in <head> or <body> as you like. 
// The script will behave as if it was located exactly where the <script> tag is located.
//External scripts cannot contain <script> tags.

/*
External JavaScript Advantages
Placing scripts in external files has some advantages: 

-> It separates HTML and code 
-> It makes HTML and JavaScript easier to read and maitain
-> Cached JavaScript files can speed up page loads

Example
<script src  = "myScript1.js"></script>
<script src = "myScript2.js"></script>
*/

//External References 

/*
An external script can be referenced in 3 different ways: 
-> With a full URL (a full web address)
-> With a file path(like /js/)
-> Without any path
*/

/*

<!DOCTYPE html>
<html>
<body>
<h2> External JavaScript</h2>
<p id = "demo"> A paragraph </p>
<button type= "button"
onclick= "myFuntion()"> Click me! </button>
<p> This example uses a full web URL to link to "mySCript.js"</p>
<p>(myFunction is stored in "myScript.js")</p>
<script
src = "https://www.w3schools.com/js/myScript.js">
</script>
</body>
</html>
*/

// This example uses a file path to link to myScript.js: -> <script src ="js/myScript.js"></script>

/*
<!DCOTYPE html> 
<html>
<body> 
<h2> External JavaScript</h2>
<p id = "demo"> A Paragraph.</p> 
<button type = "button" 
onclick ="myFunction()"> Try it</button> 
<p> This is example uses a file path to link to "myScript.js".</p>
<p> (myFunction is stored in "myScript.js")</p>
<script src = "/js/myScript.js"></script>
</body>
</html>
*/

// This example uses no path to link to myScript.js: 
/* 
<!DOCTYPE html> 
<html>
<h2> Demo External JavaScript</h2>
<p id = "demo"> A Paragraph</p>
<button type = "button"
onclick = "myFunction()"> Try it </button> 
<p> This example links to "myScript.js"</p>
<p>(myFunction is stored in "myScript.js")
</p>
<script src = "myScript.js"></script> 
</body>
</html>

*/