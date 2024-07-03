// Default Parameters

/*
Default Prameters 

If a function is called with missing arguments(less than declared), the missing values are set to undefined.

Sometimes this is acceptable, but sometimes it is better to assign a default value to the parameter: 

*/

//Example: 


function myFunction(x,y){
    if (y=== undefined){
        y=2;
    }
}
/*
<!DOCTYPE html> 
<html>
<body>

<p> Setting a default value to a function parameter. 

<p id ="demo"></p>

<script> 
function myFunction(x,y){
if (y===undefined){
y=2;
}
return x*y;
}
document.getElementById("demo").innerHTML = myFunction(4);

</script> 
</body>
</html>
*/
//===================================================
//===================================================

//Defualt Parameter Values: 

//ES5 allows function parameters to have default values.

// Example: If y is not passed or undefined, then yy= 10

function Myfunction(xx,yy=10){
    return xx+yy;
}
console.log(Myfunction(5));

//OUTPUT: 15

