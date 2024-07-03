//Arrow Functions '==>'

/*
Arrow functions allows a short syntac for writing a function expressions.

You don't need the function keyword, the return keyword, and the curly brackets.


*/

//ES5 
var x = function(x,y){
    return x*y;
}

//ES6 
const xx = (xx,yy)=> xx*yy;

// In html form 

/*
<!DOCTYPE html> 
<html>
<body> 
<h2> JavaScript Arrow Functions</h2>
<p> With arrow functions, you don't have to type the function keyword,
the return keyword, and the curly brackets. </p>

<p id ="demo"></p>

<script> 
const x = (x,y) => x*y;
document.getElementById("demo").innerHTML = x(5,5);
</script>
</body>
</html>
*/

//===========================================
//===========================================

/*
Arrow functions do not have their own this. They are not well suited for defining object methods

Arrow functions are not hoisted. They must be defined before they are used.

Using const is safer than using var, because a function expression is always constant value.

You can only omit the return keyword and the  curly brackets if the functions is a single statement. Because of this, it might 
be a good habit to always keep them: 

*/

const ab=(xy,yz)=> {return xy*yz};