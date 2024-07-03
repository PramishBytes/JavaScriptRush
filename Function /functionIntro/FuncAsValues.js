// Functions Can Be Used as values

/*
javascript functions can be used as values: 

Example: 
*/

function myFunction(a,b){

 return a*b;
}
let x = myFunction(4,3);

console.log(x);

/*
<!DOCTYPE html>
<body> 
<h2>JavaScript Functions</h2>
<p> Functions can be treated as values: </p>

<p> x = myFunction(4,3) or x =12</p>
<p> In both cases, x becomes a number with the value of 12.</p>
<p id = "demo"></p>
<script> 
function myFunction(a,b){
return a*b;
}
let x = myFunction(4,3);
document.getElementById("demo").innerHTML = x;
</script>
</body>
</html>
*/

// JavaScript functions can be used in expressions: 

function myFunction(a,b){
   return a*b;
}

let xy = myFunction(4,3)*2;

console.log(xy);

//OUTPUT: 24


