// JavaScript Function Call()

//Methid Reuse
/*
With the call() method, you can write a method that can be used on different objects.

All Function are Methods

-> In JavaScript all functions are object methods.

-> If a function is not method of a JavaScript object, it is a function of the global object

-> The example below creates an object with 3 properties, firstName,lastName,fullName.

*/

const person={
    firstName: "Pramish",
    lastName:"Adhikari",
    fullName:function(){
        return this.firstName+ " "+this.lastName;
    }
}

// This will return "Pramish Adhikari":

console.log(person.fullName());
/*
<!DOCTYPE html>
<html>
<body>
<h2> JavaScript Function</h2>
<p> This example creates an object with 3 properties(firsName,lastName,fullName).</p>
<p id = "demo"></p>

<script>
const myObject = {
firstName: "Pramish",
lastName:"Adhikari",
fullName:function(){
return this.firstName+" "+this.lastName;
}
}
document.getElementById("demo").innerHTML = myObject.fullName();
</script>
</body>
</html>
*/
/*
Output: 
JavaScript Function

This example creates an object with 3 properties(firsName,lastName,fullName).

Pramish Adhikari
*/