//Invoking a function with a funtion constructor

/*
If a function invocation is preceded with the new keyword, it is constructor invocation.

It looks like you create a new function, but since JavaScript functions are objects you actually create a new object:
*/

//=>Example: 

//This is a function constructor:

function myFunction(arg1 , arg2){

this.firstName =arg1;
this.lastName = arg2; 
}
//This creates a new object 

const myObj = new myFunction("Pramish","Adhikari");

// this will return Pramish
console.log(myObj.firstName);

//IN HTML
/*
<!DOCTYPE html>
<html>
<body>
<h2> JavaScript Functions</h2>
<p>In this example, myFunction is a function constructor: </p>
<p id ="demo"></p>

<script>
function myFunction(arg1,arg2){
this.firstName = arg1;
this.lastName = arg2;
}
const myObj = new myFunction("Pramish","Adhikari")
document.getElementById("demo").innerHTML = myObj.firstName;
</script>
</body>
</html>
*/