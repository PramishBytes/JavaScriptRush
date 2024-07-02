//JavaScript Const

/*
The const keyword was introduced in ES6(2015)
variable defined with const cannot be Redeclared 
Variables defined with const cannot be Reassigned 
Variables defined with const have Block Scope 

*/
//Cannot be Reassigned 

// A variable defined with the const keyword cannot be reassigned 

/*
<!DOCTYPE html> 
<html>
<body>
<h2> Javascript const</h2>

<p id = "demo"></p>

<script> 
try{ 
const PI= 3.14152653589793;
PI= 3.14;

}
catch(err){
document.getElementById("demo").innerHTML = err;
}
</script>
</body>
</html>
*/


/*
Output: JavaScript const
TypeError: Assignment to constant variable.

*/


//==========================================

//MUST BE ASSIGNED 
// JavaScript const variables must be assigned a value when they are declared: 

const PI =3.14159265359;

//Incorrect way: 
// const PI;
// PI = 3.1415;





// =============
///              ===============
// ==============

// When to use JavaScript const? 
/*
Always declare a variable with const when you know that the value should not be changed. 

Use const when you decalar: 
-> A new Array
-> A new Object
-> A new Function 
-> A new RegExp 
*/

//===========================
////=======================================
// ==== ========== ================= ====== =========== ========

//Constant Objects and Arrays: 

/*
The keyword const is a littel misleading. 

It does not define a const value. It defines a constant reference to a value. 

Because of this you can NOT: 

-> Reassign a constant value
-> Reassign a constant array
-> Reassign a constant object


BUT YOU CAN: 
-> Change the elements of constant arrays 
-> Change the properties of constant object

*/

