// Invoking Function as a Function 

function Myfunction(a,b){
    return a*b;
}
c= Myfunction(10,2); //OUTPUT: 20
console.log(c);
/*
Note:

The function above does not belong to any object. But in JavaScript there is always a default global object. 

In Html the default global object is the HTML page itself, so the function above  'belongs' to the HTML page.

In a browser the page object is the browser window. The function above automatically becomes a window function.
*/

/// IN HTML form
/*
<!DOCTYPE html>
<body> 
<h2> JavaScript Functions</h2>
<p> The global function (myFunction) returns the product of the argument(a,b):</p>

<p id ="demo"></p>

<script> 
function myFunction(a,b){
 return a*b;
}
 document.getElementById("demo").innerHTML=myFunction(10,2);
 </script>
 </body>
 </html>
*/


//=> myFunction() and window.myFunction() is the same function: 

// function myFunction(aa,bb){
//     return aa*bb;
//     }
//     window.myFunction(10,2); //OUTPUT: 20