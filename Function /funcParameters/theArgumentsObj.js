// The Arguments Object

/*
JavaScript function have a built in object called the arguments object. 

The argument object contains an array of the arguments used when the function was called(invoked).

This way you can simply use a function to find (for instance) the highest value in a list of numbers: 

*/

//Example:

ab = findMax(1,123,500,115,44,88);
function findMax(){
    let max= null; 
    for (let i = 0; i<arguments.length;i++){
        if(arguments[i]>max){
            max = arguments[i];
        }
        
        
        }
        return max;
    
}

console.log(ab);//OUTPUT: 500

/* In HTML

<!DCOTYPE html> 
<html>
<body> 
<h2> JavaScript Functions</h2>
<p> Finding the largest number.</p>
<p  id = "demo"></p> 
<script> 
function findMax(){
let max = -Infinity; 
for(let i = 0; i<arguments.length; i++){
if (arguments[i]>max){
   max = arguments[i];
}
}
return max;
}
document.getElementById("demo").innerHTML = findMax(4,5,6);
</script>
</body>
</html>

=======================================================
============================================================
OUTPUT: 

=============================================
JavaScript Functions

Finding the largest number.

6

*/

// Or create a function to sum all input values: 

//Example: 

x= sumAll(1,123,500,115,44,88);
function sumAll(){

    let sum = 0; 
    for (let i = 0; i<arguments.length;i++){
        sum += arguments[i];

    }
    return sum;
}
console.log(sumAll(x)); //OUTPUT: 871

/*
Arguments are Passed by Value

The parameters, in a function call, are the function's argumetns.

JavaScript arugments are passed by value: The function only gets to know the values, not the argument's locations.

If a function changes an argumnet's value, it does not change the parameter's original value. 

Change to arguments are not visible (reflected) outside the function.
*/


//===================================================
//===================================================

/*
Objects are Passed By Reference 

In JavaScript, object refernces are values. 

Because of this, objects will behave like they are passed by reference: 

If a function changes an object property, it changes the original value.

Changes to object properties are visible(reflected) outside the function.



*/